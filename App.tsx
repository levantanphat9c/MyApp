import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from '@/ReduxSaga';
import {View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
