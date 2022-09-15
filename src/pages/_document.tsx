import * as React from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import palette from '../theme/palette';

// ----------------------------------------------------------------------

function createEmotionCache() {
  return createCache({
    key: 'css',
  });
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />

          <link
            rel='shortcut icon'
            href='/svg/favicon.svg'
          />

          <meta
            name='theme-color'
            content={palette.primary.main}
          />

          <link
            rel='manifest'
            href='/manifest.json'
          />

          <link
            rel='preconnect'
            href='https://fonts.googleapis.com'
          />

          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap'
            rel='stylesheet'
          />

          <link
            href='/fonts/style.css'
            rel='stylesheet'
          />

          <meta
            name='description'
            content='This is bot potter app'
          />

          <meta
            name='keywords'
            content='bot potter'
          />

          <meta
            name='author'
            content='bonuz'
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks, } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <CacheProvider value={cache}>
            <App {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: style.css,
      }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
