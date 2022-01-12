import { NextPage } from 'next';

import Prismic from 'prismic-javascript';

import { getPrismicClient } from 'services/prismic';

import { serverSideHandler } from 'utils/serverSideHandler';

import { PostView } from 'views/Posts';

type PostProps = {
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

const Post: NextPage<PostProps> = ({ slug = 'foi', data }) => {
  return <PostView slug={slug} data={data} />;
};

export default Post;

export const getServerSideProps = serverSideHandler(async ctx => {
  const { slug } = ctx.query;

  const prismic = getPrismicClient();

  const data = await (await prismic).getByUID('post', String(slug), {});

  console.log(data);

  return {
    props: {
      slug: 'fpi',
    },
  };
});
