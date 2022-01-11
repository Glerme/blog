import { PageLayout } from 'layouts/PageLayout';
import { GetServerSideProps, NextPage } from 'next';

const Filmes: NextPage = () => {
  return (
    <PageLayout
      title="Filmes"
      subtitle="Sua página de filmes"
      templateImage="./images/moviesPage.jpg"
    />
  );
};

export default Filmes;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
