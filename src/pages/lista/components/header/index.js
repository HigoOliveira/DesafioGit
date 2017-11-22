/* @flow */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  state = {
    repos: null,
  };

  onPress = () => {
    const { params = {} } = this.props.navigation.state.routes[0];
    if (params.handleSave) {
      params.handleSave(this.state.repos);
      this.setState(prevState => ({
        repos: '',
      }));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar repositório"
          autoCaptalize="none"
          autoCorrect={false}
          value={this.state.repos}
          onChangeText={(repos) => { this.setState({ repos }); }}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <TouchableOpacity onPress={this.onPress}>
          <Icon name="plus" size={16} color="#333" />
        </TouchableOpacity>
      </View>
    );
  }
}
