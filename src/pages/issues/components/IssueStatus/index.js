import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const OPEN = 'open';
const CLOSED = 'closed';
const ALL = 'all';

export default class IssueStatus extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: null,
  }

  state = {
    status: ALL,
  }

  renderButton = (text, tag) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.setState({ status: tag });
        if (tag !== this.state.status && this.props.onChange) {
          this.props.onChange(tag);
        }
      }
    }
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
        {this.renderButton('Todas', ALL)}
        {this.renderButton('Abertas', OPEN)}
        {this.renderButton('Fechadas', CLOSED)}
      </View>
    );
  }
}
