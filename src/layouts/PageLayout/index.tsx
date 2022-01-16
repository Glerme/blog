import { FormEvent, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post('/api/search-post', { search });

    router.push(router.asPath, { query: search });
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
