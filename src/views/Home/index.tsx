import { MainGrid } from './components/MainGrid';
import { ContentGrid } from './components/ContentGrid';

import { AllPostsQueryProps } from 'routes/Home';
import { PostImg } from 'types/Post/PostImg';
import { PostContent } from 'types/Post/PostContent';

type HomeViewProps = {
  mainCards: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
    dataPublicacao: number;
  }[];
  lastPosts: {
    id: string;
    title: string;
    subtitle: string;
    image: PostImg;
    tagPost: string;
    slug: PostContent[];
    dataPublicacao: number;
  }[];
};

export const HomeView: React.FC<HomeViewProps> = ({ mainCards, lastPosts }) => {
  return (
    <main className="container-global">
      <MainGrid mainCards={mainCards} />
      <ContentGrid lastPosts={lastPosts} />
    </main>
  );
};
