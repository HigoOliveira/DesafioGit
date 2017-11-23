import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import api from 'services/api';

import styles from './styles';

import IssueStatus from './components/IssueStatus';
import Issue from './components/Issue';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repo.name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  state = {
    all: [],
    open: [],
    closed: [],
    state: 'all',
  }
  componentWillMount() {
    this.loadIssues();
  }

  async loadIssues(state = 'all') {
    const { repo } = this.props.navigation.state.params;

    console.tron.log(this.props.navigation.state);

    const response = await api.get(`repos/${repo.repos}/issues?state=${state}`);

    if (!response.ok) {
      throw Error();
    }

    const data = response.data.map(issue => ({
      title: issue.title,
      avatar_url: issue.user.avatar_url,
      login: issue.user.login,
      id: issue.id,
      url: issue.html_url,
    }));

    this.setState({ [state]: data, state });
  }

  handleChangeStatus = (state) => {
    this.loadIssues(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <IssueStatus onChange={this.handleChangeStatus} />
        {this.state[`${this.state.state}`].map(issue => <Issue issue={issue} onPress={() => {}} />)}
      </View>
    );
  }
}
