import Link from 'next/link';

import styles from './styles.module.scss';

export const ContentGrid: React.FC = () => {
  return (
    <div className={styles['middle-grid']}>
      <section className={styles['last-notices-container']}>
        <div className={styles['container-title']}>
          <h2>Ultimas Notícias</h2>
        </div>

        <div className={styles['last-notices-card']}>
          <img src="/images/img3.png" alt="Image 3" />
          <div>
            <div className={styles['badge']}>
              <p>Games</p>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              rerum!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              fugiat ducimus debitis libero qui. Rem rerum explicabo quo
              exercitationem .
            </p>
            <span>00/00/0000</span>
            <Link href="#" passHref>
              <a>Ler Notícia</a>
            </Link>
          </div>
        </div>
        <div className={styles['last-notices-card']}>
          <img src="/images/img3.png" alt="Image 3" />
          <div>
            <div className={styles['badge']}>
              <p>Séries</p>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              rerum!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              fugiat ducimus debitis libero qui. Rem rerum explicabo quo
              exercitationem .
            </p>
            <span>00/00/0000</span>
            <Link href="#" passHref>
              <a>Ler Notícia</a>
            </Link>
          </div>
        </div>
        <div className={styles['last-notices-card']}>
          <img src="/images/img3.png" alt="Image 3" />
          <div>
            <div className={styles['badge']}>
              <p>Filmes</p>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              rerum!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              fugiat ducimus debitis libero qui. Rem rerum explicabo quo
              exercitationem .
            </p>
            <span>00/00/0000</span>
            <Link href="#" passHref>
              <a>Ler Notícia</a>
            </Link>
          </div>
        </div>
        <div className={styles['last-notices-card']}>
          <img src="/images/img5.png" alt="Image 3" />
          <div>
            <div className={styles['badge']}>
              <p>Filmes</p>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              rerum!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              fugiat ducimus debitis libero qui. Rem rerum explicabo quo
              exercitationem .
            </p>
            <span>00/00/0000</span>
            <Link href="#" passHref>
              <a>Ler Notícia</a>
            </Link>
          </div>
        </div>
        <div className={styles['last-notices-card']}>
          <img src="/images/img6.png" alt="Image 3" />
          <div>
            <div className={styles['badge']}>
              <p>Filmes</p>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              rerum!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              fugiat ducimus debitis libero qui. Rem rerum explicabo quo
              exercitationem .
            </p>
            <span>00/00/0000</span>
            <Link href="#" passHref>
              <a>Ler Notícia</a>
            </Link>
          </div>
        </div>
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
