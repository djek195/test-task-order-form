import React from 'react';
import { Stack, Typography, Link } from '@mui/material';

const OrderSummary = () => {
  return (
    <Stack>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography>Order Summary</Typography>
        <Link>edit order</Link>
      </Stack>
    </Stack>
  );
};

export default OrderSummary;
