import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    alignSelf: 'stretch',
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 5,
    flex: 1,
    marginRight: 20,
    height: 32,
    fontSize: fonts.small,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
});

export default styles;
