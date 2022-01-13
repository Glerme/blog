import Link from 'next/link';

import { PostContent } from 'types/Post/PostContent';
import { PostImg } from 'types/Post/PostImg';

import styles from './styles.module.scss';

type MainGridProps = {
  mainCards: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
  }[];
};

export const MainGrid: React.FC<MainGridProps> = ({ mainCards }) => {
  return (
    <section>
      <div className={styles['title-container']}>
        <h1>Mundo Nerd? Naped!</h1>

        <p>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>

      <div className={styles['grid']}>
        {mainCards?.map((post, i) => {
          return (
            <Link href={`/post/${post.slug}`} passHref key={i}>
              <a className={styles['card']}>
                <img
                  src={post.image.url}
                  alt={post.image.alt || 'Imagem do post'}
                />
                <main>
                  <div className={styles['badge']}>
                    <p>{post.tagPost}</p>
                  </div>
                  <h2>{post.title}</h2>
                </main>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
