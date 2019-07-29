import React from 'react';
import moment from 'moment';

import { BASE_URL } from '../../services/api';

import styles from './UserView.module.css';

const UserView = ({ avatarUrl, name, jobTitle, birthday }) => (
  <div className={`${styles.user} col-md-6 col-12`}>
    <div className='row'>
      <div className='col-md-3 col-4'>
        <img src={`${BASE_URL}${avatarUrl}`} className={styles.logo_img} alt='user logo' />
      </div>
      <div className='col-md-9 col-8 d-flex'>
        <div className={`row ${styles.user_brief}`}>
          <div className={`col-12 d-flex align-items-center ${styles.user_name}`}>{name}</div>
          <div className={`col-12 d-flex text-left ${styles.user_position}`}>{jobTitle}</div>
          <div className={`col-12 d-flex align-items-end ${styles.user_birthday}`}>
            {moment(birthday, 'YYYY-MM-DD').format('DD MMMM')}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserView;
