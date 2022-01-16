import { useRouter } from 'next/router';

export const useRefresh = () => {
  const router = useRouter();

  return () => {
    router.replace(router.asPath);
  };
};
