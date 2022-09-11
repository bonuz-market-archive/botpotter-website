import { CheckboxProps } from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import CustomizedCheckbox from './Checkbox';

interface Props extends CheckboxProps {
  label: string;
}
const CheckboxWithLabel = ({ label, ...other }: Props) => {
  return (
    <FormControl
      component='fieldset'
      sx={{
        '& .MuiFormControlLabel-label': {
          color: ' #707070',
          typography: 'body2',
          // mt: 1,
        },
        '& label': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap:1,
        },
      }}
    >
      <FormGroup
        aria-label='position'
        row
      >
        <FormControlLabel
          value='end'
          labelPlacement='end'
          label={label}
          control={(
<CustomizedCheckbox
  name={label}
  {...other}
/>
)}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWithLabel;
