import type { PostImg } from 'types/Post/PostImg';

import styles from './styles.module.scss';

type PostContentProps = {
  post: [
    {
      id: string;
      title: string;
      subtitle: string;
      image: PostImg;
      tagPost: string;
      slug: string;
      content: string;
      authorName: string;
      authorAbout: string;
      authorImage: PostImg;
      authorBackground: PostImg;
    },
  ];
};

export const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div>
      <section className={styles['title-container']}>
        <h1>{post[0].title}</h1>
        <p>{post[0].subtitle}</p>

        <time>{}</time>
      </section>

      <section className={styles['content-container']}>
        <div className={styles['main-image']}>
          <p className={styles['badge']}>{post[0].tagPost}</p>
          <img src={post[0].image.url} alt={post[0].image.alt} />
        </div>

        <div
          className={styles['content']}
          dangerouslySetInnerHTML={{ __html: post[0].content }}
        />
      </section>

      <footer className={styles['author-container']}>
        <img
          src={post[0].authorBackground.url}
          alt={post[0].authorBackground.alt}
          className={styles['background-container-author']}
        />

        <section className={styles['author-content']}>
          <div>
            <img
              src={post[0]?.authorImage?.url}
              alt={post[0]?.authorImage?.alt}
            />
          </div>

          <article>
            <h5>Autor</h5>
            <h3>{post[0].authorName}</h3>
            <p>{post[0].authorAbout}</p>
          </article>
        </section>
      </footer>
    </div>
  );
};
