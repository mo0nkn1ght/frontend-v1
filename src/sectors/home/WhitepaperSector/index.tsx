import React from 'react';

import styles from './index.module.scss';

export default function TraitSector() {
  return (
    <div className={styles.sectorWrapper} id="whitepaper">
      <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.description}>
            <div className={styles.header}>
              <h2>Whitepaper</h2>
            </div>
            <p>
              <b>Introduction:</b> Welcome to Star System Labs, we are here to provide an economic service to our citizen. The citizen will bring their $WLUNA
              and deposit it into our Luna Burn Bot (Otto the AutoBOT). Otto will then divide the $WLUNA - 30% burned and 70% in a vault which will be rewarded
              to our LP stakers. Otto will then issue out deposit receipts to the citizen in the form of $MNBASE & $METO.
            </p>
            ️
            <p>
              <b>- $MNBASE:</b> will be handed out at a ratio of 1 $MNBASE : 1,000 $WLUNA.
            </p>
            <p>
              <b>- $METO:</b> will be handed out at a ratio of 1 $METO : 1,000,000 $WLUNA.
            </p>
            ️
            <p>
              Two features of $MNBASE - dividends will be paid out from the collection of transaction tax on $MNBASE, paid in $WLUNA – and - $MNBASE LP staking
              will get paid $WLUNA from the pooled 70% that was not burned by Otto. $METO holders will collect dividends in $MNBASE if they stake $METO LP.
            </p>
            ️
            <p>
              <b>LP injection</b> can be directed at the WLUNA/BNB Pair, but due to the current Bot attack, we will be holding off on till the bot attack has
              ceased. Our goals at Star system labs is to burn Luna, give value to $WLUNA, provide an economic service to our citizens, and give back power to
              the people.
            </p>
            <p>$MNBASE & $METO will have a 10% buy/sell tax. The 10% tax will be divided up as followed:</p>
            <p>
              <b>- $MNBASE:</b> 1% $WLUNA burn, 5% community distribution, 2% liquidity injection, 1% Dev, 1% Marketing team.
            </p>
            <p>
              <b>- $METO:</b> 8% LP injection ($MNBASE), 1% Dev, 1% Marketing team.
            </p>
            <p></p>
            <p>
              There will be <b className={styles.warning}>no ICO.</b> All that is needed to participate in our economy is $WLUNA. Everything up to this point
              will be labelled Phase 1. Phase 2 will consist of a governance token and an NFT collection which will boost the payout for those citizens that
              stake their LP.
            </p>
            <p>
              LP injection can be directed at the WLUNA Base Pair, but due to the current and ongoing Bot attack that is manipulating the price, we will be
              holding off until the price manipulation has ceased. Until then out LP injection will be pointed at MNBASE/BNB pair as to boost the value of the
              main reciept token, in turn boosting the burn reward for the citizen. The LP injection can be re-aligned to any pair the community selects and
              will be voted on using the coming governance system. Our goals at Star System Labs is to burn Luna, give value to $WLUNA, provide an economic
              service to our citizens, and give back power to the people.
            </p>
            <p>
              <b>the final solution</b> is to launch the Moonbase Protocol directly onto Terra Classic Chain. Moonbase protocol will have only one fee
              distribution, burn fee. There will be no Terra Classic chain dev/marketing/lp fee. Only holder rewards and Terra Burn. Please check{' '}
              <b>Multi-Chain Solution</b> section for more details.
            </p>
            <p>
              <img className={styles.img} src="/images/map.png" alt="whitepapermap" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
