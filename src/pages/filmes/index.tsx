import { GetServerSideProps, NextPage } from 'next';

const Filmes: NextPage = () => {
  return <></>;
};

export default Filmes;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
