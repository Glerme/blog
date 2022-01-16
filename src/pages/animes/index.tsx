import { PageLayout } from 'layouts/PageLayout';
import { GetServerSideProps, NextPage } from 'next';

const Animes: NextPage = () => {
  return (
    <PageLayout
      title="Animes"
      subtitle="Sua página de animes"
      templateImage="./images/animePage.png"
    />
  );
};

export default Animes;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
