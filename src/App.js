import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Header from './components/Header/Header';
import OrderSummary from './components/OrderSummary/OrderSummary';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Shipping from './components/Shipping/Shipping';
import Billing from './components/Billing/Billing';
import Payment from './components/Payment/Payment';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '600px',
}));

function App() {
  const rootRef = useRef(null);

  const [modalView, setModalView] = useState(false);

  const toggleModalWindow = () => {
    setModalView((modalView) => !modalView);
  };

  return (
    <div className="App">
      <BrowserRouter>
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
                height: 'auto',
                bgcolor: 'background.paper',
                borderRadius: '5px',
                paddingY: '25px',
                boxShadow: (theme) => theme.shadows[5],
              }}
            >
              <Grid
                xs={7}
                sx={{
                  paddingX: '50px',
                }}
              >
                <Breadcrumbs />
                <Routes>
                  <Route
                    path={'/'}
                    element={<Shipping closeModal={toggleModalWindow} />}
                  />
                  <Route
                    path={'/billing'}
                    element={<Billing closeModal={toggleModalWindow} />}
                  />
                  <Route
                    path={'/payment'}
                    element={<Payment closeModal={toggleModalWindow} />}
                  />
                </Routes>
              </Grid>
              <Grid
                xs={5}
                sx={{
                  paddingX: '25px',
                }}
              >
                <OrderSummary />
              </Grid>
            </Grid>
          </Modal>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
