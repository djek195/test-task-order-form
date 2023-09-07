import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const location = useLocation();
  const currentPath = location.pathname; //


  const isShippingActive = currentPath === '/';
  const isBillingActive = currentPath === '/billing';
  const isPaymentActive = currentPath === '/payment';

  const breadcrumbs = [
    <Link
      underline={isShippingActive ? "none" : "hover"}
      key="1"
      color={isShippingActive ? "text.primary" : "inherit"} 
      href="/"
      onClick={handleClick}
    >
      Shipping
    </Link>,
    <Link
      underline={isBillingActive ? "none" : "hover"}
      key="2"
      color={isBillingActive ? "text.primary" : "inherit"}
      href="/billing"
      onClick={handleClick}
    >
      Billing
    </Link>,
    <Link
      underline={isPaymentActive ? "none" : "hover"}
      key="3"
      color={isPaymentActive ? "text.primary" : "inherit"}
      href="/payment"
      onClick={handleClick}
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
