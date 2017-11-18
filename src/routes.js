import { StackNavigator } from 'react-navigation';

import Lista from 'pages/lista';
import Issues from 'pages/issues';

const routes = StackNavigator({
  Lista: {
    screen: Lista,
  },
  Issues: {
    screen: Issues,
  },
}, {
  initialRouteName: 'Lista',
});

export default routes;
