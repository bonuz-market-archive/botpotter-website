import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';

import Container from 'components/Container';
import Logo from 'components/Logo';

import { HEADER } from '../../config';
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
import cssStyles from '../../utils/cssStyles';
import navConfig from './MenuConfig';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)<{ isOffset: boolean }>(
  ({ theme, isOffset, }) => ({
    // paddingLeft: 24,
    // paddingRight: 24,
    ...(!isOffset && {
      marginTop: 24,
    }),
    height: HEADER.MOBILE_HEIGHT,
    transition: theme.transitions.create(
      ['height', 'background-color', 'margin'],
      {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }
    ),
    [theme.breakpoints.up('md')]: {
      height: HEADER.MAIN_DESKTOP_HEIGHT,
      paddingLeft: 48,
      paddingRight: 48,
      ...(!isOffset && {
        marginTop: 40,
      }),
    },
  })
);

const ToolbarShadowStyle = styled('div')(({ theme, }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: 'calc(100% - 48px)',
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');
  const isMobile = useResponsive('down', 'sm');

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
      }}
    >
      <ToolbarStyle
        isOffset={isOffset}
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: {
              md: HEADER.MAIN_DESKTOP_HEIGHT - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {!isDesktop && (
            <>
              <MenuMobile navConfig={navConfig} />

              <Box
                sx={{
                  flexGrow: 1,
                }}
              />
            </>
          )}

          <Stack
            direction='row'
            spacing={7}
            justifyContent='center'
            alignItems='center'
          >
            <Logo isOffset={isOffset} />

            {isDesktop && <MenuDesktop navConfig={navConfig} />}
          </Stack>

          {!isDesktop && (
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
          )}

          <Button
            variant='contained'
            // size='small'
            sx={{
              bgcolor: 'grey.900',
              ...(!isMobile && {
                width: isDesktop ? 204 : 110,
                height: 54,
              }),
              // p: 0,
              // ...(!isDesktop && {
              //   mb: 1,
              // }),
              '&:hover': {
                bgcolor: 'common.black',
              },
            }}
          >
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
              alignItems='center'
            >
              <Image
                src='/svg/rocket.svg'
                alt='rocket icon'
                width={20}
                height={20}
              />

              <Typography variant='tab'>Enter</Typography>
            </Stack>
          </Button>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
