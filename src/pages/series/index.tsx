import { PageLayout } from 'layouts/PageLayout';
import { GetServerSideProps, NextPage } from 'next';

const Series: NextPage = () => {
  return (
    <PageLayout
      title="Séries"
      subtitle="Sua página de séries"
      templateImage="./images/seriesPage.jpg"
    />
  );
};

export default Series;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
