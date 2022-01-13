import Prismic from 'prismic-javascript';

export const getPrismicClient = async (req?: unknown) => {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
};
