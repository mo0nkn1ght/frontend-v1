import React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowBackIos';

import styles from './index.module.scss';

export default function RoadmapSector() {
  return (
    <div className={styles.sectorWrapper} id="roadmap">
      <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <h2>Roadmap</h2>
          </div>
          <div className={styles.item}>
            <b>Ethereum Launch</b>
            <span>Launch on ETH chain and subsequent ETH Layer 2 chains that require support for the abandoned Wrapped Luna Holders.</span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>LP Injection</b>
            <span>
              A way to breath life into $WLUNA with direct injection of LP to the $WLUNA pair on any chain, although starting wtih injection towards $MNBASE
              pairs untill we get our voice heard and coinbase admits to price manipulation using bots and smart contracts. The community can vote on what token
              pair to inject LP into.
            </span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Jupiter UI</b>
            <span>
              A new way to track your Star System Labs position. Our UI v2 (Jupiter UI) will have an all in one solution for your Star System Labs asset
              management. From Token reward traking to NFT viewing and staking, we are dedicated on bringing a single tool for everything. As well as Wrapped
              Luna Token Metrics to have a solid, consistent source of tokenomic data on Wrapped Luna and Wrapped Lunc.
            </span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Star System Labs NFT</b>
            <span>An NFT branch of the Star System Labs Ecosystem in which NFTs will be staked to boost your reward in $WLUNA.</span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Governance</b>
            <span>
              A governance token to give the community a more active role in the direction of the SSL Ecosystem. This token will be used by the the community to
              vote on what will be with the vault funds that are accumulating.
            </span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Ask Me Anything</b>
            <span>
              AMAs will be held with the community on a re-occurring basis. Ensuring constant developer-community communication. Our team will also stay active
              on our socials to make sure we hear the community and their needs.
            </span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Mobile App</b>
            <span>The mobile implementation of the Jupiter UI. More details TBD on functionality.</span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>WLUNA Meme Contest</b>
            <span>Wrapped Luna Meme Contest to be held for the community! Rewards TBD!</span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Security Audit</b>
            <span>Smart Contract Security Audit for the entire SSL ecosystem, and upcoming smart contracts!</span>
          </div>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.item}>
            <b>Terra Classic Launch</b>
            <span>Moonbase Protocol full launch on Terra Classic chain. 8% Burn fee direct on Terra Classic.</span>
          </div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <div className={styles.item}>
            <span>
              <b>No dates will be provided due to the high volatility and unpredictable nature of the market and current world events.</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
