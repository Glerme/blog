import type { NextApiRequest, NextApiResponse } from 'next';

const ApiTest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ message: 'Hello World' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default ApiTest;
