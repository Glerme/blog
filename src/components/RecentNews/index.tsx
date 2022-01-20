import type { PostPreview } from 'types/Post/PostPreview';

import { LastNewsCard } from './LastNewsCard';

import styles from './styles.module.scss';

type RecentNewsProps = {
  posts: PostPreview[];
};

export const RecentNews: React.FC<RecentNewsProps> = ({ posts }) => {
  return (
    <div className={styles['container']}>
      <section className={styles['container-title']}>
        <h2>Notícias mais recentes</h2>
      </section>

      <section className={styles['container-grid']}>
        {posts.map((post, i) => (
          <LastNewsCard
            key={i}
            postId={post.id}
            img={post.image.url}
            alt={post.image.alt}
            link={post.link}
            tag={post.tagPost}
            title={post.title}
          />
        ))}
      </section>
    </div>
  );
};
