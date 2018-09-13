/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/pages/Login';
import Logo from './src/images/facebook';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#4b2c20"
          barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#795548',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
