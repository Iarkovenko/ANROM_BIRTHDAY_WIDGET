import React, { Component } from 'react';

import UserList from '../../usersList/UserList';

const WithApiRequest = apiMethod => {
  return class ImmediateEventsTabs extends Component {
    state = {
      users: [],
      amountShowMore: 3,
      isLoading: true,
    };

    async componentDidMount() {
      try {
        const users = await apiMethod();
        this.setState({ users, isLoading: false });
      } catch (error) {
        console.error(error);
        this.setState({ isLoading: false });
      }
    }

    handleShowMore = () => {
      const { amountShowMore, users } = this.state;

      if (users.length <= amountShowMore) return;

      this.setState(prevState => ({
        amountShowMore: prevState.amountShowMore + 3,
      }));
    };

    render() {
      const { users, amountShowMore, isLoading } = this.state;

      return isLoading ? (
        <div className='col-12'>Loading ...</div>
      ) : (
        <UserList users={users} count={amountShowMore} onShowMore={this.handleShowMore} />
      );
    }
  };
};

export default WithApiRequest;
