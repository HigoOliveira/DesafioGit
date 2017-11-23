import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonText: {
    fontSize: fonts.small,
    color: colors.link,
  },
});

export default styles;
