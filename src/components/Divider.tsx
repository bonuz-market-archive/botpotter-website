import React from 'react';

import MDivider, { DividerProps } from '@mui/material/Divider';

const Divider = ({ sx, ...other }: DividerProps) => {
  return (
    <MDivider
      sx={{
        bgcolor: 'grey.300',
        opacity:0.3,
        ...sx,
      }}
      {...other}
    />
  );
};

export default Divider;
