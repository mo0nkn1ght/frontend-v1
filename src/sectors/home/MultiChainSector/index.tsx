import React from 'react';

import styles from './index.module.scss';

export default function TraitSector() {
  return (
    <div className={styles.sectorWrapper} id="multichain">
      <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.description}>
            <div className={styles.header}>
              <h2>The Multi-Chain Solution</h2>
            </div>
            <p>
              <b>Why Multichain?</b> Star System Labs is targeting every chain Luna was launched on to ensure there is a burn on every chain that has a Luna
              presence, with our final goal of launching a Moonbase Protocol on Terra Classic focused on paying out LUNA rewards and burning 8% LUNA per
              transaction in the protocol. We have first launched on Binance Smart Chain since it is the second largest community by supply of the Wrapped Luna
              Community. Our next goal is to launch on ETH and all the subsequent Layer 2 solutions that had Wrapped Luna on chain as well.
            </p>
            ️
            <p>
              <b>- Non-Terra Classic Solution:</b> We launch Otto, Moonbase, and Meteor on these chains, Otto will burn and supply the LP reward system while
              Moonbase and Meteor supply the community with rewards ( in the form of WLUNA dividend payouts ) and LP injection tool ( which can inject LP
              directly into the Wrapped Luna Base pair on each chain).
            </p>
            <p>
              <b>- Terra Classic Solution:</b> More research is being done to ensure we have a solid and self sustaining solution. The basic idea of this
              protocol is that users will interact with our protocol that will act in a lending fashion, users deposit a balance the protocol will use to help
              maintain Luna price via interaction with USDT and the remaining bridges. This interaction will require a fee used and this fee will payout a high
              reward rate of 8% on deposited funds. Each transaction that goes through the protocol will also be under a 8% $LUNC burn fee. If $LUNC is not
              directly used then the protocol will automatically convert said asset into $LUNC and burn it directly on the Terra Chain Burn Address
            </p>
            ️
            <p>
              <b>LP injection</b> will be a vital tool on every non Terra Classic chain, first Moonbase injects itself with Lp every transaction to increase its
              own liquidity for health. Meteor on the other hand is the more powerful LP injector ( that is why the LP Inject fee is 8% ) and can inject to any
              pair we point it at. We will be pointing it at the Wrapped Luna + Base pair on each chain to constantly increase LP power of the pool, boosting
              the pair.
            </p>
            <p>
              <u>
                This is not a Coming Soon project, our system is currently already running on Binance with plans to release soon on Ethereum chain and all of
                Ethereum Layer 2 chains that qualify and then prepare to launch on other chains Luna was bridged to.
              </u>
            </p>
            <p>
              <img className={styles.img} src="/images/rocket.png" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
