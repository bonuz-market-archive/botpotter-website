import { useCallback } from 'react';

import { styled } from '@mui/material/styles';
import { useSnackbar } from 'notistack';

// notify('error', 'Wallet not connected!');
// notify('info', 'Airdrop requested:', signature);
// notify('success', 'Airdrop successful!', signature);
// notify('error', `Airdrop failed! ${error?.message}`, signature);
//   enqueueSnackbar(error.message ? `${error.name}: ${error.message}` : error.name, { variant: 'error' });

type TVariant = 'error' | 'info' | 'success' | 'warning';

const Notification = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export function useNotify() {
  const { enqueueSnackbar, } = useSnackbar();

  return useCallback(
    (variant: TVariant, message: string) => {
      enqueueSnackbar(<Notification>{message}</Notification>, {
        variant,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    },
    [enqueueSnackbar]
  );
}
