import { MainGrid } from './components/MainGrid';
import { ContentGrid } from './components/ContentGrid';

import type { AllPostTypes } from 'types/AllPostTypes';

type HomeViewProps = {
  data: {
    main: AllPostTypes[];
    lastNews: AllPostTypes[];
    mostRead: AllPostTypes[];
  };
};

export const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  return (
    <main className="container-global">
      <MainGrid />
      <ContentGrid />
    </main>
  );
};
