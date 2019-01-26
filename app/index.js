/**
 * Main application module
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import ServerApi from './src/Api';
import UserList from './src/UserList';
import AnimationPulse from './src/AnimationPulse';

import styles from './src/styles';

const host = 'https://reqres.in';

const api = new ServerApi(host);

export default class App extends Component {
  state = {
    loading: false,
    loadApp: true,
    userList: [],
    page: 1,
    totalPages: 0,
    refreshing: false,
  };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    this.setState({ loading: true });
    const query = `/api/users?page=${this.state.page}`;
    try {
      const data = await api.getUserList(query);
      this.setState({
        userList: [...this.state.userList, ...data.data],
        page: this.state.page + 1,
        totalPages: data.total_pages,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  refreshUserList = () => this.setState({ userList: [], page: 1, totalPages: 0 }, this.getUserList);

  isDone = () => this.setState({ loadApp: false });

  renderIntro() {
    return (
      <View style={styles.loadWrapper}>
        <AnimationPulse isDone={this.isDone} />
        <View style={styles.innerCircle} />
      </View>
    );
  }

  renderUserList() {
    return (
      <UserList
        userList={this.state.userList}
        page={this.state.page}
        totalPages={this.state.totalPages}
        getUserList={this.getUserList}
        loading={this.state.loading}
        refreshing={this.state.refreshing}
        refreshUserList={this.refreshUserList}
      />
    );
  }

  render() {
    return this.state.loadApp ? this.renderIntro() : this.renderUserList();
  }
}
