/**
 * API to dataserver
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

export default class ServerApi {
  constructor(host) {
    this.host = host;
  }

  getUserList = async (query) => {
    const res = await fetch(`${this.host}${query}`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  };
}
