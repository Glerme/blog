import styles from './styles.module.scss';

import Link from 'next/link';

export const MainGrid: React.FC = () => {
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
        <Link href="/post/aaa" passHref>
          <a className={[styles['card'], styles['main-card']].join(' ')}>
            <img src="/images/img1.png" alt="Imagem 1" />
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

        <Link href={'#'} passHref>
          <a className={[styles['card'], styles['second-card']].join(' ')}>
            <img src="/images/img2.png" alt="Imagem 2" />
            <main>
              <div className={styles['badge']}>
                <p>Animes</p>
              </div>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h2>
            </main>
          </a>
        </Link>

        <Link href={'#'} passHref>
          <a className={[styles['card'], styles['third-card']].join(' ')}>
            <img src="/images/img3.png" alt="Imagem 3" />
            <main>
              <div className={styles['badge']}>
                <p>Games</p>
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
  );
};
