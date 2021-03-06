import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
  TouchableOpacity,
  Linking,
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
    all: {
      loading: false,
      data: [],
    },
    open: {
      loading: false,
      data: [],
    },
    closed: {
      loading: false,
      data: [],
    },
    state: 'all',
    refreshing: false,
  }
  componentWillMount() {
    this.loadIssues();
  }

  loadIssues = async (state = 'all') => {
    const { repo } = this.props.navigation.state.params;

    const { refreshing } = this.state;

    if (this.state[state].data.length > 0 && !refreshing) {
      this.setState({ state });
      return;
    }

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

    this.setState({ [state]: { data, loading: true } });
  }

  handleChangeStatus = (state) => {
    this.setState({ state });
    this.loadIssues(state);
  }

  handleRefreshing = () => {
    this.setState({ refreshing: true });
    this.loadIssues(this.state.state).then(() => {
      this.setState({ refreshing: false });
    });
  }

  handleUpdate = () => {
    this.setState({ [this.state.state]: { loading: false, data: [] } });
    this.loadIssues(this.state.state);
  }

  renderItem = ({ item }) => (
    <Issue issue={item} onPress={(issue) => { Linking.openURL(issue.url); }} />
  )

  renderIssues = state => (
    this.state[state].data.length
      ? (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefreshing}
            />
          }
          data={this.state[state].data}
          keyExtractor={item => item.id}
          extraData={this.state}
          renderItem={this.renderItem}
        />
      )
      : (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>Nenhum issue encontrado.</Text>
          <TouchableOpacity onPress={this.handleUpdate} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      )
  )

  renderList = () => (
    !this.state[`${this.state.state}`].loading
      ? (
        <View>
          <ActivityIndicator size="large" color="#999" />
        </View>
      )
      : this.renderIssues(this.state.state)
  )

  render() {
    return (
      <View style={styles.container}>
        <IssueStatus onChange={this.handleChangeStatus} />
        {this.renderList()}
      </View>
    );
  }
}
