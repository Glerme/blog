import { FormEvent, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

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
    e.preventDefault();

    await axios.post('/api/search-post', { search });

    router.push(router.asPath, { query: search });
  };

  const getMorePosts = async () => {
    setIsLoading(true);
    try {
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
              <div>LOADING...</div>
            ) : (
              pageInfo.hasNextPage && (
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
