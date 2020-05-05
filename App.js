import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import store from './app/redux';
import Home from './app/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.rootView}>
        <Home />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  rootView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
  }
});