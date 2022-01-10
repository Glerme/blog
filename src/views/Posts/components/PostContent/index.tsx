import styles from './styles.module.scss';

export const PostContent: React.FC = () => {
  return (
    <div>
      <section className={styles['title-container']}>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          eaque dolorem explicabo, facilis quidem.
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <span>10 de Janeiro de 2022</span>
      </section>

      <section className={styles['content']}>
        <div className={styles['main-image']}>
          <p className={styles['badge']}>Anime</p>
          <img src="/images/img8.png" alt="Imagem 8" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa
          quisquam, facere expedita sint libero provident laudantium.
          Consequatur debitis at nihil maxime iste ullam nesciunt error atque
          reprehenderit dolorum similique mollitia itaque modi dicta illum, rem
          laboriosam velit alias ab nisi sunt temporibus voluptas? Quod
          cupiditate nulla aut iure eveniet unde, necessitatibus exercitationem
          dolorem maxime sapiente velit voluptas optio, odit, fugiat eum
          reprehenderit ipsa porro at debitis adipisci cumque sit? Neque
          recusandae similique odit mollitia id vero ad officiis. Quaerat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa
          quisquam, facere expedita sint libero provident laudantium.
          Consequatur debitis at nihil maxime iste ullam nesciunt error atque
          reprehenderit dolorum similique mollitia itaque modi dicta illum, rem
          laboriosam velit alias ab nisi sunt temporibus voluptas? Quod
          cupiditate nulla aut iure eveniet unde, necessitatibus exercitationem
          dolorem maxime sapiente velit voluptas optio, odit, fugiat eum
          reprehenderit ipsa porro at debitis adipisci cumque sit? Neque
          recusandae similique odit mollitia id vero ad officiis. Quaerat?
        </p>

        <div>
          <img src="/images/img9.png" alt="Imagem 9" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa
          quisquam, facere expedita sint libero provident laudantium.
          Consequatur debitis at nihil maxime iste ullam nesciunt error atque
          reprehenderit dolorum similique mollitia itaque modi dicta illum, rem
          laboriosam velit alias ab nisi sunt temporibus voluptas? Quod
          cupiditate nulla aut iure eveniet unde, necessitatibus exercitationem
          dolorem maxime sapiente velit voluptas optio, odit, fugiat eum
          reprehenderit ipsa porro at debitis adipisci cumque sit? Neque
          recusandae similique odit mollitia id vero ad officiis. Quaerat?
        </p>
      </section>
    </div>
  );
};
