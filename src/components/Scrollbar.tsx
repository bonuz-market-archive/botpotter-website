import React from 'react';

import { Box, SxProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SimpleBarReact, { Props as ScrollbarProps } from 'simplebar-react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme, }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      height: 100,
      // backgroundColor: alpha(theme.palette.grey[600], 0.48),
      backgroundColor: alpha(theme.palette.grey[100], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 600,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

// ----------------------------------------------------------------------

interface Props extends ScrollbarProps {
  sx?: SxProps;
  children?: React.ReactNode;
  useMobile?: boolean;
}

export default function Scrollbar({
  children,
  sx,
  useMobile = true,
  ...other
}: Props) {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile && useMobile) {
    return (
      <Box
        sx={{
          // height: 199,
          overflowX: 'auto',
          ...sx,
        }}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle
        timeout={500}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
