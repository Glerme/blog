import { PostImg } from './PostImg';

export type PostPreview = {
  id: string;
  title: string;
  subtitle: string;
  tagPost: string;
  slug: string;
  image: PostImg;
  link: string;
};
