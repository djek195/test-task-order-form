import {
  styled,
  Typography,
  Stack,
  TextField,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@mui/material';

export const TitleStack = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-start',
  gap: '25px',
  marginTop: '25px',
}));

export const RowStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  // gap: '15px',
  justifyContent: 'space-between',
}));

export const SubStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  alignItems: 'flex-start',
  gap: '15px',
}));
