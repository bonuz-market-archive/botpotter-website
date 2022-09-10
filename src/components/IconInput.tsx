import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput
} from '@mui/material';

const IconInput = () => {
  return (
    <FormControl
      sx={{
        width: '100%',
      }}
      variant='outlined'
    >
      <OutlinedInput
        fullWidth
        sx={{
          height: 72,
          pr:0,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DBDBDB',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#DBDBDB !important',
          },
          // borderTopRightRadius: 0,
          // borderTopLeftRadius: 0,
        }}
        id='outlined-adornment-password'
        placeholder='What bot you can find'
        type='text'
        // value={messageText}
        // onChange={(e) => setMessageText(e.target.value)}
        // onKeyPress={handleKeyPress}
        // ref={inputBox}
        endAdornment={(
          <InputAdornment position='end'>
            <Button
              variant='text'
              color='primary'
              sx={{
                color: 'grey.900',
                borderLeft: '1px solid #DBDBDB',
                borderRadius: 0,
                width: '155px',
                height: '72px',
                // border:0,
              }}
            >
              Search
            </Button>
          </InputAdornment>
        )}
        label=''
      />
    </FormControl>
  );
};

export default IconInput;
