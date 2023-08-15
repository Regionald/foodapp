import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
import { AuthContext } from '../navigation/AuthProvider';
import Button from '../components/Button';
import Loading from '../components/loading';

const PasswordScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [loading, setLoading] = useState(false);

	const onForgot = () => {
		setLoading(false);
		forgot(email);
	};

	// const { forgot } = useContext(AuthContext);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<StatusBar
						statusbarStyle='default'
						backgroundColor={Colors.Primary}
					/>
					<View style={styles.imageContainer}>
						<Image
							source={require('../../assets/Logo.png')}
							style={styles.logo}
						/>
					</View>
					<Text style={styles.Title}> Reset Password.</Text>

					<View>
						<Text style={styles.label}>Email</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								onChangeText={(email) => setEmail(email)}
								numberOfLines={1}
								maxLength={50}
								placeholder='Email'
								placeholderTextColor={Colors.gray}
								keyboardType='email-address'
								autoCapitilize='none'
								autoCorrect={false}
							/>
						</View>
					</View>

					<Button title={'Forgot Password'} onPress={() => onForgot()} />

					<View style={styles.flex}>
						<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
							<Text style={styles.text}>Sign Up</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
							<Text style={styles.text}>Sign In</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<Loading loading={loading} />
		</SafeAreaView>
	);
};
export default PasswordScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 20,
		height: windowHeight,
	},
	imageContainer: {
		marginTop: windowHeight / 20,
		overflow: 'hidden',
		borderRadius: 10,
		height: windowHeight / 6,
		width: windowHeight / 6,
	},
	logo: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
	},
	Title: {
		marginTop: 20,
		fontFamily: Fonts.Bold,
		fontSize: 20,
		color: Colors.Primary,
		textAlign: 'center',
		width: windowWidth - 20,
	},
	label: {
		fontFamily: Fonts.Semibold,
		fontSize: 14,
		color: Colors.Primary,
		marginLeft: 10,
		marginTop: 10,
	},
	inputContainer: {
		marginTop: 0,
		marginBottom: 5,
		width: windowWidth - 20,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderColor: Colors.Primary,
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.white,
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		fontSize: 16,
		fontFamily: Fonts.Regular,
		color: Colors.Dark,
		justifyContent: 'center',
		alignItems: 'center',
	},
	flex: {
		width: windowWidth - 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		fontFamily: Fonts.Semibold,
		color: Colors.Primary,
		fontSize: 14,
		textAlign: 'center',
		marginVertical: 25,
		marginHorizontal: 5,
	},
});
