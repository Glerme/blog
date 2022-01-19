import { useState } from 'react';

import ReactPaginate from 'react-paginate';

import type { PostPreview } from 'types/Post/PostPreview';

import { LastNewsCard } from './LastNewsCard';

import styles from './styles.module.scss';

type RecentNewsProps = {
  isPaginate?: boolean;
  posts: PostPreview[];
};

export const RecentNews: React.FC<RecentNewsProps> = ({
  isPaginate = false,
  posts,
}) => {
  const [recentPosts, setRecentPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 6;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  // const currentPageData = recentPosts
  //   .slice(offset, offset + PER_PAGE)
  //   .map(post => (
  //     <LastNewsCard
  //       key={post.postId}
  //       postId={post.postId}
  //       img={post.img}
  //       link={post.link}
  //       tag={post.tag}
  //       title={post.title}
  //     />
  //   ));

  const pageCount = Math.ceil(recentPosts.length / PER_PAGE);

  console.log(posts);

  return (
    <div className={styles['container']}>
      <section className={styles['container-title']}>
        <h2>Notícias mais recentes</h2>
      </section>

      <section className={styles['container-grid']}>
        {posts.map(post => (
          <LastNewsCard
            key={post.id}
            postId={post.id}
            img={post.image.url}
            alt={post.image.alt}
            link={post.link}
            tag={post.tagPost}
            title={post.title}
          />
        ))}
      </section>

      {isPaginate && (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel="Voltar"
          nextLabel="Próximo"
          pageRangeDisplayed={3}
          renderOnZeroPageCount={null}
          containerClassName={styles['pagination-container']}
          pageLinkClassName={styles['page-link']}
          previousClassName={styles['previous-item-button']}
          nextClassName={styles['next-item-button']}
          breakLabel="..."
          breakClassName={styles['break-item-button']}
          activeClassName={styles['active-page']}
        />
      )}
    </div>
  );
};
