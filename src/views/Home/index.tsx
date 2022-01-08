import { MainGrid } from './components/MainGrid';

import styles from './styles/styles.module.scss';

export const HomeView: React.FC = () => {
  return (
    <main className="container-global">
      <MainGrid />

      <section className={styles['middle-grid']}>
        <div>container com rolagem</div>
        <div>mais lidas</div>
      </section>
    </main>
  );
};
