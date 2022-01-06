import { useState } from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={[
          isMenuOpen ? styles['overlay'] : '',
          styles['nav-container'],
        ].join(' ')}
      >
        <nav>
          <div className={styles['logo-button']}>
            <Link href="#" passHref>
              <a>
                <h1>Naped</h1>
              </a>
            </Link>
          </div>

          <ul
            className={[
              styles['nav-buttons'],
              `${isMenuOpen ? styles['nav-buttons-open'] : ''}`,
            ].join(' ')}
          >
            <li>
              <a href="/" title="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/series" title="Agentes">
                Séries
              </a>
            </li>

            <li>
              <a href="/filmes" title="Filmes">
                Filmes
              </a>
            </li>

            <li>
              <a href="/animes" title="Animes">
                Animes
              </a>
            </li>

            <li>
              <a href="/games" title="Games">
                Games
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={[
            styles['menu-button'],
            `${isMenuOpen ? styles['active'] : ''}`,
          ].join(' ')}
        >
          <div className={styles['hamburguer']}></div>
        </button>
      </div>

      <div className={styles['content']}>{children}</div>
    </>
  );
};
