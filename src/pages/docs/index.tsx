import fs from 'fs';
import path from 'path';

import React, { useEffect } from 'react';

import { Box, styled } from '@mui/material';
import matter from 'gray-matter';
import {
  GetStaticPropsResult,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';
import { useRouter } from 'next/router';

import Page from 'components/Page';
import Layout from 'layouts';
import { Documentation } from 'sections/about';

// ----------------------------------------------------------------------

interface AboutProps {
  docs: any;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<AboutProps>> {
  //* Reading all files
  // --------------------------------
  // Get files from the docs dir
  const folderPath = path.join(__dirname, '../../../docs');
  const files = fs.readdirSync(folderPath);

  // Get slug and frontmatter from docs
  const docs = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(folderPath, filename),
      'utf-8'
    );

    const { data: frontmatter, } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      docs: docs,
    },
  };

  // --------------------------------

  // const folderPath = path.join(__dirname, '../../../docs');
  // const filename = 'config.json';
  // const navigation = fs.readFileSync(path.join(folderPath, filename), 'utf-8');

  // return {
  //   props: {
  //     docs: navigation,
  //   },
  // };

}

// ----------------------------------------------------------------------

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
// ----------------------------------------------------------------------

// const ContentStyle = styled(Box)(({ theme }) => ({
//   margin: theme.spacing(5, 0),
//   [theme.breakpoints.up('md')]: {
//     margin: theme.spacing(10, 0),
//   },
// }));
// ----------------------------------------------------------------------
export default function AboutPage(initialProps: AboutProps) {
  const router = useRouter();

useEffect(() => {
  router.push('/about/create-bot');
}, [router]);

  return (
    <Page title='Bot Potter - About'>
      <Documentation
        sx={{
          my: {
            xs: 5,
            md: 10,
          },
        }}
        initialProps={initialProps}
      />
    </Page>
  );
}
