import fs from 'fs';
import path from 'path';

import React, { useContext, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import matter from 'gray-matter';
import {
  GetStaticPropsResult,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Page from 'components/Page';
import Layout from 'layouts';
import { Documentation } from 'sections/about';

// ----------------------------------------------------------------------
export async function getStaticProps(staticProps: GetStaticPropsContext) {
  const params = staticProps.params!;
  const { slug, } = params;

  const folderPath = path.join(__dirname, '../../../../docs');
  const markdownWithMeta = fs.readFileSync(
    path.join(folderPath, slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content, } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
// ----------------------------------------------------------------------
export async function getStaticPaths() {
  const folderPath = path.join(__dirname, '../../../../docs');
  const files = fs.readdirSync(path.join(folderPath));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// ----------------------------------------------------------------------
DocsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function DocsPage(initialProps: any) {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <Page title={`Bot Potter - ${slug}`}>
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
