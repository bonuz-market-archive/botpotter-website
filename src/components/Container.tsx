import React from 'react';

import { Container as MContainer, ContainerProps } from '@mui/material/';

interface Props extends ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children, sx, ...other }: Props) => {
  return (
    <MContainer
      maxWidth={false}
      sx={{
        maxWidth: '1296px', // default is 1200px
        ...sx,
      }}
      {...other}
    >
      {children}
    </MContainer>
  );
};

export default Container;
