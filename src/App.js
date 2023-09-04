import { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from './components/Header/Header';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

function App() {
  const rootRef = useRef(null);

  const [modalView, setModalView] = useState(false);

  const toggleModalWindow = () => {
    setModalView((modalView) => !modalView);
  };

  return (
    <div className="App">
      <Header toggleModel={toggleModalWindow}></Header>
      <Box ref={rootRef}>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          hideBackdrop
          open={modalView}
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          container={() => rootRef.current}
        >
          <Grid
            container
            sx={{
              position: 'relative',
              width: '700px',
              height: '600px',
              bgcolor: 'background.paper',
              borderRadius: '10px',
              boxShadow: (theme) => theme.shadows[5],
            }}
          >
            <Grid xs={8}>
              <Item>Order form</Item>
            </Grid>
            <Grid xs={4}>
              <Item>Products</Item>
            </Grid>
          </Grid>
        </Modal>
      </Box>
    </div>
  );
}

export default App;
