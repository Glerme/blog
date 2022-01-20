import { GetServerSideProps, NextPage } from 'next';

import { RichText } from 'prismic-dom';

import { getPreviewPosts } from 'routes/PreviewPosts';

import { PageLayout } from 'layouts/PageLayout';

import type { PostPreview } from 'types/Post/PostPreview';

type MoviesProps = {
  totalCount: number;
  posts: PostPreview[];
};

const Filmes: NextPage<MoviesProps> = ({ posts, totalCount }) => {
  return (
    <PageLayout
      title="Filmes"
      subtitle="Sua página de filmes"
      templateImage="./images/moviesPage.jpg"
      posts={posts}
      totalCount={totalCount}
    />
  );
};

export default Filmes;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const url = ctx.resolvedUrl;

  const { data } = await getPreviewPosts({ where: { tagPost_fulltext: url } });

  const parsedPosts = data.allPostss.edges
    .map(post => ({
      id: post.node._meta.id,
      title: RichText.asText(post.node.title),
      subtitle: RichText.asText(post.node.subtitle),
      tagPost: RichText.asText(post.node.tagPost).toUpperCase(),
      slug: post.node.slug,
      image: post.node.mainImg,
      link: `post/${post.node._meta.id}`,
      dataPublicacao: new Date(post.node._meta.firstPublicationDate).getTime(),
    }))
    .sort((a, b) => (a.dataPublicacao < b.dataPublicacao ? 1 : -1));

  return {
    props: {
      totalCount: data.allPostss.totalCount,
      posts: parsedPosts,
    },
  };
};
