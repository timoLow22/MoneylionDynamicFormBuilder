import React from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';

import Navigator from './src/navigator/Navigator';
import {rootStore} from './src/root/rootStore';

const App = () => {
  return (
    <Provider store={rootStore}>
      <Navigator />
    </Provider>
  );
};

export default App;
