import { GetServerSideProps, NextPage } from 'next';

import { HomeView } from 'views/Home';
import { AllPosts } from 'routes/Home';

import { RichText } from 'prismic-dom';

import type { PostImg } from 'types/Post/PostImg';
import type { PostContent } from 'types/Post/PostContent';

type HomeProps = {
  mainCards: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
    dataPublicacao: number;
  }[];
  lastPosts: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
    dataPublicacao: number;
  }[];
};

const Home: NextPage<HomeProps> = ({ lastPosts, mainCards }) => {
  return <HomeView lastPosts={lastPosts} mainCards={mainCards} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await AllPosts();

  const lastPosts = data.allPostss.edges
    .map(post => {
      return {
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
        dataPublicacao: new Date(
          post.node._meta.firstPublicationDate,
        ).getTime(),
      };
    })
    .sort((a, b) => (a.dataPublicacao < b.dataPublicacao ? 1 : -1));

  const mainCards = lastPosts.splice(0, 3);

  return {
    props: {
      mainCards,
      lastPosts,
    },
  };
};
