import axios from 'axios';
import { Pagination } from 'components/Pagination';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

export const RecentNews: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, _] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );

        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log({ error });

        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  //Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <div>
      <section className={styles['container-title']}>
        <h2>Notícias mais recentes</h2>
      </section>

      <section className={styles['container-grid']}>
        {currentPosts.map(post => (
          <p key={post.id}>{post.title}</p>
        ))}

        <div className={styles['last-news-card']}>
          <Link href={'#'} passHref>
            <a>
              <img src="/images/img5.png" alt="Imagem 5" />
              <main>
                <div className={styles['badge']}>
                  <p>Séries</p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>
              </main>
            </a>
          </Link>
        </div>
        <div className={styles['last-news-card']}>
          <Link href={'#'} passHref>
            <a>
              <img src="/images/img6.png" alt="Imagem 6" />
              <main>
                <div className={styles['badge']}>
                  <p>Séries</p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>
              </main>
            </a>
          </Link>
        </div>
        <div className={styles['last-news-card']}>
          <Link href={'#'} passHref>
            <a>
              <img src="/images/img7.png" alt="Imagem 7" />
              <main>
                <div className={styles['badge']}>
                  <p>Séries</p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>
              </main>
            </a>
          </Link>
        </div>

        <div className={styles['last-news-card']}>
          <Link href={'#'} passHref>
            <a>
              <img src="/images/img7.png" alt="Imagem 7" />
              <main>
                <div className={styles['badge']}>
                  <p>Séries</p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>
              </main>
            </a>
          </Link>
        </div>

        <div className={styles['last-news-card']}>
          <Link href={'#'} passHref>
            <a>
              <img src="/images/img7.png" alt="Imagem 7" />
              <main>
                <div className={styles['badge']}>
                  <p>Séries</p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>
              </main>
            </a>
          </Link>
        </div>

        <div className={styles['last-news-card']}>
          <Link href={'#'} passHref>
            <a>
              <img src="/images/img7.png" alt="Imagem 7" />
              <main>
                <div className={styles['badge']}>
                  <p>Séries</p>
                </div>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </h2>
              </main>
            </a>
          </Link>
        </div>
      </section>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
