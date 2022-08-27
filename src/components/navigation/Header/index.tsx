import React, { useCallback, useEffect, useState } from 'react';
import APP_ROUTES from 'global/routes';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import Button from 'components/based/Button';
import { shortenAddress, useEthers } from '@usedapp/core';
import clsx from 'clsx';
import WalletConnectionModal from 'components/composed/WalletConnectionModal';

import styles from './index.module.scss';

export default function AppHeader() {
  const location = useLocation();
  const { account } = useEthers();
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => {
    setScroll(window.pageYOffset > (location.pathname.startsWith('/home') ? 200 : 0));
  }, [location.pathname]);

  const handleResize = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, location.pathname]);

  return (
    <header className={scroll ? styles.scrolled : ''}>
      <WalletConnectionModal open={open} onClose={() => setOpen(false)} />
      <div className={styles.inner}>
        <div className={styles.title}>
          <Button customClass={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} secondary>
            {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </Button>
          <a href="/" className={styles.name}>
            <img src="/images/logo.png" className={styles.favicon} />
            <img src="/images/logo.png" className={styles.logo} />
          </a>
        </div>
        <div className={styles.nav}>
          {APP_ROUTES.map((route) => (
            <Link
              to={route.path}
              key={route.path}
              className={clsx(styles.menu, {
                [styles.selected]: !location.hash && location.pathname.startsWith(route.path),
              })}
            >
              {route.title}
            </Link>
          ))}
          {account ? (
            <div className={styles.reflect}>{shortenAddress(account)}</div>
          ) : (
            <Button secondary customClass={styles.connect} onClick={() => setOpen(true)}>
              <AccountBalanceWalletIcon />
              <span className={styles.connectText}>Connect wallet</span>
            </Button>
          )}
        </div>
      </div>
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <div className={styles.dropdown}>
          {APP_ROUTES.map((route) => (
            <Link
              to={route.path}
              key={route.path}
              className={clsx(styles.menuDropdown, {
                [styles.selected]: !location.hash && location.pathname.startsWith(route.path),
              })}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </Collapse>
    </header>
  );
}
