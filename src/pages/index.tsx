import React from 'react';

import Page from 'components/Page';
import Layout from 'layouts';
import { About, Community, PopularBots, SliderBots } from 'sections/home';

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
            xs: 8,
            md: 18,
          },
        }}
      />

      <PopularBots
        sx={{
          mt: {
            xs: 8,
            md: 18,
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
