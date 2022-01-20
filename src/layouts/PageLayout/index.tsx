import { FormEvent, useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

import { Loading } from 'components/Loading';
import { RecentNews } from 'components/RecentNews';
import { InputSearch } from 'components/Forms/InputSearch';

import type { PostPreview } from 'types/Post/PostPreview';
import type { PageInfoType } from 'types/graphql/PageInfo';

import { AllPreviewQueryProps } from 'routes/PreviewPosts';

import { formatPosts } from 'utils/formatPosts';

import styles from './styles.module.scss';

type PageLayoutProps = {
  title: string;
  subtitle: string;
  templateImage: string;
  initialData: {
    posts: PostPreview[];
    totalCount: number;
    pageInfo: PageInfoType;
  };
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  templateImage,
  initialData,
}) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(initialData.posts);
  const [pageInfo, setPageInfo] = useState(initialData.pageInfo);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      const { data } = await axios.post('/api/search-post', {
        title: search,
        category: router.asPath,
      });

      const formatedPosts = formatPosts(data);

      setPosts(formatedPosts);
    } catch (error) {
      console.log({ error });

      toast.error('Ocorreu um erro para buscar notícias', {
        theme: 'dark',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getMorePosts = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.post<AllPreviewQueryProps>(
        `/api/get-more-posts`,
        {
          after: pageInfo.endCursor,
          category: router.asPath,
        },
      );

      const formatedPosts = formatPosts(data);

      setPosts(newPosts => [...newPosts].concat(formatedPosts));
      setPageInfo(data.allPostss.pageInfo);
    } catch (err) {
      console.log({ err });

      toast.error('Ocorreu um erro para buscar notícias', {
        theme: 'dark',
      });
    } finally {
      setIsLoading(false);
    }
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

        {initialData.totalCount > 0 ? (
          <>
            <RecentNews posts={posts} />

            {isLoading ? (
              <Loading />
            ) : pageInfo.hasNextPage && posts.length !== 0 ? (
              <div className={styles['button-get-more-container']}>
                <button
                  type="button"
                  onClick={getMorePosts}
                  className={styles['button-get-more']}
                >
                  <FiChevronDown size={24} />
                  Exibir mais
                </button>
              </div>
            ) : (
              posts.length === 0 && (
                <div className={styles['empty-container']}>
                  <h1>Notícia não encontrada</h1>
                </div>
              )
            )}
          </>
        ) : (
          <div className={styles['empty-container']}>
            <h1>Não possui notícias recentes</h1>
          </div>
        )}
      </div>
    </main>
  );
};
