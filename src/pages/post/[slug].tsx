import { GetServerSideProps, NextPage } from 'next';

import { RichText } from 'prismic-dom';

import type { PostImg } from 'types/Post/PostImg';

import { PostView } from 'views/Posts';
import { getOnePost } from 'routes/Post';

type PostProps = {
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

const Post: NextPage<PostProps> = ({ post }) => {
  return <PostView post={post} />;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { slug } = ctx.params;

    const { data } = await getOnePost({ id: `${slug}` });

    const post = data.allPostss.edges.map(post => {
      return {
        ...post,
        id: post.node._meta.id,
        title: RichText.asText(post.node.title),
        subtitle: RichText.asText(post.node.subtitle),
        image: post.node.mainImg,
        tagPost: RichText.asText(post.node.tagPost).toUpperCase() || 'Sem tag',
        slug: post.node.slug,
        content: RichText.asHtml(post.node.content),
        authorImage: post.node.authorImage,
        authorName: RichText.asText(post.node.authorName),
        authorBackground: post.node.authorBg,
        authorAbout: RichText.asText(post.node.aboutAuthor),
      };
    });

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log({ error });

    return {
      props: {},
    };
  }
};
