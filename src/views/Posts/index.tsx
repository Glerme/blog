import Head from 'next/head';

import type { PostImg } from 'types/Post/PostImg';

import { PostContent } from './components/PostContent';

type PostViewProps = {
  post: [
    {
      id: string;
      title: string;
      subtitle: string;
      image: PostImg;
      tagPost: string;
      slug: string;
      content: string;
      authorName: string;
      authorAbout: string;
      authorImage: PostImg;
      authorBackground: PostImg;
    },
  ];
};

export const PostView: React.FC<PostViewProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Naped - {post[0]?.title.toUpperCase() || ''}</title>
      </Head>

      <main className="container-global">
        <PostContent post={post} />
      </main>
    </>
  );
};
