import * as Yup from 'yup';

export const FORM_VALIDATION = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  // email: Yup.string().email('Invalid email.').required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  address: Yup.string().required('Required'),
  apt: Yup.string(),
  city: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  zip: Yup.number().integer().required('Required'),
});
