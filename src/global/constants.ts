import { BigNumber } from '@ethersproject/bignumber';

export const BIG_ZERO = BigNumber.from('0');

export const DISCORD_LINK = 'https://discord.gg/TBD';
export const TWITTER_LINK = 'https://twitter.com/StarSystem_Labs';
export const TELEGRAM_LINK = 'https://t.me/starsystemlabs';

export const MAINNET_RPC = process.env.REACT_APP_MAINNET_RPC || '';
export const TESTNTE_RPC = process.env.REACT_APP_TESTNTE_RPC || '';
export const TESTNET_RPC = process.env.REACT_APP_TESTNET_RPC || '';

export const NFT_ADDR = '';

export const AUTOBOT_ADDR = '';

export const MOONBASE_ADDR = '';
export const METEOR_ADDR = '';

export const MERKLE_TREE_DATA: {
  [address: string]: { leaf: string; proof: string[] };
} = {};
