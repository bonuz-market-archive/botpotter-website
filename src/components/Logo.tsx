import { forwardRef } from 'react';

import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
  isOffset?: boolean;
}

const Logo = forwardRef<any, Props>(
  ({ isOffset, disabledLink = false, sx, }, ref) => {
    const isMobile = useResponsive('down', 'sm');

    const logo = (
      <Box
        component='img'
        src={`/svg/${isOffset|| isMobile ? 'logo-header-no-border' : 'logo-header'}.svg`}
        alt='bot potter logo'
        sx={{
          cursor: 'pointer',
          ...(isOffset && {
            ml: 9,
          }),
          ...sx,
        }}
      />
    );

    // const logo = (
    //   <Box
    //     sx={{
    //       cursor: 'pointer',
    //       ...sx,
    //     }}
    //   >
    //     <Image
    //       src={`/svg/${isOffset ? 'logo-header-no-border' : 'logo-header'}.svg`}
    //       alt='bot potter logo'
    //       width={isDesktop ? 204 : 156}
    //       height={isDesktop ? 75 : 54}
    //       layout='fixed'
    //     />
    //   </Box>
    // );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <NextLink href='/'>{logo}</NextLink>;
  }
);

export default Logo;
