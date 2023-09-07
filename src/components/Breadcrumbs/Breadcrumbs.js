import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CustomSeparator() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname; //

  const isShippingActive = currentPath === '/';
  const isBillingActive = currentPath === '/billing';
  const isPaymentActive = currentPath === '/payment';

  const handleClick = (path) => (event) => {
    event.preventDefault();
    navigate(path);
  };

  const breadcrumbs = [
    <Link
      underline={isShippingActive ? 'none' : 'hover'}
      key="1"
      color={isShippingActive ? 'text.primary' : 'inherit'}
      onClick={handleClick('/')}
    >
      Shipping
    </Link>,
    <Link
      underline={isBillingActive ? 'none' : 'hover'}
      key="2"
      color={isBillingActive ? 'text.primary' : 'inherit'}
      onClick={handleClick('/billing')}
    >
      Billing
    </Link>,
    <Link
      underline={isPaymentActive ? 'none' : 'hover'}
      key="3"
      color={isPaymentActive ? 'text.primary' : 'inherit'}
      onClick={handleClick('/payment')}
    >
      Payment
    </Link>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
