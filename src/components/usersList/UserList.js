import React from 'react';

import UserView from './UserView';

import styles from './UserList.module.css';

const UserList = ({ users = [], count, onShowMore }) => (
  <div className={`container ${styles.userList}`}>
    <div className='row'>
      {users.length !== 0 ? (
        <>
          {users.slice(0, count).map(user => (
            <UserView key={user.id + user.jobTitle} {...user} />
          ))}
          {users.length > count ? (
            <div className='col-12'>
              <span className={styles.showMore} onClick={onShowMore}>
                Показать еще
              </span>
            </div>
          ) : null}
        </>
      ) : (
        <div className='col-12'>
          <span className={styles.noEvents}>К сожалению, в данный момент нет данных для отображения</span>
        </div>
      )}
    </div>
  </div>
);

export default UserList;
