import type { NextApiRequest, NextApiResponse } from 'next';

import { IBots, IBotResponse } from 'types';

import { BOTS } from './../../_mocks/bots';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBotResponse>
) {
  res.status(200).json({
    bots: BOTS,
  });
}
