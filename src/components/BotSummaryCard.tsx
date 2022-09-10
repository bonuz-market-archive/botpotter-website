import { Box, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const RootStyle = styled(Paper)(({ theme, }) => ({
  flex: 1,
  position: 'relative',
  minWidth: 459,
  height: 98,
  backgroundColor: '#fff',
  boxShadow: '0px 44px 94px rgba(0, 0, 0, 0.05)',
  marginLeft: theme.spacing(5),
}));

// ----------------------------------------------------------------------
const IconWrapperStyle = styled(Box)(({ theme, }) => ({
  position: 'absolute',
  top: '50%',
  left: '-10%',
  transform: 'translate(50%,-50%)',
}));
// ----------------------------------------------------------------------

interface Props {
  title: string;
  body: string;
  iconSrc?: string;
  bgcolor?: string;
}

const BotSummaryCard = ({ title, body, iconSrc, bgcolor, }: Props) => {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            width: '46px',
            height: '46px',
            background: bgcolor,
            borderRadius: '32px',
          }}
        >
          <Box
            component='img'
            src={iconSrc}
          />
        </Stack>
      </IconWrapperStyle>

      <Stack
        direction='column'
        spacing={1}
        justifyContent='center'
        alignItems='start'
        height='100%'
        ml={6.75}
      >
        <Typography variant='h6'>{title}</Typography>

        <Typography
          variant='body1'
          color='grey.400'
        >
          {body}
        </Typography>
      </Stack>
    </RootStyle>
  );
};

export default BotSummaryCard;
