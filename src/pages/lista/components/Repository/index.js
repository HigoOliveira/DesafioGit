/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Repository extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4'}}
          style={styles.avatar}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.titleInfo}>RocketNative</Text>
          <Text style={styles.titleDescription}>RocketSeat</Text>
        </View>
        <Icon name="chevron-right" size={20} color="#333" />
      </View>
    );
  }
}
