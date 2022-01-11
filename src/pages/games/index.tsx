import { PageLayout } from 'layouts/PageLayout';
import { GetServerSideProps, NextPage } from 'next';

const Games: NextPage = () => {
  return (
    <PageLayout
      title="Games"
      subtitle="Sua página de games"
      templateImage="./images/gamesPage.jpg"
    />
  );
};

export default Games;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.APP_URL);

  return {
    props: {},
  };
};
