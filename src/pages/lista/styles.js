import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    fontSize: fonts.regular,
    color: colors.dark,
  },
  sad: {
    fontSize: fonts.big,
    color: colors.darker,
    fontWeight: 'bold',
  },
  loading: {
    paddingVertical: 10,
  },
});

export default styles;
