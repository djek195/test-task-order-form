import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    variant: 'contained',
    color: 'primary',
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
