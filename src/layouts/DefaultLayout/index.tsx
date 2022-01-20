import { useState } from 'react';

import { Menu } from 'components/Menu';

import styles from './styles.module.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles['global-container']}>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>{children}</main>
      <footer className={styles['footer']}>
        <h2>Naped</h2>
        <p>
          Todas as imagens de filmes, séries e etc são marcas registradas dos
          seus respectivos proprietários.
        </p>
        <p>
          Criado por{' '}
          <a href="https://glerme.dev/" target="_blank" rel="noreferrer">
            Guilherme Felipe
          </a>
        </p>
      </footer>
    </div>
  );
};
