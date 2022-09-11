import React from 'react';

import Page from 'components/Page';
import Layout from 'layouts';
import { SearchBots } from 'sections/search';

// ----------------------------------------------------------------------

BrowsePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BrowsePage() {
  return (
    <Page title='Bot Potter - Search'>
      <SearchBots
        sx={{
          my: {
            xs: 5,
            md: 10,
          },
        }}
      />
    </Page>
  );
}
