import { GetServerSideProps, NextPage } from 'next';

import { RichText } from 'prismic-dom';

import type { PostImg } from 'types/Post/PostImg';

import { PostView } from 'views/Posts';
import { getOnePost } from 'routes/Post';

type PostProps = {
  post: [
    {
      id: string;
      title: string;
      subtitle: string;
      image: PostImg;
      tagPost: string;
      slug: string;
      content: string;
      authorName: string;
      authorAbout: string;
      authorImage: PostImg;
      authorBackground: PostImg;
    },
  ];
};

const Post: NextPage<PostProps> = ({ post }) => {
  return <PostView post={post} />;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { slug } = ctx.params;

  const { data } = await getOnePost({ id: `${slug}` });

  const post = data.allPostss.edges.map(post => {
    return {
      ...post,
      id: post.node._meta.id,
      title: post.node.title
        ? RichText.asText(post.node.title)
        : 'Título Inválido',
      subtitle: post.node.title
        ? RichText.asText(post.node.subtitle)
        : 'Subtitulo inválido',
      image: post.node.mainImg || {
        url: '/images/404.png',
        alt: 'Imagem não encontrada',
      },
      tagPost: post.node.tagPost
        ? RichText.asText(post.node.tagPost).toUpperCase()
        : 'Sem tag',
      slug: post.node.slug || 'Sem slug',
      content: post.node.content
        ? RichText.asHtml(post.node.content)
        : '<h1>Conteúdo inválido</h1>',
      authorImage: post.node.authorImage || {
        url: '/images/404.png',
        alt: 'Imagem não encontrada',
      },
      authorName: post.node.authorName
        ? RichText.asText(post.node.authorName)
        : 'Sem Nome do autor',
      authorBackground: post.node.authorBg || {
        url: '/images/404.png',
        alt: 'Imagem não encontrada',
      },
      authorAbout: post.node.aboutAuthor
        ? RichText.asText(post.node.aboutAuthor)
        : 'Sem sobre o autor',
    };
  });

  console.log(post);

  return {
    props: {
      post,
    },
  };
};
