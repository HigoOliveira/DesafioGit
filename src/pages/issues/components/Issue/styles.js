import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
  },
  containerInfo: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: colors.darker,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
  login: {
    color: colors.grey,
    fontSize: fonts.small,
  },
});

export default styles;
