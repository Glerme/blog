import { GetServerSideProps, NextPage } from 'next';

const Series: NextPage = () => {
  return <></>;
};

export default Series;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
