import {
  Box,
  BoxProps,
  TextField,
  Typography,
  Button,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import BotCard from 'components/BotCard';
import Container from 'components/Container';
import IconInput from 'components/IconInput';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme, }) => ({
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(9),
    // marginRight: theme.spacing(12),
  },
}));

// ----------------------------------------------------------------------

const WrapperStyle = styled('div')(({ theme, }) => ({
  display: 'grid',
  // gridTemplateColumns: 'repeat(auto-fill, minmax(337px, 1fr))',
  // gridTemplateColumns: '690px 155px 1fr',
  gridTemplateColumns: '1fr 1fr',
  height: '72px',
  rowGap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr max-content max-content',

    // gap: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------
export default function PopularBots({ ...other }: BoxProps) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Box {...other}>
      <Container>
        <ContentStyle>
          <Typography
            variant='h5'
            mb={2}
          >
            Browse Bots
          </Typography>

          <WrapperStyle>
            <Box
              sx={{
                ...(!isDesktop && {
                  gridColumn: '1/ -1',
                }),
              }}
            >
              <IconInput />
            </Box>

            <Box
              sx={{
                ml: 1,
              }}
            >
              <Stack
                direction='row'
                spacing={1}
                justifyContent='center'
                alignItems='center'
                sx={{
                  height: '100%',
                }}
              >
                <Button
                  variant='text'
                  color='primary'
                  sx={{
                    color: 'grey.900',
                    border: '1px solid #DBDBDB',
                    borderRadius: '16px',
                    // width: {
                    //   xs: 100,
                    //   md: 155,
                    // },
                    py: 3.5,
                    px: {
                      xs: 2,
                      md: 5,
                    },
                    minWidth: 'max-content',
                    width: '100%',
                    height: '72px',
                  }}
                >
                  Browse All
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                ml: 3,
              }}
            >
              <Button
                variant='contained'
                color='primary'
                sx={{
                  // width: isDesktop ? 305 : 200,
                  height: 72,
                  p: 0,
                  px: {
                    xs: 2,
                    md: 7,
                  },
                  minWidth: 'max-content',
                  width: '100%',
                }}
              >
                <Stack
                  direction='row'
                  spacing={2}
                  justifyContent='center'
                  alignItems='center'
                >
                  {isDesktop && (
                    <Image
                      src='/svg/rocket-white.svg'
                      alt='rocket icon'
                      width={20}
                      height={20}
                    />
                  )}

                  <Typography variant='tab'>Create your own bot</Typography>
                </Stack>
              </Button>
            </Box>
          </WrapperStyle>
        </ContentStyle>
      </Container>
    </Box>
  );
}