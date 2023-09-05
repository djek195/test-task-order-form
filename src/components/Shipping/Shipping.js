import { useState, useEffect } from 'react';
import {
  Typography,
  Stack,
  TextField,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@mui/material';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import { MuiTelInput } from 'mui-tel-input';
import CountrySelect from '../CountrySelect/CountrySelect';

const Shipping = ({ closeModal }) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      sx={{
        alignItems: 'flex-start',
        gap: '25px',
      }}
    >
      <Typography
        sx={{
          marginTop: '25px',
        }}
        variant="h4"
      >
        Shipping Info
      </Typography>
      <Stack
        sx={{
          width: '100%',
          alignItems: 'flex-start',
          gap: '15px',
        }}
      >
        <Typography>Recipient</Typography>
        <TextField fullWidth label="Full Name" id="name" />
        <Stack
          sx={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            // gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <MuiTelInput
            label="Daytime Phone"
            sx={{
              width: '210px',
            }}
            value={value}
            onChange={handleChange}
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
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: '100%',
          alignItems: 'flex-start',
          gap: '15px',
        }}
      >
        <Typography>Address</Typography>
        <TextField fullWidth label="Street Address" id="address" />
        <TextField
          fullWidth
          label="Apt, Suite, Bldg, Gate Code. (optional)"
          id="address"
        />

        <OutlinedInput
          fullWidth
          label="City"
          id="city"
          endAdornment={
            <InputAdornment position="end">
              <GpsNotFixedIcon />
            </InputAdornment>
          }
        //   aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />

        <Stack
          sx={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            // gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <CountrySelect />
          <TextField
            sx={{
              width: '80px',
            }}
            id="zip"
            label="ZIP"
            variant="outlined"
          />
        </Stack>
        <Stack
          sx={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            // gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <Button
            sx={{
              width: '210px',
              height: '56px',
            }}
            variant="contained"
          >
            Continue
          </Button>
          <Button
            sx={{
              height: '56px',
            }}
            variant="outlined"
            onClick={closeModal}
          >
            Close
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Shipping;
