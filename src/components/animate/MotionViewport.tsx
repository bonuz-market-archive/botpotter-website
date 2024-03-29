import { ReactNode } from 'react';

import { Box, BoxProps } from '@mui/material';
import { m, MotionProps } from 'framer-motion';

import { varContainer } from '.';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
