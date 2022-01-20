import Link from 'next/link';

import type { PostImg } from 'types/Post/PostImg';
import type { PostContent } from 'types/Post/PostContent';

import styles from './styles.module.scss';

type ContentGridProps = {
  lastPosts: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
    dataPublicacao: number;
  }[];
  mostReads: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
    dataPublicacao: number;
  }[];
};

export const ContentGrid: React.FC<ContentGridProps> = ({
  lastPosts,
  mostReads,
}) => {
  return (
    <div className={styles['middle-grid']}>
      <section className={styles['last-notices-container']}>
        <div className={styles['container-title']}>
          <h2>Ultimas Notícias</h2>
        </div>
        {lastPosts?.map((lastPost, i) => (
          <div className={styles['last-notices-card']} key={i}>
            <img src={lastPost.image.url} alt={lastPost.image.alt} />
            <div>
              <div className={styles['badge']}>
                <p>{lastPost.tagPost}</p>
              </div>
              <h2>
                <Link href={`/post/${lastPost.id}`} passHref>
                  <a>{lastPost.title}</a>
                </Link>
              </h2>
              <p>{lastPost.subtitle}</p>
              <span>
                {new Intl.DateTimeFormat('pt-BR', {
                  timeZone: 'UTC',
                }).format(lastPost.dataPublicacao)}
              </span>
              <Link href={`/post/${lastPost.id}`} passHref>
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

        {mostReads?.map((mostRead, i) => (
          <div className={styles['most-reads-card']} key={i}>
            <Link href={`/post/${mostRead.id}`} passHref>
              <a>
                <img src={mostRead.image.url} alt={mostRead.image.alt} />
                <main>
                  <div className={styles['badge']}>
                    <p>{mostRead.tagPost}</p>
                  </div>
                  <h2>{mostRead.title}</h2>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};
