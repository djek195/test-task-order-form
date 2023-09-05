import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="text.primary"
      href="/"
      onClick={handleClick}
    >
      Shipping
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/billing"
      onClick={handleClick}
    >
      Billing
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
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
