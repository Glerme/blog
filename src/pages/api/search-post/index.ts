import { NextApiRequest, NextApiResponse } from 'next';

import { getSearchedPost } from 'routes/Search';

const searchPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, category, first } = req.body;

  const { data, errors } = await getSearchedPost({
    where: { title_fulltext: title, tagPost_fulltext: category },
    first: Number(first) || 3,
  });

  if (errors) {
    return res.status(400).json({ errors });
  }

  res.status(200).json(data);
};

export default searchPost;
