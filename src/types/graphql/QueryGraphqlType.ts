import { PageInfoType } from './PageInfo';

export type QueryGraphql<T> = {
  pageInfo: PageInfoType;
  totalCount: number;
  edges: {
    node: T;
  }[];
};
