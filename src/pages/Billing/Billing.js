import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Typography, InputAdornment, Button, Link } from '@mui/material';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import TextFieldWrapper from '../../components/TextField/TextField';
import OutlinedInputWrapper from '../../components/OutlinedInput/OutlinedInput';
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import ButtonWrapper from '../../components/Button/Button';
import { RowStack, TitleStack, SubStack } from '../../styles/Form.styled';
import { useNavigate } from 'react-router-dom';

import { INITIAL_FORM_STATE } from '../../components/state/state';
import { FORM_VALIDATION } from '../../validation/validation';
import countries from '../../data/countries.json';

// const INITIAL_FORM_STATE = {
//   name: '',
//   phone: '',
//   email: '',
//   address: '',
//   apt: '',
//   city: '',
//   country: '',
//   zip: '',
// };

// const FORM_VALIDATION = Yup.object().shape({
//   fullName: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email.').required('Required'),
//   // phone: Yup.number()
//   //   .integer()
//   //   .typeError('Please enter a valid phone number')
//   //   .required('Required'),
//   address: Yup.string().required('Required'),
//   apt: Yup.string(),
//   city: Yup.string().required('Required'),
//   country: Yup.string().required('Required'),
//   zip: Yup.number().integer().required('Required'),
// });

const Billing = ({ closeModal }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));

    if (data) {
      setData(data);
    }
  }, []);

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        const key = 'data';
        const dataToStore = JSON.stringify(values);
        localStorage.setItem(key, dataToStore);
        navigate('/payment');
      }}
    >
      {({ data }) => (
        <Form>
          <TitleStack>
            <RowStack>
              <Typography variant="h4">Billings </Typography>
              <Button
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  console.log(data);
                }}
              >
                same as shipping
              </Button>
            </RowStack>
            <SubStack>
              <Typography>Recipient</Typography>
              <TextFieldWrapper name="fullName" label="Full Name" fullWidth />
              <RowStack>
                <TextFieldWrapper
                  fullWidth
                  name="email"
                  label="Email Address"
                />
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
              <TextFieldWrapper
                name="address"
                label="Street Address"
                fullWidth
              />
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
              <Button
                sx={{
                  height: '56px',
                }}
                variant="outlined"
                onClick={closeModal}
              >
                Close
              </Button>
            </RowStack>
          </TitleStack>
        </Form>
      )}
    </Formik>
  );
};

export default Billing;
