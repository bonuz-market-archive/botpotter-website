import { forwardRef } from 'react';

import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<any, Props>(({ disabledLink = false, sx, }, ref) => {
  const isDesktop = useResponsive('up', 'md');

  // const logo = (
  //   <Box
  //     component='img'
  //     src='/svg/header-logo.svg'
  //     alt='bot potter logo'
  //     sx={{
  //       cursor: 'pointer',
  //       ...sx,
  //     }}
  //   />
  // );

  const logo = (
    <Box
      sx={{
        cursor: 'pointer',
        ...sx,
      }}
    >
      <Image
        src='/svg/logo-header.svg'
        alt='bot potter logo'
        width={isDesktop ? 204 : 156}
        height={isDesktop ? 75 : 54}
        layout='fixed'
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href='/'>{logo}</NextLink>;
});

export default Logo;
