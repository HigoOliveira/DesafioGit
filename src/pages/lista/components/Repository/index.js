/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import styles from './styles';


const Repository = ({ repo }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: repo.avatar_url }}
      style={styles.avatar}
    />
    <View style={styles.containerInfo}>
      <Text style={styles.titleInfo}>{repo.name}</Text>
      <Text style={styles.titleDescription}>{repo.description}</Text>
    </View>
    <Icon name="chevron-right" size={20} color="#333" />
  </View>
);

export default Repository;

Repository.propTypes = {
  repo: PropTypes.shape({
    avatar_url: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
