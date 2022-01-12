import type { NextApiRequest, NextApiResponse } from 'next';

import Prismic from 'prismic-javascript';

import { getPrismicClient } from 'services/prismic';

const mostReads = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const prismic = await getPrismicClient();

    const response = await prismic.query(
      [Prismic.Predicates.at('document.type', 'mais-lidas')],
      {
        fetch: ['post.title', 'post.content'],
        pageSize: 20,
      },
    );

    const lastPosts = response.results
      .map(post => {
        return {
          ...post,
          first_publication_date: new Date(
            post.first_publication_date,
          ).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        };
      })
      .sort((a, b) =>
        a.first_publication_date < b.first_publication_date ? -1 : 1,
      );

    res.status(200).json(lastPosts);
  } catch (error) {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default mostReads;
