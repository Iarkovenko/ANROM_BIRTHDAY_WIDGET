import React, { lazy } from 'react';

import Tabs from './Tabs';

import './Tabs.css';

const RecentEventsTabAsync = lazy(() =>
  import('../tabsContent/RecentEventsTab' /* webpackChunkName: "RecentEventsTab-chunk" */)
);
const CurrentEventsTabAsync = lazy(() =>
  import('../tabsContent/CurrentEventsTab' /* webpackChunkName: "CurrentEventsTab-chunk" */)
);
const ImmediateEventsTabAsync = lazy(() =>
  import('../tabsContent/ImmediateEventsTabs' /* webpackChunkName: "ImmediateEventsTab-chunk" */)
);

const BirthdayTabs = () => (
  <Tabs>
    <div id='recent' label='недавние даты'>
      <RecentEventsTabAsync />
    </div>
    <div id='current' label='сегодня'>
      <CurrentEventsTabAsync />
    </div>
    <div id='immediate' label='ближайшие даты'>
      <ImmediateEventsTabAsync />
    </div>
  </Tabs>
);

export default BirthdayTabs;
