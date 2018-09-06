/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
      <Judul title="BIODATA"/>
      <Judul title="LOGIN"/>
      <Judul title="NAMBAH"/>
        <Text style={styles.welcome}>Haii!</Text>
        <Text style={styles.instructions}>Nama : Dwi Ratnasari</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 3</Text>
        <Text style={styles.instructions}>No Absen : 15</Text>
        <Image style={{width: 300, height:300}}
        source={require('./ratna.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
