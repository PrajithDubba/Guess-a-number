import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default (props) => {
	return <View style={styles.textView}><Text style={styles.text}>{props.children}</Text></View>
}

const styles = StyleSheet.create({

	textView: {
		alignItems: "center",
		borderColor: Colors.secondary,
		borderWidth: 2,
		marginVertical: 5,
		padding: 5,
		borderRadius: 10
	},
	text: {
		color: Colors.primary,
		fontSize:  22
	}
});