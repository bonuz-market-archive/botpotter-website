import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import NextLink from 'next/link';

import Container from 'components/Container';
import useResponsive from 'hooks/useResponsive';

import navConfig from './MenuConfig';
import MenuFooter from './MenuFooter';
// ----------------------------------------------------------------------

const RootStyle = styled(Paper)(({ theme, }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[900],
  display: 'grid',
  rowGap: 30,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 24,
  paddingBottom: 200,
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    paddingTop: 30,
    paddingBottom: 300,
  },

  [theme.breakpoints.up('md')]: {
    padding: '30px 23px',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 107,
    paddingRight: 33,
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const isDesktop = useResponsive('up', 'md');
  const matches = useResponsive('between', 'md', 900, 1060);

  return (
    <Container
      sx={{
        maxWidth: '1392px',
      }}
    >
      <RootStyle>

        <Box
          component={NextLink}
          href='/'
          sx={{
            cursor: 'pointer',
            justifySelf: 'center',
          }}
        >
          <Image
            src='/svg/logo-footer-1.svg'
            alt='bot potter logo'
            width={isDesktop ? 238 : 156}
            height={isDesktop ? 78 : 54}
          />
        </Box>

        <Box
          sx={{
            mr: {
              // md: 25,
              lg: 10,
            },
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(5, max-content)',
            },
            justifyContent: 'center',
            alignItems: 'center',
            justifySelf: 'center',
          }}
        >
          <MenuFooter navConfig={navConfig} />
        </Box>

        {isDesktop && (
          <Box
            sx={{
              gridColumn: '1/-1',
              justifySelf: 'center',
              mr: {
                // md: 25,
                lg: 10,
              },
            }}
          >
            <Typography
              variant='caption'
              sx={{
                color: '#FFFFFF',
                opacity: '0.3',
              }}
            >
              Copyright © 2022 BotPotter. All rights reserved.
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            position: 'absolute',
            ...(isDesktop
              ? {
                  right: 33,
                }
              : {
                  right: '50%',
                  transform: 'translate(50%, 00%)',
                  bottom: 0,
                }),
          }}
        >
          <Image
            src='/svg/logo-footer-2.svg'
            alt='bot potter logo'
            width={matches ? 300 : 342}
            height={matches ? 200 : 230}
          />
        </Box>
      </RootStyle>
    </Container>
  );
}
