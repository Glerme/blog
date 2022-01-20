import { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewPosts } from 'routes/PreviewPosts';

const getMorePosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { first, after, category } = req.body;

  const { data, errors } = await getPreviewPosts({
    first: Number(first) || 3,
    after: `${after}`,
    where: { tagPost_fulltext: category },
  });

  if (errors) {
    return res.status(400).json({ errors });
  }

  return res.status(200).json(data);
};

export default getMorePosts;
