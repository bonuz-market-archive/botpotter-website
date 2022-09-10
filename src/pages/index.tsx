import React from 'react';

import Divider from 'components/Divider';
import Page from 'components/Page';
import Layout from 'layouts';
import {
  About,
  BrowseBots,
  Community,
  PopularBots,
  SliderBots
} from 'sections/home';

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title='Bot Potter'>
      <SliderBots
        sx={{
          mt: {
            xs: 4,
            md: 9,
          },
        }}
      />

      <BrowseBots
        sx={{
          mt: {
            xs: 2,
            md: 4,
          },
        }}
      />

      <Divider
        sx={{
          mt: {
            xs: 16,
            md: 8,
          },
        }}
      />

      <PopularBots
        sx={{
          mt: {
            xs: 5,
            md: 10,
          },
        }}
      />

      <Community
        sx={{
          mt: {
            xs: 6,
            md: 14,
          },
        }}
      />

      <About
        sx={{
          mt: {
            xs: 7.5,
            md: 20,
          },
          mb: {
            xs: 10.5,
            md: 14,
          },
        }}
      />
    </Page>
  );
}
