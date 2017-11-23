import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 35,
    backgroundColor: colors.inactive,
    borderRadius: 5,
    marginVertical: 10,
    overflow: 'hidden',
  },
  button: {
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.dark,
  },
  inactive: {
    opacity: 0.5,
  },
  activate: {
    opacity: 1,
  },
  activateText: {
    fontWeight: 'bold',
    fontSize: fonts.regular,
  },
});

export default styles;
