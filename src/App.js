import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Modal } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './components/Header/Header';
import OrderSummary from './components/OrderSummary/OrderSummary';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Shipping from './pages/Shipping/Shipping';
import Billing from './pages/Billing/Billing';
import Payment from './pages/Payment/Payment';
// import Completion from './pages/Completion/Completion';
import './App.css';

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
                  {/* <Route
                    path={'/completion'}
                    element={<Completion closeModal={toggleModalWindow} />}
                  /> */}
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
