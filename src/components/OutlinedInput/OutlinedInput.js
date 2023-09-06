import { OutlinedInput, InputAdornment } from '@mui/material';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import { useField } from 'formik';

const OutlinedInputWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configOutlinedInput = {
    ...otherProps,
    ...field,
    // fullWith: true,
    variant: 'outlined',
  };

  if (meta && meta.touched && meta.error) {
    configOutlinedInput.error = true;
    configOutlinedInput.helperText = meta.error;
  }

  return <OutlinedInput {...configOutlinedInput} />;
};

export default OutlinedInputWrapper;
