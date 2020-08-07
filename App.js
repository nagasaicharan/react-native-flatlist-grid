import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/Redux/Store';
import FlatListImage from './src/FlatListImages/FlatListImage';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <FlatListImage />
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
