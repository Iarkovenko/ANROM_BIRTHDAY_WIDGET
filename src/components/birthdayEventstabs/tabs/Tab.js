import React from 'react';

const Tab = ({ activeTab, label, id, onClick }) => (
  <div
    className={activeTab !== id ? 'col-md-4 col-12 tabListItem' : 'col-md-4 col-12 tabListItem tabListActive'}
    onClick={() => onClick(id)}>
    {label.split(' ')[0]}
    {label.split(' ')[1] ? (
      <>
        <br />
        <span className='secondWord'>{label.split(' ')[1]}</span>
      </>
    ) : null}
  </div>
);

export default Tab;
