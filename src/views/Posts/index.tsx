import Head from 'next/head';

import { RecentNews } from 'components/RecentNews';
import { PostContent } from './components/PostContent';

type PostViewProps = {
  slug: string;
  data: any[];
  // data: {
  //   id: string;
  //   uid: string;
  //   url: string;
  //   type: string;
  //   href: string;
  //   tags: any[];
  //   first_publication_date: string;
  //   last_publication_date: string;
  //   slugs: string[];
  //   data: {
  //     title: [{ type: string; text: string; spans: string[] }];
  //     content: Record<string, any>[];
  //   };
  // }[];
};

export const PostView: React.FC<PostViewProps> = ({ slug, data }) => {
  return (
    <>
      <Head>
        <title>Naped - {slug.toLocaleUpperCase()}</title>
      </Head>

      <main className="container-global">
        <PostContent data={data} />
        <RecentNews />
      </main>
    </>
  );
};
