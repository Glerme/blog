import { RichText } from 'prismic-dom';
import { AllPreviewQueryProps } from 'routes/PreviewPosts';

export const formatPosts = (posts: AllPreviewQueryProps) => {
  const formatedPosts = posts.allPostss.edges
    .map(post => ({
      id: post.node._meta.id,
      title: RichText.asText(post.node.title),
      subtitle: RichText.asText(post.node.subtitle),
      tagPost: RichText.asText(post.node.tagPost).toUpperCase(),
      slug: String(post.node.slug),
      image: post.node.mainImg,
      link: `post/${post.node._meta.id}`,
      dataPublicacao: new Date(post.node._meta.firstPublicationDate).getTime(),
    }))
    .sort((a, b) => (a.dataPublicacao < b.dataPublicacao ? 1 : -1));

  return formatedPosts;
};
