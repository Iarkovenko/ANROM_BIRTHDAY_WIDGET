import React from 'react';

import TabsView from './tabs/TabsView';

import styles from './BirthdayContainer.module.css';

const BirthdayTabsContainer = () => (
  <div className={styles.container}>
    <h1 className={styles.header_title}>день рождения</h1>
    <TabsView />
  </div>
);

export default BirthdayTabsContainer;
