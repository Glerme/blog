import styles from './styles.module.scss';

type PostContentProps = {
  data: any[];

  // data: {
  //   id: string;
  //   uid: string;
  //   url: string;
  //   type: string;
  //   href: string;
  //   tags: any[];
  //   first_publication_date: string;
  //   last_publication_date: string;
  //   slugs: string[];
  //   data: {
  //     title: [{ type: string; text: string; spans: string[] }];
  //     content: Record<string, any>[];
  //   };
  // }[];
};

export const PostContent: React.FC<PostContentProps> = ({ data }) => {
  // console.log(data);

  return (
    <div>
      <section className={styles['title-container']}>
        {/* <h1>{data[0].data.title[0].text}</h1> */}
        <p>{}</p>

        <time>{}</time>
      </section>

      <section className={styles['content']}>
        <div className={styles['main-image']}>
          <p className={styles['badge']}>Anime</p>
          <img src="/images/img8.png" alt="Imagem 8" />
        </div>
        data[0].data.content[0].text
      </section>

      <footer className={styles['author-container']}>
        <img
          src="/images/moviesPage.jpg"
          alt="background"
          className={styles['background-container-author']}
        />

        <section className={styles['author-content']}>
          <div>
            <img src="/images/foto.png" alt="Autor" />
          </div>

          <article>
            <h5>Autor</h5>
            <h3>Guilherme Felipe</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              sunt, minus voluptatibus unde cumque repellat nesciunt corporis
              itaque dolore consequuntur sapiente quo rem adipisci pariatur
              facilis consequatur, nemo nisi amet?
            </p>
          </article>
        </section>
      </footer>
    </div>
  );
};
