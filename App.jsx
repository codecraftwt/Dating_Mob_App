import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import {NativeBaseProvider} from 'native-base';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { persistor, store } from './src/Redux/store';

const App = props => {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <PersistGate  persistor={persistor}>
              <Navigation {...props} />
            </PersistGate>
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
      <Toast />
    </>
  );
};

export default App;
