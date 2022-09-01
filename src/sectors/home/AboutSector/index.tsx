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
              After the utter collapse of Terra Luna, many holders of WLUNA and the original LUNA(LUNC) were abandoned by Terra Labs, with little to no support
              on direction, detailed updates, and co-operation with other large entities leaving many scratching their heads. Star System Labs was created as a
              response to the abandonment of LUNC/WLUNA holders to give a truly community run, and rewarded project that puts the holders first. One of the main
              items of phase 1 is to <b>BURN</b> Luna Classic, giving the Luna Community a 30% burn option to more aggressively reduce the supply of LUNC. Not
              only are we providing a service that brings a more substantial burn rate than the laughable 1.2% burn rate offered, but we also provide Wrapped
              Luna as rewards in many forms. But how can Star System Labs manage this and provide a robust and secure community run project?
            </p>
            <p></p>
            <p>
              Thus, we present MOONBASE ($MNBASE) & METEOR ($METO). The citizen will bring their $WLUNA and deposits into our WLuna Burn Bot (Otto the AutoBOT),
              the citizen will then receive $MNBASE & $METO as a receipt of their deposit into our economic system. Just like how blood moves around the body,
              $WLUNA will be the blood of our economic solar system and will benefit every citizen. The Citizens then can accumulate Wrapped Luna in two forms,
              first is dividend rewards to Moonbase holders, second is to LP ( Liquidity Pool ) Token stakers. Ensuring that all the Wrapped Luna that goes
              through the system is either burned <b>OR</b> redistributed to the community.{' '}
              <b className={styles.warning}>
                The Team Does not get ANY Wrapped Luna from this process. 100% of it is community controlled for community rewards!
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
