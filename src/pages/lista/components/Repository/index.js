/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repo: PropTypes.shape({
      avatar_url: PropTypes.string,
      description: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
    onPress: PropTypes.func.isRequired,
  };

  onPress = () => {
    const { onPress, repo } = this.props;

    if (onPress) {
      onPress(repo);
    }
  }

  render() {
    const { repo } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress} activeOpacity={0.7}>
        <Image
          source={{ uri: repo.avatar_url }}
          style={styles.avatar}
        />
        <View style={styles.containerInfo}>
          <Text style={styles.titleInfo}>{repo.name}</Text>
          <Text style={styles.titleDescription}>{repo.description}</Text>
        </View>
        <Icon name="chevron-right" size={20} color="#999" />
      </TouchableOpacity>
    );
  }
}
