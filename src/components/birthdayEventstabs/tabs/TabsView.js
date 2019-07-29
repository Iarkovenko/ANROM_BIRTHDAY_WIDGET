import React from 'react';

import { RecentEventsTab, CurrentEventsTab, ImmediateEventsTab } from '../tabsContent';

import Tabs from './Tabs';

import './Tabs.css';

const BirthdayTabs = () => (
  <Tabs>
    <div id='recent' label='недавние даты'>
      <RecentEventsTab />
    </div>
    <div id='current' label='сегодня'>
      <CurrentEventsTab />
    </div>
    <div id='immediate' label='ближайшие даты'>
      <ImmediateEventsTab />
    </div>
  </Tabs>
);

export default BirthdayTabs;
