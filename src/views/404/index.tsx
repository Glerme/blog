import Link from 'next/link';

import styles from './styles.module.scss';

export const Custom404View: React.FC = () => {
  return (
    <main className="container-global">
      <div className={styles['container']}>
        <section className={styles['content']}>
          <h1>Tenho más notícias para você!</h1>
          <p>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>
          <Link href={'/'} passHref>
            <a className={styles['home-button']}>Voltar a Home</a>
          </Link>
        </section>

        <section>
          <img src="/images/404.png" alt="404" />
        </section>
      </div>
    </main>
  );
};
