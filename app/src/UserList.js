/**
 * Userlist's screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class UserList extends Component {
  renderSeparator = () => <View style={styles.separator} />;

  renderIndicator() {
    if (this.props.page <= this.props.totalPages) {
      return <ActivityIndicator size="small" />;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="#F1F1F1" barStyle="dark-content" />
        <View style={styles.title}>
          <Text style={styles.titleText}>Users</Text>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.userList}
          onEndReached={this.props.getUserList}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={{ paddingLeft: 16, paddingRight: 24 }}>
                <Image source={{ uri: item.avatar }} style={styles.roundImage} />
              </View>
              <Text style={styles.cellText}>
                {item.first_name} {item.last_name}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={() => this.renderIndicator()}
          refreshing={this.props.refreshing}
          onRefresh={() => this.props.refreshUserList()}
        />
      </View>
    );
  }
}

UserList.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  userList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  })).isRequired,
  getUserList: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  refreshUserList: PropTypes.func.isRequired,
};
