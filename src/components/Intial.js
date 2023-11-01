import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { windowWidth, Colors, Fonts } from '../../utils/util';

const Initial = ({ initial }) => {
	return (
		<View style={styles.image_container}>
			<Text style={styles.initials}>{initial}</Text>
		</View>
	);
};

export default Initial;

const styles = StyleSheet.create({
	image_container: {
		width: windowWidth * 0.35,
		height: windowWidth * 0.35,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		borderColor: Colors.gray,
		borderWidth: 2,
		borderRadius: 100,
		margin: 10,
		overflow: 'hidden',
		backgroundColor: Colors.Tertiary,
	},
	initials: {
		fontSize: 35,
		color: Colors.Light,
		fontFamily: Fonts.Bold,
	},
});
