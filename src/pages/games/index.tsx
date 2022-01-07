import { GetServerSideProps, NextPage } from 'next';

const Games: NextPage = () => {
  return <></>;
};

export default Games;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
