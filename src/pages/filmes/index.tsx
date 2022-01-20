import { GetStaticProps, NextPage } from 'next';

import type { PageProps } from 'types/PageProps';

import { getPreviewPosts } from 'routes/PreviewPosts';

import { PageLayout } from 'layouts/PageLayout';

import { formatPosts } from 'utils/formatPosts';

const Filmes: NextPage<PageProps> = ({ initialData }) => {
  return (
    <PageLayout
      title="Filmes"
      subtitle="Sua página de filmes"
      templateImage="./images/moviesPage.jpg"
      initialData={initialData}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getPreviewPosts({
    first: 3,
    where: { tagPost_fulltext: '/filmes' },
  });

  const formatedPosts = formatPosts(data);

  return {
    props: {
      initialData: {
        totalCount: data.allPostss.totalCount,
        posts: formatedPosts,
        pageInfo: data.allPostss.pageInfo,
      },
    },
    revalidate: 60 * 30,
  };
};

export default Filmes;
