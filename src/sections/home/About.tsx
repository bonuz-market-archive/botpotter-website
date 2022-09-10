import { Box, BoxProps, Button, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import BotCard from 'components/BotCard';
import Container from 'components/Container';
import Tooltip from 'components/Tooltip';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme, }) => ({
  // display:'flex',
  // flexDirection: 'row',
  // flexWrap: 'wrap',
  // justifyContent: 'start',

  border: '1px solid red',
  // padding: theme.spacing(0, 10),
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  // gap: theme.spacing(2),
  // marginTop: theme.spacing(3),

  [theme.breakpoints.up('md')]: {
    // marginTop: theme.spacing(6),
    margin: 'auto',
    // gap: theme.spacing(17),
    justifyContent: 'space-between',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, max-content)',
    // gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

// ----------------------------------------------------------------------

const ITEMS = [
  {
    name: 'Reddit',
    src: 'reddit-big.svg',
    href: 'http://medium.com/',
  },
  {
    name: 'Discord',
    src: 'discord-big.svg',
    href: 'http://discord.com/',
  },
  {
    name: 'GitHub',
    src: 'github-big.svg',
    href: 'http://github.com/',
  },
  {
    name: 'Twitter',
    src: 'twitter-big.svg',
    href: 'http://twitter.com/',
  },

  {
    name: 'Facebook',
    src: 'facebook-big.svg',
    href: 'http://facebook.com/',
  }
];

export default function About({ ...other }: BoxProps) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Box {...other}>
      <Container>
        {isDesktop && (
          <Stack
            direction='row'
            spacing={1}
            justifyContent='space-around'
            alignItems='center'
          >
            <Box
              sx={{
                cursor: 'pointer',
              }}
            >
              <Image
                src='/svg/about.svg'
                alt='about logo'
                width={isDesktop ? 466 : 225}
                height={isDesktop ? 363 : 261}
                layout='fixed'
              />
            </Box>

            <Stack
              direction='column'
              spacing={3}
              justifyContent='center'
              alignItems='start'
              maxWidth={300}
            >
              <Typography variant='h2'>
                About <br /> Bot Potter
              </Typography>

              <Typography
                variant='body2'
                color='grey.600'
              >
                BotPotter is a platform for finding, using and creating bots. A
                dedicated marketplace helps to match creators and users.
              </Typography>

              <Button
                variant='contained'
                color='primary'
                sx={{
                  width: isDesktop ? 300 : 110,
                  height: 72,
                  p: 0,
                }}
              >
                <Stack
                  direction='row'
                  spacing={2}
                  justifyContent='center'
                  alignItems='center'
                >
                  <Image
                    src='/svg/rocket-white.svg'
                    alt='rocket icon'
                    width={20}
                    height={20}
                  />

                  <Typography variant='tab'>Create your own bot</Typography>
                </Stack>
              </Button>
            </Stack>
          </Stack>
        )}

        {!isDesktop && (
          <Stack
            direction='column'
            spacing={3}
            justifyContent='start'
            alignItems={{
              xs: 'start',
              sm: 'center',
            }}
          >
            <Typography variant='h2'>
              About <br /> Bot Potter
            </Typography>

            <Typography
              variant='body2'
              color='grey.600'
              maxWidth={300}
            >
              BotPotter is a platform for finding, using and creating bots. A
              dedicated marketplace helps to match creators and users.
            </Typography>

            <Box>
              <Image
                src='/svg/about.svg'
                alt='about logo'
                width={335}
                height={261}
                layout='fixed'
              />
            </Box>

            <Button
              variant='contained'
              color='primary'
              sx={{
                width: 300,
                height: 72,
                p: 0,
              }}
            >
              <Stack
                direction='row'
                spacing={2}
                justifyContent='center'
                alignItems='center'
              >
                <Image
                  src='/svg/rocket-white.svg'
                  alt='rocket icon'
                  width={20}
                  height={20}
                />

                <Typography variant='tab'>Create your own bot</Typography>
              </Stack>
            </Button>
          </Stack>
        )}

        {/* <ContentStyle>
          <Box
            sx={{
              cursor: 'pointer',
            }}
          >
            <Image
              src='/svg/about.svg'
              alt='about logo'
              width={isDesktop ? 466 : 225}
              height={isDesktop ? 363 : 261}
              layout='fixed'
            />
          </Box>

          <Typography
            variant='h2'
            mb={3}
            align={isDesktop ? 'center' : 'left'}
          >
            About <br /> Bot Potter
          </Typography>

          <Typography
            variant='body2'
            align={isDesktop ? 'center' : 'left'}
            color='grey.600'
          >
            BotPotter is a platform for finding, using and creating bots. A
            dedicated marketplace helps to match creators and users.
          </Typography>
        </ContentStyle> */}
      </Container>
    </Box>
  );
}
