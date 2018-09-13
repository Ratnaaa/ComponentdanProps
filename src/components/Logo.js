import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Login extends Component<Props> {
	render () {
		return (
			<View style={}>
				<Image style={{width: 40, height: 70}}
					source={reqiure('../images/facebook.png')}
				<Text style={styles.logoText}>welcome to My App</Text>
			</View>
			)
		}
	}

	const styles = StyleSheet.create({
  	container : {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
},
    logoText : {
    	marginVertical:15,
    	fontSize:18;
    	color:'rgba(255, 255, 255, 0.7)'
    }
  }
  });