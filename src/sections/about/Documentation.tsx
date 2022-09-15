/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { useEffect, useState } from 'react';

import {
  Box,
  BoxProps,
  ListItemText,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { paramCase } from 'change-case';
import { marked } from 'marked';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

// import { LinkProps } from 'react-scroll/modules/components/Link';
import Container from 'components/Container';
import Markdown from 'components/Markdown';
import Scrollbar from 'components/Scrollbar';
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
  [theme.breakpoints.up('sm')]: {
    // columGap: theme.spacing(5),
    // rowGap: theme.spacing(2),
    gridTemplateColumns: '250px 1fr',
  },

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
  const router = useRouter();
  const isMobile = useResponsive('down', 'sm');
  const isDesktop = useResponsive('up', 'md');

  const [navigation, setNavigation] = useState('');
  const { frontmatter, slug, content, } = initialProps;

  const handleSetActive = (label: string) => {
    setNavigation(label);
  };

  useEffect(() => {
    setNavigation(paramCase(frontmatter?.navigation?.[0].label));
  }, [frontmatter?.navigation]);

  useEffect(() => {
    const clientRoutes = document.getElementsByClassName(
      'client__side__routing'
    );

    if (!clientRoutes) return;

    [...clientRoutes].forEach((element) => {
      element.addEventListener('click', function () {
        const routerLink = element.id;
        router.push(routerLink);
      });
    });

    return () => {
      [...clientRoutes].forEach((element) =>
        element.removeEventListener('click', function () {})
      );
    };
  }, [router]);

  return (
    <Box {...other}>
      <Container>
        <ContentStyle>
          <GridStyle>
            <Box gridColumn='1/-1'>
              <Typography variant='h2'>{frontmatter?.title}</Typography>
            </Box>

            <Box
              sx={{
                position: 'relative',
              }}
            >
              <PaperStyle
                sx={{
                  position: 'sticky',
                  top: 80,
                  // width: 359,
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
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

                <Box
                  sx={{
                    maxHeight: '60vh',
                    overflow: 'auto',
                  }}
                >
                  <Scrollbar autoHide={false}>
                    <Stack
                      direction='column'
                      spacing={1.5}
                      justifyContent='center'
                      alignItems='start'
                    >
                      {frontmatter?.navigation?.map(
                        (item: any, idx: number) => {
                          const { label, children, } = item;
                          const to = paramCase(label);

                          return (
                            <React.Fragment key={label}>
                              <NavigationItem
                                label={label}
                                currentNavigation={navigation}
                                onSetActive={() => handleSetActive(to)}
                                to={to}
                              />

                              {children &&
                                Object.keys(item).map((key, index: number) => {
                                  const childLabel = item[key];

                                  if (key !== 'label' && key !== 'children') {
                                    const to = paramCase(childLabel);

                                    return (
                                      <NavigationItem
                                        key={to}
                                        label={childLabel}
                                        currentNavigation={navigation}
                                        onSetActive={() => handleSetActive(to)}
                                        to={to}
                                        child
                                      />
                                    );
                                  }
                                })}
                            </React.Fragment>
                          );
                        }
                      )}
                    </Stack>
                  </Scrollbar>
                </Box>
              </PaperStyle>
            </Box>

            <Box
              sx={{
                ...(isMobile && {
                  gridColumn: '1/ -1',
                }),
              }}
            >
              {/* {content && (
                <MarkDownStyle
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(content),
                  }}
                ></MarkDownStyle>
              )} */}

              <Markdown body={content} />

              {/* <Markdown body={body}/> */}
            </Box>
          </GridStyle>
        </ContentStyle>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
interface NavigationItemProps {
  label: string;
  currentNavigation: string;
  to: string;
  onSetActive: () => void;
  child?: boolean;
}

const NavigationItem = ({
  label,
  child,
  currentNavigation,
  to,
  onSetActive,
}: NavigationItemProps) => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
      }}
      component={ScrollLink}
      to={to}
      onSetActive={onSetActive}
      onClick={onSetActive}
      spy={true}
      // hashSpy={true}
      smooth={true}
      offset={-200}
      duration={500}
    >
      <ListItemText
        disableTypography
        primary={label}
        sx={{
          height: 26,
          ...(to === currentNavigation && {
            m: 0,
            color: '#000000',
            fontWeight: '700',
            fontSize: '16px',
          }),
          ...(child && {
            pl: 3,
          }),
        }}
      />
    </Box>
  );
};
