import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../components/Logo';

export default class Login extends Component<Props> {
	render () {
		return (
			<View style={styles.container}>
				<Logo/>
			</View>
			)
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