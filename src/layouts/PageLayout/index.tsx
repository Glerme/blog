import { FormEvent, useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import { RecentNews } from 'components/RecentNews';
import { InputSearch } from 'components/Forms/InputSearch';

import styles from './styles.module.scss';

export const PageLayout: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Busca realizada: ', search);
  };

  return (
    <main className="container-global">
      <div>
        <div className={styles['header-container']}>
          <div className={styles['img-container']}>
            <img src="/images/animePage.png" alt="Capa Anime" />
            <div>
              <h1>Animes</h1>
              <p>Tudo sobre seus animes favoritos!</p>
            </div>
          </div>

          <form onSubmit={e => handleSubmit(e)}>
            <InputSearch
              name="search"
              icon={FiSearch}
              placeholder="Pesquise Aqui!"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        </div>

        <RecentNews />
      </div>
    </main>
  );
};
