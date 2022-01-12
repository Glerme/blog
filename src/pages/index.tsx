import { NextPage } from 'next';

import { baseUrl } from '../services/api';

import type { AllPostTypes } from 'types/AllPostTypes';

import { serverSideHandler } from 'utils/serverSideHandler';

import { HomeView } from 'views/Home';

type HomeProps = {
  data: AllPostTypes[];
};

const Home: NextPage<HomeProps> = ({ data }) => {
  return <HomeView data={data} />;
};

export default Home;

export const getServerSideProps = serverSideHandler(async ctx => {
  try {
    const [{ data: projetos }, { data: habilidades }] = await Promise.all([
      baseUrl.get('api/projetos'),
      baseUrl.get('api/habilidades'),
    ]);

    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
});
