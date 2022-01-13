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
  }[];
  lastPosts: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
  }[];
};

const Home: NextPage<HomeProps> = ({ lastPosts, mainCards }) => {
  return <HomeView lastPosts={lastPosts} mainCards={mainCards} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await AllPosts();

    const lastPosts = data.allPostss.edges.map(post => {
      return {
        id: post.node._meta.id,
        title: RichText.asText(post.node.title),
        subtitle: RichText.asText(post.node.subtitle),
        image: post.node.mainImg,
        tagPost: RichText.asText(post.node.tagPost).toUpperCase() || 'Sem tag',
        slug: post.node.slug,
      };
    });

    const mainCards = lastPosts.splice(0, 3);

    return {
      props: {
        mainCards,
        lastPosts,
      },
    };
  } catch (error) {
    console.log({ error });

    return {
      props: {},
    };
  }
};
