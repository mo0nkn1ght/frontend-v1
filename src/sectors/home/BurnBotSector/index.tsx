import React from 'react';

import styles from './index.module.scss';

export default function BurnBotSector() {
  return (
    <section className={styles.sectorWrapper} id="burn">
      <div className={styles.sector}>
        <div className={styles.inner}>
          <div className={styles.auction}>
            <div className={styles.header}>
              <h2>Burn your WLUNA</h2>
            </div>
            <div className={styles.header}>
              <h2>Coming Soon!</h2>
            </div>
            <div className={styles.header}>
              <p>
                <img src="/images/dual.png" alt="auction1" width="415" height="250" />
              </p>
            </div>
            {/*<a href="" target="_parent">
              <button className={styles.button}>Burn for Moonbase</button>
  </a>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
