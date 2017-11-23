import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      id: PropTypes.int,
      avatar_url: PropTypes.string,
      title: PropTypes.string,
      login: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
    onPress: PropTypes.func.isRequired,
  };

  state = {};

  onPress = () => {
    const { onPress, issue } = this.props;

    if (onPress) {
      onPress(issue);
    }
  }

  render() {
    const { issue } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress} activeOpacity={0.7}>
        <Image
          source={{ uri: issue.avatar_url }}
          style={styles.avatar}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.title} numberOfLines={1}>{issue.title}</Text>
          <Text style={styles.login}>{issue.login}</Text>
        </View>
        <Icon name="chevron-right" size={20} color="#999" style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
