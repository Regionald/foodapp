import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Colors, Fonts, windowWidth } from '../../utils/util';

const LabelInput = ({ label, onChangeText, placeholder, keyboard, value }) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={(e) => onChangeText(e)}
					numberOfLines={1}
					placeholder={placeholder}
					placeholderTextColor={Colors.gray}
					autoCorrect={false}
					keyboardType={keyboard}
					value={value}
				/>
			</View>
		</View>
	);
};

export default LabelInput;

const styles = StyleSheet.create({
	label: {
		fontFamily: Fonts.Semibold,
		fontSize: 14,
		color: Colors.Primary,
		marginLeft: 5,
		marginTop: 10,
	},
	inputContainer: {
		width: windowWidth * 0.94,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderColor: Colors.Primary,
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.Light,
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		fontSize: 14,
		fontFamily: Fonts.Regular,
		color: Colors.dark,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
