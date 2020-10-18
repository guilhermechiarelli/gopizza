import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { OrderProvider } from './context/Order';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <OrderProvider>
        <Routes />
      </OrderProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
