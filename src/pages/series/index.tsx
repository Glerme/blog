import { GetStaticProps, NextPage } from 'next';

import type { PageProps } from 'types/PageProps';

import { getPreviewPosts } from 'routes/PreviewPosts';

import { PageLayout } from 'layouts/PageLayout';
import { formatPosts } from 'utils/formatPosts';

const Series: NextPage<PageProps> = ({ initialData }) => {
  return (
    <PageLayout
      title="Séries"
      subtitle="Sua página de séries"
      templateImage="./images/seriesPage.jpg"
      initialData={initialData}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getPreviewPosts({
    first: 3,
    where: { tagPost_fulltext: '/series' },
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

export default Series;
