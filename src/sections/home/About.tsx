import { Box, BoxProps, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import Container from 'components/Container';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

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
              xs: 'center',
              // sm: 'center',
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

      </Container>
    </Box>
  );
}
