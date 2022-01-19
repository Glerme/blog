import { GetServerSideProps, NextPage } from 'next';

import { RichText } from 'prismic-dom';

import type { PageProps } from 'types/PageProps';

import { PageLayout } from 'layouts/PageLayout';
import { getPreviewPosts } from 'routes/PreviewPosts';

const Games: NextPage<PageProps> = ({ posts, totalCount }) => {
  return (
    <PageLayout
      title="Games"
      subtitle="Sua página de games"
      templateImage="./images/gamesPage.jpg"
      posts={posts}
      totalCount={totalCount}
    />
  );
};

export default Games;

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
