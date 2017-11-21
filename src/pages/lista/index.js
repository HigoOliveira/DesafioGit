import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import api from 'services/api';

import Header from './components/header';
import Repository from './components/Repository';


import styles from './styles';

export default class Lista extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />,
  }
  async componentWillMount() {
    const response = await api.get('repos/rocketseat/rocketseat.com.br');
    const { name, full_name, organization: { avatar_url }, description } = response.data;
    console.tron.log(avatar_url);

  }

  render() {
    return (
      <View>
        <Repository />
      </View>
    );
  }
}
