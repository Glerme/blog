import { MainGrid } from './components/MainGrid';
import { ContentGrid } from './components/ContentGrid';

export const HomeView: React.FC = () => {
  return (
    <main className="container-global">
      <MainGrid />
      <ContentGrid />
    </main>
  );
};
