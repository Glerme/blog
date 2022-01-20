import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

import type { PageProps } from 'types/PageProps';

import { getPreviewPosts } from 'routes/PreviewPosts';

import { PageLayout } from 'layouts/PageLayout';
import { formatPosts } from 'utils/formatPosts';

const Animes: NextPage<PageProps> = ({ initialData }) => {
  return (
    <PageLayout
      title="Animes"
      subtitle="Sua página de animes"
      templateImage="./images/animePage.png"
      initialData={initialData}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getPreviewPosts({
    first: 3,
    where: { tagPost_fulltext: '/animes' },
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

export default Animes;
