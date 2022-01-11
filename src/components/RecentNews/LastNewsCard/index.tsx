import Link from 'next/link';

import styles from './styles.module.scss';

type LastNewsCard = {
  postId: number;
  link: string;
  img: string;
  tag: string;
  title: string;
};

export const LastNewsCard: React.FC<LastNewsCard> = ({
  postId,
  img,
  link,
  tag,
  title,
}) => {
  return (
    <div className={styles['last-news-card']}>
      <Link href={link} passHref>
        <a>
          <img src={img} alt="Imagem 5" />
          <main>
            <div className={styles['badge']}>
              <p>{tag}</p>
            </div>
            <h2>{title}</h2>
          </main>
        </a>
      </Link>
    </div>
  );
};
