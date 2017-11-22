import { Alert } from 'react-native';

const alert = text => Alert.alert(
  'Desafio 02',
  text,
  [
    { text: 'Ok' },
  ],
  { cancelable: false },
);

export default { alert };
