import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
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
  titleInfo: {
    color: colors.darker,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
  titleDescription: {
    color: colors.grey,
    fontSize: fonts.small,
  },
});

export default styles;
