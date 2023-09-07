import { Formik, Form } from 'formik';
import { Typography, InputAdornment, Button } from '@mui/material';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import TextFieldWrapper from '../../components/TextField/TextField';
import OutlinedInputWrapper from '../../components/OutlinedInput/OutlinedInput';
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import ButtonWrapper from '../../components/Button/Button';
import { RowStack, TitleStack, SubStack } from '../../styles/Form.styled';
import { useNavigate } from 'react-router-dom';

import { INITIAL_FORM_STATE } from '../../components/state/state';
import { SHIPPING_VALIDATION } from '../../validation/validation';
import countries from '../../data/countries.json';

const Shipping = ({ closeModal }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={SHIPPING_VALIDATION}
      onSubmit={(values) => {
        console.log('Form values:', values);
        const shipingDataKey = 'shippingData';
        const shippingDataToStore = JSON.stringify(values);
        localStorage.setItem(shipingDataKey, shippingDataToStore);
        navigate('/billing');
      }}
    >
      <Form>
        <TitleStack>
          <Typography variant="h4">Shipping Info</Typography>
          <SubStack>
            <Typography>Recipient</Typography>
            <TextFieldWrapper name="fullName" label="Full Name" fullWidth />
            <RowStack>
              <TextFieldWrapper
                sx={{
                  width: '210px',
                }}
                name="phone"
                label="Daytime Phone"
              />
              <Typography
                sx={{
                  width: '80px',
                  fontSize: '12px',
                  textAlign: 'left',
                }}
              >
                For delivery questions only
              </Typography>
            </RowStack>
          </SubStack>
          <SubStack
            sx={{
              width: '100%',
              alignItems: 'flex-start',
              gap: '15px',
            }}
          >
            <Typography>Address</Typography>
            <TextFieldWrapper name="address" label="Street Address" fullWidth />
            <TextFieldWrapper
              name="apt"
              label="Apt, Suite, Bldg, Gate Code. (optional)"
              fullWidth
            />

            <OutlinedInputWrapper
              name="city"
              label="City"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <GpsNotFixedIcon />
                </InputAdornment>
              }
            />

            <RowStack>
              <SelectCountry
                sx={{
                  width: '210px',
                }}
                name="country"
                label="Country"
                options={countries}
              />
              <TextFieldWrapper
                sx={{
                  width: '80px',
                }}
                name="zip"
                label="ZIP"
              />
            </RowStack>
          </SubStack>
          <RowStack>
            <ButtonWrapper>Continue</ButtonWrapper>
            <Button variant="outlined" onClick={closeModal}>
              Close
            </Button>
          </RowStack>
        </TitleStack>
      </Form>
    </Formik>
  );
};

export default Shipping;
