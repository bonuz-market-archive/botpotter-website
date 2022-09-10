import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput
} from '@mui/material';

const IconInput = () => {
  return (
    <FormControl
      sx={{
        width: 'inherit',
      }}
      variant='outlined'
    >
      <OutlinedInput
        fullWidth
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, 1) !important',
          },
          // borderTopRightRadius: 0,
          // borderTopLeftRadius: 0,
        }}
        id='outlined-adornment-password'
        placeholder='Please choose'
        type='text'
        // value={messageText}
        // onChange={(e) => setMessageText(e.target.value)}
        // onKeyPress={handleKeyPress}
        // ref={inputBox}
        endAdornment={(
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              // onClick={handleSendMessage}
              // onMouseDown={handleMouseDownPassword}
              edge='end'
            >

              {/* {messageText && (
<Box
  component='img'
  src='/svg/send-icon.svg'
/> */}

              {/* )} */}
            </IconButton>
          </InputAdornment>
        )}
        label=''
      />
    </FormControl>
  );
};

export default IconInput;
