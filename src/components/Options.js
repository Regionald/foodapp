import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, Fonts, windowWidth } from '../../utils/util';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';

const Options = ({ icon, text, onPress }) => {
	return (
		<TouchableOpacity style={styles.option} onPress={onPress}>
			<View style={styles.icon_border}>
				<Icons name={icon} size={20} color={Colors.Light} />
			</View>
			<Text style={styles.option_text}>{text}</Text>
			<View></View>
		</TouchableOpacity>
	);
};

export default Options;

const styles = StyleSheet.create({
	option: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: windowWidth - 20,
		padding: 10,
		marginVertical: 2,
	},
	option_text: {
		fontFamily: Fonts.Semibold,
		fontSize: 14,
		color: Colors.Primary,
		textAlign: 'left',
	},
	icon_border: {
		backgroundColor: Colors.Secondary,
		padding: 5,
		borderRadius: 10,
	},
});
