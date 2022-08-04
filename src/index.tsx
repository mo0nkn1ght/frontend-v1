import { Mainnet, Rinkeby, Config, DAppProvider } from '@usedapp/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { MAINNET_RPC, TESTNTE_RPC } from 'global/constants';

import App from './App';
import reportWebVitals from './reportWebVitals';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  networks: [Mainnet, Rinkeby],
  readOnlyUrls: {
    [Mainnet.chainId]: MAINNET_RPC,
    [Rinkeby.chainId]: TESTNTE_RPC,
  },
  pollingInterval: 15000,
};

ReactDOM.render(
  <DAppProvider config={config}>
    <Router>
      <Toaster />
      <App />
    </Router>
  </DAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
