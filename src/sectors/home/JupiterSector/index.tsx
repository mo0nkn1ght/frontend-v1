import React from 'react';

import styles from './index.module.scss';

export default function TraitSector() {
  return (
    <div className={styles.sectorWrapper} id="jupiter">
      <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.description}>
            <div className={styles.header}>
              <h2>Jupiter UI</h2>
            </div>
            <p>
              <b>Why Jupiter?</b> Jupiter UI will be the all-in-one solution for your fund management, from EVM connection to Terra Classic Jupiter is
              determined to provide everything you need to have full freedom within the Star System Labs Ecosystem.
            </p>
            ️
            <p>
              <b>- EVM Features:</b> Monitor your assets and manage your funds, we will initially support BSC but exapdn to all EVM with a Connect Network
              button to add any unlisted EVM network to ensure all of them are properly supported. Otto, the Bridge, Moonbase [MNBASE] trackable dividends, and
              Meteor Governance System will will be integrated directly into Jupiter for easy secure in-wallet use.
            </p>
            <p>
              <b>- CosmOS Solution:</b> More research is being done to ensure we have a solid and self sustaining solution. Currently our approach will be in
              the form of the Sol Protocol, this will bring a Reserve to the Terra Classic chain, and to all of the CosmOS Ecosystem [via IBC] that will be able
              to sell debt and issue bonds. This system will contain a community based rating system that will rate each currency for a capped amount of debt,
              with a total cap preventing more than X amount of Moonbase [MNBASE] to ever be issued even if the community votes to do so. Currently the first
              token to be integrated will be Luna Classic [LUNC], this initial token will be unique in its ability to issue debt as it is the only one that can
              expand its debt automatically as the market demands [Until Total Cap is reached]. The more people also who purchase our debt with Luna Classic
              [LUNC], then the more Luna Classic [LUNC] we lock within our reserve taking off the circulating supply for the vested period. When debt is
              purchased in the Sol Protocol the Citizen selects the amount of time the debt will be lent out from the Reserve, this time dictates the overal %
              gain from the locking period. Each payment for Moonbase [MNBASE] a % is taken out for the final payment on unlock, if the bond is burned before
              this timer is up [14 day min lock time] then the final payout is burned along with it promoting Citizens to keep thier bonds the entire period. As
              bond times are up and bonds are burned, this means that Moonbase [MNBASE] is being burned reducing its supply as users remove from the reserve.
              The Sol Protocol will use the Reserve as the community and validators vote, both must agree for anything to execute, making the debt that was
              issued, as well as the rating system [If any token can be integrated into the Sol Protocol] controlled by the people.
            </p>
            ️
            <p>
              <b>Burn:</b> Burning happens on both the EVM approach and the CosmOS approach, in the EVM every buy or sell burns Moonbase and Wrapped Luna
              Classic, while on the Sol Protocl when Citizens burn bonds early the final dividend payment plus the Moonbase [MNBASE] bonds are burned. Resulting
              in yet another burning system that can support the decrease in the circulating supply of Luna Classic [LUNC].
            </p>
            <p>
              <u>
                EVM Approach is Live on BSC, Sol Protocol is in development with a planned public testnet. Those who take part in the testnet get an exclusive
                30% boost to your first debt purchase.
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
