import Link from 'next/link';

import { ActiveLink } from './ActiveLink';

import styles from './styles.module.scss';

type MenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={[
        isMenuOpen ? styles['overlay'] : '',
        styles['nav-container'],
      ].join(' ')}
    >
      <nav>
        <div className={styles['logo-button']} title="Blog">
          <Link href="/" passHref>
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
            <ActiveLink
              href="/"
              passHref
              activeClassName={styles['link-active']}
            >
              <a title="Home">Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/series"
              passHref
              activeClassName={styles['link-active']}
            >
              <a title="Séries">Séries</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/filmes"
              passHref
              activeClassName={styles['link-active']}
            >
              <a title="Filmes">Filmes</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/animes"
              passHref
              activeClassName={styles['link-active']}
            >
              <a title="Animes">Animes</a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/games"
              passHref
              activeClassName={styles['link-active']}
            >
              <a title="Games">Games</a>
            </ActiveLink>
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
  );
};
