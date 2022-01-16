import { NextApiRequest, NextApiResponse } from 'next';
import { getSearchedPost } from 'routes/Search';

const searchPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { search } = req.body;

    console.log(search);

    const searchedPosts = await getSearchedPost({ title_fulltext: search });

    console.log(searchedPosts);

    res.status(200).json(searchedPosts);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default searchPost;
