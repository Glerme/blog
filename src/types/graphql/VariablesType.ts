export type SearchVariablesType = {
  where: {
    title_fulltext?: string;
    subtitle_fulltext?: string;
    tagPost_fulltext?: string;
    slug?: string;
    slug_fulltext?: string;
    content_fulltext?: string;
    authorName_fulltext?: string;
    aboutAuthor_fulltext?: string;
  };
};
