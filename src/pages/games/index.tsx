import { GetStaticProps, NextPage } from 'next';

import type { PageProps } from 'types/PageProps';

import { PageLayout } from 'layouts/PageLayout';

import { getPreviewPosts } from 'routes/PreviewPosts';

import { formatPosts } from 'utils/formatPosts';

const Games: NextPage<PageProps> = ({ initialData }) => {
  return (
    <PageLayout
      title="Games"
      subtitle="Sua página de games"
      templateImage="./images/gamesPage.jpg"
      initialData={initialData}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getPreviewPosts({
    first: 3,
    where: { tagPost_fulltext: '/games' },
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

export default Games;
