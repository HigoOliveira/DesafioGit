import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import api from 'services/api';

import Alert from 'components/Alert';

import Header from './components/header';
import Repository from './components/Repository';


import styles from './styles';

export default class Lista extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
    }).isRequired,
  };

  state = {
    repositories: [],
    loading: false,
  }

  // async componentWillMount() {
  //   const response = await api.get('repos/rocketseat/rocketseat.com.br');
  //
  //   console.tron.log(avatar_url);
  // }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.handleSave });
  }

  checkAndSaveRepos = async (repos) => {
    const exist = this.state.repositories.filter(repo => repo.repos === repos);

    if (exist.length) {
      Alert.alert('Esse repositório já está registrado');
      return;
    }

    const response = await api.get(`repos/${repos}`);

    if (!response.ok) throw Error();

    const {
      id,
      name,
      organization:
      { avatar_url },
      description,
    } = response.data;

    const data = {
      id,
      name,
      avatar_url,
      description,
      repos,
    };

    this.setState(prevState => ({
      repositories: [...prevState.repositories, data],
    }));
  }

  handleSave = (repos) => {
    if (!repos) return;
    this.setState({ loading: true });
    this.checkAndSaveRepos(repos).then(() => {
      this.setState({ loading: false });
    }).catch(() => {
      Alert.alert('Repositório não foi encontrado!');
    });
  }

  renderRepositories = () => (
    <FlatList
      data={this.state.repositories}
      keyExtractor={item => item.id}
      extraData={this.state}
      renderItem={({ item }) => <Repository repo={item} />}
    />
  )

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>Nenhum repositório adicionado</Text>
          <Text style={styles.sad}>:(</Text>
        </View>
      )
  )

  renderIndicator = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#999" />
    </View>
  )

  render() {
    console.tron.log(this.state.repositories);
    return (
      <View style={styles.container}>
        {this.state.loading
          ? this.renderIndicator()
          : null}
        {this.renderList()}
      </View>
    );
  }
}
