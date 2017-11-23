import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const ABERTAS = 'ABERTAS';
const TODAS = 'TODAS';
const FECHADAS = 'FECHADAS';

export default class IssueStatus extends Component {
  state = {
    status: TODAS,
  }

  renderButton = (text, tag) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => { this.setState({ status: tag }); }}
    >
      <View style={
        this.state.status === tag ? styles.activate : styles.inactive
      }
      >
        <Text
          style={[
              styles.text,
              this.state.status === tag ? styles.activateText : null,
            ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
  render() {
    return (
      <View style={styles.container}>
        {this.renderButton('Todas', TODAS)}
        {this.renderButton('Abertas', ABERTAS)}
        {this.renderButton('Fechadas', FECHADAS)}
      </View>
    );
  }
}
