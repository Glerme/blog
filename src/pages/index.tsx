import { GetServerSideProps, NextPage } from 'next';

import { baseUrl } from '../services/api';

import type { AllPostTypes } from 'types/AllPostTypes';

import { serverSideHandler } from 'utils/serverSideHandler';

import { HomeView } from 'views/Home';
import { client } from 'services/graphql';
import gql from 'graphql-tag';
import { AllPosts } from 'routes/Home';

type HomeProps = {
  data: {
    main: AllPostTypes[];
    lastNews: AllPostTypes[];
    mostRead: AllPostTypes[];
  };
};

const Home: NextPage<HomeProps> = ({ data }) => {
  return <HomeView data={data} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result = await AllPosts();

    console.log(result);

    const [{ data: main }, { data: lastNews }, { data: mostRead }] =
      await Promise.all([
        baseUrl.get('/api/main'),
        baseUrl.get('/api/last-news'),
        baseUrl.get('/api/most-read'),
      ]);

    return {
      props: {
        data: {
          main,
          lastNews,
          mostRead,
        },
      },
    };
  } catch (error) {
    console.log({ error });

    return {
      props: {},
    };
  }
};
