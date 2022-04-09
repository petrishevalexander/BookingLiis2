import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from './src/components/AppNavigator';
import {LoginScreen} from './src/screens/LoginScreen';
import {store} from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <LoginScreen />
    </Provider>
  );
};

export default App;
