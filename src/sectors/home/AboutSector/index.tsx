import React from 'react';

import styles from './index.module.scss';

export default function AboutSector() {
  return (
    <section className={styles.sectorWrapper} id="about">
      <div className={styles.sector}>
        <div className={styles.inner2}>
          <div className={styles.intro}>
            <div className={styles.header}>
              <h2>About The Project</h2>
            </div>
            <p>
              Star System Labs was created as a response to the abandonment of LUNC/WLUNA holders to give a truly community run, and rewarded project that puts
              the holders first. One of the main items of phase <b>ONE</b> is to <b className={styles.warning}>BURN</b> Luna Classic, giving the Luna Community a 30% burn option to more
              aggressively reduce the supply of LUNC. This gives holders an option to take part of a 30% LUNC burn while at the same time maintaining 100% value
              in a bonded token. Not only are we providing a service that brings a more substantial burn rate than the laughable 1.2% burn rate offered, but we
              also provide Wrapped Luna Classic as rewards in many forms. But how can Star System Labs manage this and provide a robust and secure community run
              project?
            </p>
            <p></p>
            <p>
              Intoducing, MOONBASE ($MNBASE) & METEOR ($METO)! The citizen will bring their $WLUNA (Wrapped Luna Classic) and deposits into our WLuna Burn Bot
              (Otto the AutoBOT), the citizen will then receive $MNBASE & $METO as a receipt of their deposit into our economic system. This is <b className={styles.warning}>FULLY</b>{' '}
              automated and the team does not touch any tokens during the process. Instead the bot directly sends 30% to the burn address while sending you 100%
              value of the tokens in $MNBASE or $METO. THe remaining 70% head to a vault that will distribute the tokens to a LP reward payout system. Just like
              how blood moves through the body, $WLUNA will be the blood of our economic solar system and will benefit every citizen. The Citizens then can
              accumulate Wrapped Luna Classic in two forms, first is dividend rewards to Moonbase holders (automatic), second is to LP ( Liquidity Pool ) Token stakers (manual). Ensuring
              that all the Wrapped Luna Classic that goes through the system is either burned <b className={styles.warning}>OR</b> redistributed to the community.{' '}
              <b className={styles.warning}>
                The Team Does not get ANY Wrapped Luna Classic from this process. 100% of it is community controlled for community rewards! The Multi-Sig Vault DOES NOT PAY THE TEAM, IT IS FULLY FOR COMMUNITY. WE WILL START VOTING SOON TO CONTROL FUNDS WITHIN THE VAULT.
              </b>
            </p>
            <p></p>
            <p>
              As we launch on each smart chain that WLUNA is running on, there will be plenty of opportunities that allows the citizen to customize their
              earning method & participation in our system.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p>So why send us your WLUNA?</p>
            <p></p>
            <p>A number of reasons but here are just a few!</p>
            <p>25% WLUNA Burn - an aggressive burn stance</p>
            <p>
              <b>LP injection to WLUNA pairs</b>
            </p>
            <p>
              <b>Gain WLUNA in rewards</b>
            </p>
            <p>
              <b>Gain 2 tokens that hold value</b>
            </p>
            <p>
              <b>Reflections to holders</b>
            </p>
            <p>
              This allows holders to take multiple stances in our system while giving them multiple positions to reposition themselves Without a leverage
              system, all is pure liquid being used, no leveraging!
            </p>
          </div>
          <div className={styles.clip}>
            <img src="images/moonbase.jpg" />
          </div>
        </div>
      </div>
      <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p>
              <b>LP Staking?</b>
            </p>
            <p>We are planning to have LP staking for Moonbase and Meteor with higher rewards on Meteor LP staking.</p>
            <p>Planned NFT collection to boost your LP staking rewards!</p>
            <p>NFTs will be mintable with either WLUNA or ETH!</p>
          </div>
        </div>
  </div>*/}
    </section>
  );
}
