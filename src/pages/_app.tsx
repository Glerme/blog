import { useEffect, useState } from 'react';

import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { DefaultLayout } from 'layouts/DefaultLayout';

import { ErrorBoundary } from 'components/ErrorBoundary';

import 'styles/global.scss';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const [isRouterLoading, setIsRouterLoading] = useState(false);

  useEffect(() => {
    const start = () => setIsRouterLoading(true);
    const end = () => setIsRouterLoading(false);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Naped</title>
      </Head>

      {isRouterLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <DefaultLayout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </DefaultLayout>
      )}
    </>
  );
};

export default MyApp;
