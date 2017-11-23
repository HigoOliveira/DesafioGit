import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

import IssueStatus from './components/IssueStatus';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repo.name,
  });

  render() {
    return (
      <View style={styles.container}>
        <IssueStatus />
      </View>
    );
  }
}
