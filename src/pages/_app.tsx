/* eslint-disable @typescript-eslint/ban-ts-comment */
// scroll bar
import 'simplebar/src/simplebar.css';
//@readme/markdown
import 'components/Markdown/style.scss';

import { useState, ReactElement, ReactNode, useEffect } from 'react';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

import { reactQueryConfig } from 'config';
import GlobalStyles from 'theme/globalStyles';

import MotionLazyContainer from '../components/animate/MotionLazyContainer';
import ThemeProvider from '../theme';
import ThemeSettings from '../theme/settings';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  // pageProps: { dehydratedState?: DehydratedState };
}

export default function MyApp(props: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient(reactQueryConfig));

  const { Component, pageProps, } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');

      if (loader) loader.style.display = 'none';
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
      </Head>

      <QueryClientProvider client={queryClient}>

        {/* @ts-ignore */}

        <Hydrate state={pageProps.dehydratedState}>
          <MotionLazyContainer>
            <ThemeProvider>
              <ThemeSettings>
                <GlobalStyles />

                <SnackbarProvider
                  maxSnack={1}
                  // hideIconVariant
                >
                  {getLayout(<Component {...pageProps} />)}
                </SnackbarProvider>
              </ThemeSettings>
            </ThemeProvider>
          </MotionLazyContainer>
        </Hydrate>

        {/* <ReactQueryDevtools
          initialIsOpen={false}
          position='bottom-right'
        /> */}

      </QueryClientProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  return {
    ...appProps,
  };
};
