import React from 'react';

import { Box, Paper, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import { IBots } from 'types';

import Divider from './Divider';

// ----------------------------------------------------------------------

const RootStyle = styled(Paper)(({ theme, }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  // borderRadius: 16, //? Paper automatically has border radius from theme
  textAlign: 'left',
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(0),
  display: 'flex',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

const CardActionStyle = styled('div')(({ theme, }) => ({
  margin: theme.spacing(3, 0),
  display: 'grid',
  gridTemplateColumns: '1fr max-content',
  gap: theme.spacing(1),
}));

// ----------------------------------------------------------------------

const BotCard = ({
  title,
  body,
   telegramUrl,
  discordUrl,
  monthlyPrice,
  yearlyPrice,
}: IBots) => {
  return (
    <RootStyle>
      <Typography variant='h4'>{title}</Typography>

      <Typography
        variant='body2'
        color='grey.600'
        mt={2}
        mb={4}
      >
        {body}
      </Typography>

      <Box flexGrow={1} />

      <Divider />

      <CardActionStyle>
        <Stack
          direction='row'
          spacing={1}
          justifyContent='start'
          alignItems='center'
        >
          {telegramUrl && (
            <Link
              href='#'
              underline='none'
            >
              <Image
                src='/svg/telegram.svg'
                alt='twitter icon'
                width={47}
                height={47}
              />
            </Link>
          )}

          {discordUrl && (
            <Link
              href='#'
              underline='none'
            >
              <Image
                src='/svg/discord.svg'
                alt='discord icon'
                width={47}
                height={47}
              />
            </Link>
          )}
        </Stack>

        <Stack
          direction='column'
          spacing={0}
          justifyContent='end'
          alignItems='end'
        >
          <Typography
            variant='body2'
            color='grey.600'
          >
            {monthlyPrice}USD / month
          </Typography>

          <Typography
            variant='caption'
            align='right'
            sx={{
              color: ' rgba(112, 112, 112, 0.38);',
              // fontSize: '10px',
            }}
          >
            {yearlyPrice}USD / month
          </Typography>
        </Stack>
      </CardActionStyle>
    </RootStyle>
  );
};

export default BotCard;
