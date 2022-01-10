import { GetServerSideProps } from 'next';
import { PostView } from 'views/Posts';

type PostProps = {
  slug: string;
};

const Post: React.FC<PostProps> = ({ slug }) => {
  return <PostView slug={slug} />;
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
};
