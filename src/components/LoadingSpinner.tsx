import React from 'react';

import { CircularProgress, Stack, StackProps, Typography } from '@mui/material';

export const LoadingSpinner = ({ sx, ...other }: StackProps) => {
  return (
    <Stack
      direction='column'
      spacing={2}
      justifyContent='center'
      alignItems='center'
      sx={{
        height: '50vh',
        ...sx,
      }}
    >
      <CircularProgress color='primary' />

      <Typography variant='body1'>Loading....</Typography>
    </Stack>
  );
};
