import Link from 'next/link';

import type { PostImg } from 'types/Post/PostImg';
import type { PostContent } from 'types/Post/PostContent';

import styles from './styles.module.scss';

type ContentGridProps = {
  lastPosts: {
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
  }[];
};

export const ContentGrid: React.FC<ContentGridProps> = ({ lastPosts }) => {
  return (
    <div className={styles['middle-grid']}>
      <section className={styles['last-notices-container']}>
        <div className={styles['container-title']}>
          <h2>Ultimas Notícias</h2>
        </div>
        {lastPosts.map((lastPost, i) => (
          <div className={styles['last-notices-card']} key={i}>
            <img src={lastPost.image.url} alt={lastPost.image.alt} />
            <div>
              <div className={styles['badge']}>
                <p>{lastPost.tagPost}</p>
              </div>
              <h2>{lastPost.title}</h2>
              <p>{lastPost.subtitle}</p>
              <span>00/00/0000</span>
              <Link href={`/post/${lastPost.slug}`} passHref>
                <a>Ler Notícia</a>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className={styles['most-reads-container']}>
        <div className={styles['container-title']}>
          <h2>Mais Lidas</h2>
        </div>

        <div className={styles['most-reads-card']}>
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

        <div className={styles['most-reads-card']}>
          <Link href={'#'} passHref>
            <a className={[styles['most-reads-card']].join(' ')}>
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

        <div className={styles['most-reads-card']}>
          <Link href={'#'} passHref>
            <a className={[styles['most-reads-card']].join(' ')}>
              <img src="/images/img7.png" alt="Imagem " />
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
    </div>
  );
};
