import { PageInfoType } from './graphql/PageInfo';
import { PostPreview } from './Post/PostPreview';

export type PageProps = {
  initialData: {
    totalCount: number;
    posts: PostPreview[];
    pageInfo: PageInfoType;
  };
};
