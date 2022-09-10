import { ReactNode } from 'react';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { HEADER } from 'config';

import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------
const MainStyle = styled('main')(({ theme, }) => ({
  flexGrow: 0.98,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  // paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    // paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children, }: Props) {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        // backgroundImage: 'url(/img/background_image.png)',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
      }}
    >
      <MainHeader />

      <MainStyle>{children}</MainStyle>

      {/* <Box
        sx={{
          flexGrow: 1,
        }}
      /> */}

      <MainFooter />
    </Stack>
  );
}
