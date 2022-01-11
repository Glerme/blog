import { FormEvent, useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import { RecentNews } from 'components/RecentNews';
import { InputSearch } from 'components/Forms/InputSearch';

import styles from './styles.module.scss';

type PageLayoutProps = {
  title: string;
  subtitle: string;
  templateImage: string;
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  templateImage,
}) => {
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
            <img src={templateImage} alt={title} />
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
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

        <RecentNews isPaginate />
      </div>
    </main>
  );
};
