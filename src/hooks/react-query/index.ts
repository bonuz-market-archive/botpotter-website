import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { useNotify } from 'hooks/useNotify';
import { IBotResponse } from 'types';
import httpClient from 'utils/axios';
import { getApiUrl } from 'utils/getApiUrl';

import { queryKeys } from './constants';

//  ------------------------------------------------------------

export const useQueryBots = (options?: any) => {
  const notify = useNotify();

  const url = getApiUrl('/data');
  const queryKey = [queryKeys.bots];
  const queryFn = () => httpClient.get<IBotResponse>(url);

  return useQuery(queryKey, queryFn, {
    select: (res) => res.data,
    onError: (error) => {
      console.log('error ', error);

      notify('error', 'Something went wrong while fetching the bots');
    },

    ...options,
  });
};
