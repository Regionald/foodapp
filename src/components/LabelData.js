import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import{Colors, Fonts, windowWidth} from '../../utils/util';

const LabelData = ({ label, value }) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.value_container}>
				<Text style={styles.value}>{value}</Text>
			</View>
		</View>
	);
};

export default LabelData;

const styles = StyleSheet.create({
	label: {
		fontFamily: Fonts.Semibold,
		fontSize: 14,
		color: Colors.Primary,
		marginLeft: 10,
		marginTop: 10,
	},
	value_container: {
		width: windowWidth - 20,
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: Colors.Secondary,
	},
	value: {
		fontSize: 14,
		fontFamily: Fonts.Semibold,
		color: Colors.Light,
	},
});
