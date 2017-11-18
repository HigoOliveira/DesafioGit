/* @flow */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar repositório"
          autoCaptalize="none"
          autoCorrect={false}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <TouchableOpacity onPress={() => {}}>
          <Icon name="plus" size={16} color="#333" />
        </TouchableOpacity>
      </View>
    );
  }
}
