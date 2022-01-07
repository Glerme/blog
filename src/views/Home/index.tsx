import styles from './styles/styles.module.scss';

export const HomeView: React.FC = () => {
  return (
    <main className="container-global">
      <section className={styles['container']}>
        <div className={styles['title-container']}>
          <h1>Mundo Nerd? Naped!</h1>

          <p>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e
            outros assuntos relacionados.
          </p>
        </div>

        <div className={styles['grid']}>
          <div className={styles['card']}>
            <img src="/images/img1.png" alt="Imagem 1" />
            <div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum adipisci at delectus cumque natus quod eaque corporis
                sunt alias dicta.
              </p>
            </div>
          </div>

          <div className={styles['left-grid']}>
            <div className={styles['card']}>
              <img src="/images/img2.png" alt="Imagem 2" />
              <div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum adipisci at delectus cumque natus quod eaque corporis
                  sunt alias dicta.
                </p>
              </div>
            </div>

            <div className={styles['card']}>
              <img src="/images/img3.png" alt="Imagem 3" />
              <div>
                <h2>Lorem ipsum dolor sit amet amet consectetur adipisicin</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
