import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import PropTypes from 'prop-types';

import api from 'services/api';

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
    const response = await api.get(`repos/${repos}`);

    if (!response.ok) throw Error();

    const {
      id,
      name,
      organization:
      { avatar_url },
      description,
    } = response.data;

    this.setState(prevState => ({
      repositories: [...prevState.repositories, {
        id,
        name,
        avatar_url,
        description,
        repos,
      },
      ],
    }));
  }

  handleSave = (repos) => {
    if (!repos) return;
    this.checkAndSaveRepos(repos).then(() => {
    }).catch(() => {
      console.tron.log('Eu não existo');
    });
  }


  render() {
    console.tron.log(this.state.repositories);
    return (
      <View>
        <FlatList
          data={this.state.repositories}
          keyExtractor={item => item.id}
          extraData={this.state}
          renderItem={({ item }) => <Repository repo={item} />}
        />
      </View>
    );
  }
}
