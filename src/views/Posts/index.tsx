import Head from 'next/head';

import { RecentNews } from 'components/RecentNews';
import { PostContent } from './components/PostContent';

type PostViewProps = {
  slug: string;
};

export const PostView: React.FC<PostViewProps> = ({ slug }) => {
  return (
    <>
      <Head>
        <title>Naped - {slug.toLocaleUpperCase()}</title>
      </Head>

      <main className="container-global">
        <PostContent />
        <RecentNews />
      </main>
    </>
  );
};
