import React, { PureComponent } from 'react';

import Tab from './Tab';

class Tabs extends PureComponent {
  state = {
    activeTab: '',
  };

  componentDidMount() {
    const { children } = this.props;
    const defaultTab = children[1].props.id;
    this.setState({ activeTab: defaultTab });
  }

  onHandleClickTabItem = tabId => {
    this.setState({ activeTab: tabId });
  };

  render() {
    const { activeTab } = this.state;
    const { children } = this.props;

    return (
      <div className='container tabList'>
        <div className='row justify-content-center'>
          {children.map(({ props: { id, label } }) => (
            <Tab activeTab={activeTab} key={id} id={id} label={label} onClick={this.onHandleClickTabItem} />
          ))}
        </div>
        <div className='tabContent'>{children.find(child => child.props.id === activeTab)}</div>
      </div>
    );
  }
}

export default Tabs;
