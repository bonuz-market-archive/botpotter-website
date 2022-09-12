import React from 'react';

import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps
} from '@mui/material';

interface Props extends OutlinedInputProps {
  btnOnClick?: () => void;
}
const SearchInput = ({ btnOnClick, ...other }: Props) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (btnOnClick && event.key === 'Enter') {
      btnOnClick();
    }
  };

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
          pl: 2,
          pr: 0,
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
        onKeyDown={handleKeyDown}
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
                '&:hover': {
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                },
              }}
              onClick={btnOnClick}
            >
              Search
            </Button>
          </InputAdornment>
        )}
        label=''
        {...other}
      />
    </FormControl>
  );
};

export default SearchInput;
