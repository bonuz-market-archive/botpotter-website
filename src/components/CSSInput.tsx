import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)(({ theme, }) => ({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      // borderColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      // borderColor: 'rgba(255, 255, 255, 0.5)',
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Input({ sx, ...other }: TextFieldProps) {
  return (
    <CssTextField
      fullWidth
      id='custom-css-outlined-input'
      size='small'
      // label='type the phrase here'
      sx={{
        bgcolor: 'primary.main',
        backdropFilter: 'blur(84px)',
        borderRadius: 1,
        height: 47,
        ...sx,
      }}
      {...other}
    />
  );
}
