import { GetServerSideProps, NextPage } from 'next';

import { RichText } from 'prismic-dom';

import type { PageProps } from 'types/PageProps';

import { getPreviewPosts } from 'routes/PreviewPosts';

import { PageLayout } from 'layouts/PageLayout';

const Series: NextPage<PageProps> = ({ posts, totalCount }) => {
  return (
    <PageLayout
      title="Séries"
      subtitle="Sua página de séries"
      templateImage="./images/seriesPage.jpg"
      posts={posts}
      totalCount={totalCount}
    />
  );
};

export default Series;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const url = ctx.resolvedUrl;

  const { data } = await getPreviewPosts({ where: { tagPost_fulltext: url } });

  const parsedPosts = data.allPostss.edges.map(post => ({
    id: post.node._meta.id,
    title: RichText.asText(post.node.title),
    subtitle: RichText.asText(post.node.subtitle),
    tagPost: RichText.asText(post.node.tagPost).toUpperCase(),
    slug: post.node.slug,
    image: post.node.mainImg,
    link: `post/${post.node._meta.id}`,
  }));

  return {
    props: {
      totalCount: data.allPostss.totalCount,
      posts: parsedPosts,
    },
  };
};
