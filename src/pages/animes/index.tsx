import { GetServerSideProps, NextPage } from 'next';

const Animes: NextPage = () => {
  return <></>;
};

export default Animes;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
