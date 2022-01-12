import { MainGrid } from './components/MainGrid';
import { ContentGrid } from './components/ContentGrid';

import type { AllPostTypes } from 'types/AllPostTypes';

type HomeViewProps = {
  data: AllPostTypes[];
};

export const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  console.log(data);

  return (
    <main className="container-global">
      <MainGrid />
      <ContentGrid />
    </main>
  );
};
