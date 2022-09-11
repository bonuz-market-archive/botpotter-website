import React from 'react';

import {
  Box,
  BoxProps,
  ListItemText,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { marked } from 'marked';

import Container from 'components/Container';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme, }) => ({
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
  },
}));

// ----------------------------------------------------------------------
const GridStyle = styled('div')(({ theme, }) => ({
  maxWidth: '100%',
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    columGap: theme.spacing(5),
    rowGap: theme.spacing(2),
    gridTemplateColumns: '250px 1fr',
  },

  [theme.breakpoints.up('lg')]: {
    columGap: theme.spacing(5),
    rowGap: theme.spacing(2),
    gridTemplateColumns: '359px 1fr',
  },
}));

// ----------------------------------------------------------------------
const PaperStyle = styled(Paper)(({ theme, }) => ({
  backgroundColor: '#FBFBFB',
  padding: theme.spacing(4),
}));

// ----------------------------------------------------------------------

const MarkDownStyle = styled(Box)(({ theme, }) => ({
  '& h1': {
    fontFamily: 'Flame',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38px',
    color: '#000000',
  },
  '& li': {
    marginLeft: theme.spacing(2.5),
  },
}));

// ----------------------------------------------------------------------
interface Props extends BoxProps {
  initialProps: any;
}
export default function Documentation({ initialProps, ...other }: Props) {
  const isDesktop = useResponsive('up', 'md');

  const {
    frontmatter: { title, date, description, navigation, },
    slug,
    content,
  } = initialProps;

  return (
    <Box {...other}>
      <Container>
        <ContentStyle>
          <GridStyle>
            <Box gridColumn='1/-1'>
              <Typography variant='h2'>{title}</Typography>
            </Box>

            <Box>
              <PaperStyle
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    md: 'repeat(1, 1fr)',
                  },
                }}
              >
                <Typography
                  variant='h4'
                  mb={4}
                >
                  Navigation
                </Typography>

                <Stack
                  direction='column'
                  spacing={1.5}
                  justifyContent='center'
                  alignItems='start'
                >
                  {navigation?.map((item: any, idx:number) => {
                    const { label, children, } = item;

                    return (
                      <React.Fragment key={label}>
                        <ListItemText
                          disableTypography
                          primary={label}
                          sx={{
                            ...(idx === 0 && {
                              m: 0,
                              color: '#000000',
                              fontWeight: '700',
                              fontSize: '16px',
                            }),
                          }}
                        />

                        {children &&
                          Object.keys(item).map((key, index:number) => {
                            const label = item[key];

                            if (key !== 'label' && key !== 'children')
                              return (
                                <ListItemText
                                  disableTypography
                                  primary={label}
                                  sx={{
                                    pl: 3,
                                  }}
                                />
                              );
                          })}
                      </React.Fragment>
                    );
                  })}
                </Stack>
              </PaperStyle>
            </Box>

            <Box
              sx={{
                ...(!isDesktop && {
                  gridColumn: '1/ -1',
                }),
              }}
            >
              <MarkDownStyle
                dangerouslySetInnerHTML={{
                  __html: marked.parse(content),
                }}
              ></MarkDownStyle>
            </Box>
          </GridStyle>
        </ContentStyle>
      </Container>
    </Box>
  );
}
