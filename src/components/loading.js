import React from 'react';
import {
	StyleSheet,
	View,
	Modal,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from 'react-native';
import { Colors } from '../../utils/util';

const Loading = ({ loading }) => {
	return (
		<Modal visible={loading} animationType='fade' transparent>
			<View style={styles.container}>
				<ActivityIndicator size='large' color={Colors.Primary} />
			</View>
			<TouchableWithoutFeedback>
				<View
					style={[StyleSheet.absoluteFillObject, styles.Model_background]}
				/>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default Loading;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	Model_background: {
		zIndex: -1,
		backgroundColor: Colors.Dark,
		opacity: 0.6,
	},
});
