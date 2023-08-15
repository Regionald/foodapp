import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Fonts, windowWidth,windowHeight } from '../../utils/util';

const Startquize = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Startquize;

const styles = StyleSheet.create({
	button: {
		width: windowWidth - 20,
		backgroundColor: Colors.Primary,
		borderWidth: 1,
		borderColor: Colors.Primary,
		borderRadius: 10,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	text: {
		fontFamily: Fonts.Semibold,
		color: Colors.Light,
		fontSize: 14,
	},
});
