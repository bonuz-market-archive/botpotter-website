import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import Marquee from 'react-fast-marquee';

import BotSummaryCard from 'components/BotSummaryCard';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme, }) => ({
  // backgroundColor: theme.palette.grey[100],
  paddingBottom: theme.spacing(3),
}));
// ----------------------------------------------------------------------

export default function SliderBots({ sx, ...other }: BoxProps) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <RootStyle
      sx={{
        ...sx,
      }}
      {...other}
    >
      <Marquee>
        <BotSummaryCard
          title='Bonuz Celebrity Bot'
          body='Lorem ipsum description lorem ipsum dolor sit'
          iconSrc='/svg/star-eye-emoji.svg'
          bgcolor='#A5A9F8'
        />

        <BotSummaryCard
          title='Hater Radar'
          body='Lorem ipsum description lorem ipsum dolor sit'
          iconSrc='/svg/angry-emoji.svg'
          bgcolor='#B9E794'
        />

        <BotSummaryCard
          title='Image Telegram Bot'
          body='Lorem ipsum description lorem ipsum dolor sit'
          iconSrc='/svg/heart-eye-emoji.svg'
          bgcolor='#E7C694'
        />
      </Marquee>

      <Box mt={3} />

      <Marquee
        delay={4}
        gradient={false}
      >
        <BotSummaryCard
          title='Image Telegram Bot'
          body='Lorem ipsum description lorem ipsum dolor sit'
          iconSrc='/svg/happy-emoji.svg'
          bgcolor='#F0907D'
        />

        <BotSummaryCard
          title='Thinker Founder'
          body='Lorem ipsum description lorem ipsum dolor sit'
          iconSrc='/svg/thinking-emoji.svg'
          bgcolor='#A5A9F8'
        />

        <BotSummaryCard
          title='Image Telegram Bot'
          body='Lorem ipsum description lorem ipsum dolor sit'
          iconSrc='/svg/happy-emoji.svg'
          bgcolor='#F8A5A5'
        />
      </Marquee>
    </RootStyle>
  );
}
