import { PageLayout } from 'layouts/PageLayout';
import { GetServerSideProps, NextPage } from 'next';

const Animes: NextPage = () => {
  return <PageLayout />;
};

export default Animes;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
