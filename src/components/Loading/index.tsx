import styles from './styles.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <h1>Carregando...</h1>
        <div className={styles['loader']}></div>
      </div>
    </div>
  );
};
