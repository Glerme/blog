import { GetServerSideProps, NextPage } from 'next';

import { HomeView } from 'views/Home';

const Home: NextPage = () => {
  return <HomeView />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
