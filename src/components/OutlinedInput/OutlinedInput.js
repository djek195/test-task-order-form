import { OutlinedInput, InputAdornment } from '@mui/material';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import { useField } from 'formik';

const OutlinedInputWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configOutlinedInput = {
    ...otherProps,
    ...field,
    // fullWith: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configOutlinedInput.error = true;
    configOutlinedInput.helperText = mata.error;
  }

  return (
    <OutlinedInput
      {...configOutlinedInput}
    />
  );
};

export default OutlinedInputWrapper;
