import { Box, BoxProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import BotCard from 'components/BotCard';
import Container from 'components/Container';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme, }) => ({
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
  },
}));

// ----------------------------------------------------------------------

const CardsWrapperStyle = styled('div')(({ theme, }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(337px, 1fr))',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------
export default function PopularBots({ ...other }: BoxProps) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <Box {...other}>
      <Container>
        <ContentStyle>
          <Typography
            variant='h2'
            color='initial'
            mb={4}
          >
            Popular Bots
          </Typography>

          <CardsWrapperStyle>
            <BotCard
              title='Image Telegram Bot'
              body='Lorem ipsum description lorem ipsum dolor sit amet etc. Lorem ipsum description lorem ipsum dolor sit amet etc...'
              telegramUrl='http://tg.com/'
              discordUrl='http://discord.com/'
              monthlyPrice={15}
              yearlyPrice={12}
              platform={['Telegram', 'Discord']}
              category={['Application', 'Information']}
              license={['Free']}
            />

            <BotCard
              title='Crypto Bot'
              body='Lorem ipsum description lorem ipsum dolor sit amet etc. Lorem ipsum description lorem ipsum dolor sit amet etc...'
              discordUrl='http://discord.com/'
              monthlyPrice={15}
              yearlyPrice={12}
              platform={[ 'Discord']}
              category={['Application', 'Information']}
              license={['Free']}
            />

            <BotCard
              title='Find Influencer Bot'
              body='Lorem ipsum description lorem ipsum dolor sit amet etc. Lorem ipsum description lorem ipsum dolor sit amet etc...'
              telegramUrl='http://tg.com/'
              discordUrl='http://discord.com/'
              monthlyPrice={15}
              yearlyPrice={12}
              platform={['Telegram', 'Discord']}
              category={['Application', 'Information']}
              license={['Free']}
            />
          </CardsWrapperStyle>
        </ContentStyle>
      </Container>
    </Box>
  );
}
