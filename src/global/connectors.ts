import { Goerli, Mainnet, Rinkeby } from '@usedapp/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { MAINNET_RPC, TESTNTE_RPC, TESTNET_RPC } from './constants';

export const injected = new InjectedConnector({
  supportedChainIds: [Mainnet.chainId, Rinkeby.chainId, Goerli.chainId],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    [Mainnet.chainId]: MAINNET_RPC,
    [Rinkeby.chainId]: TESTNTE_RPC,
    [Goerli.chainId]: TESTNET_RPC,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
  supportedChainIds: [Mainnet.chainId, Rinkeby.chainId, Goerli.chainId],
});
