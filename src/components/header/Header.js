import React from 'react';

import birthdayLogo from '../../assets/birthdayWidget/img/gift.png';

import styles from './Header.module.css';

const Header = () => (
  <div className={styles.birthday_header}>
    <div className={styles.birthday_img}>
      <img src={birthdayLogo} className={styles.birthday_logo} alt='birthday logo' />
    </div>
  </div>
);

export default Header;
