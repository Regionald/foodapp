import React, { useContext, useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	ScrollView,
} from 'react-native';
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
import FeatherIcons from '@expo/vector-icons/Feather';
import { AuthProvider } from '../navigation/AuthProvider';
import Button from '../components/Button';
import Loading from '../components/loading';
import DropDown from '../components/DropDown';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
	apiKey: 'AIzaSyB5VMVtl6wjKh5ttFuOgV5SqedFJ1-K2JU',
	authDomain: 'foodwastage-a02af.firebaseapp.com',
	projectId: 'foodwastage-a02af',
	storageBucket: 'foodwastage-a02af.appspot.com',
	messagingSenderId: '232726174827',
	appId: '1:232726174827:web:0f00263b9547c06cc6a52e',
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}



const getAllData = async () => {
  try {
    const snapshot = await firebase.firestore().collection('YourCollection').get();
    const data = [];
    
    snapshot.forEach(doc => {
      // Extract the document data and add it to the array
      data.push(doc.data());
    });

    // Return the array containing all the documents
    return data;
  } catch (error) {
    console.error('Error getting documents:', error);
    return [];
  }
};

// Usage example
getAllData()
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred
    console.error(error);
  });


const SignUpScreen = ({ navigation }) => {
	// const { register, loading } = useContext(AuthProvider);
	console.log('Regionald Mongwe')
	firebase
	const [secure, setSecure] = useState(true);
	const [focus, setFocus] = useState(false);
	const [errors, setErrors] = useState({});
	const [province, setProvince] = useState('-- Select Province --');
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onSignUp = () => {
		const error = validateInput();

		if (Object.keys(error).length === 0) {
			register(values.name, values.email, values.password, province);
		} else {
			setErrors(error);
		}
	};

	const validateInput = () => {
		let errors = {};
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;

		if (!values.name) {
			errors.name = 'Name is required';
		}

		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Invalid Email';
		}

		if (!province || province === '-- Select Province --') {
			errors.province = 'Province is required';
		}

		if (!values.password) {
			errors.password = 'Password is required';
		}

		if (values.password.length < 8) {
			errors.passwordLength = 'Password must be at least 8 characters';
		}

		if (!values.password.match(lowerCaseLetters)) {
			errors.passwordLowerCase =
				'Password must contain at least one lowercase letter';
		}

		if (!values.password.match(upperCaseLetters)) {
			errors.passwordUpperCase =
				'Password must contain at least one uppercase letter';
		}

		if (!values.password.match(numbers)) {
			errors.passwordNumber = 'Password must contain at least one number';
		}

		return errors;
	};

	useEffect(() => {
		setErrors({});
	}, [values]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<StatusBar
						statusbarStyle='light-content'
						backgroundColor={Colors.Primary}
					/>
					<Text style={styles.Title}>Welcome!</Text>
					<Text style={styles.subTitle}>Create an account</Text>

					<View>
						<Text style={styles.label}>Full Name</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								onChangeText={(name) => setValues({ ...values, name })}
								numberOfLines={1}
								maxLength={30}
								placeholder='Full Name'
								placeholderTextColor={Colors.gray}
								autoCapitilize='words'
								autoCorrect={false}
							/>
						</View>
						{errors.name && <Text style={styles.error}>{errors.name}</Text>}
					</View>
					<View>
						<DropDown
							label={'Province'}
							options={[
								{
									title: 'Gauteng',
								},
								{
									title: 'Limpopo',
								},
								{
									title: 'Mpumalanga',
								},
								{
									title: 'North West',
								},
								{
									title: 'Free State',
								},
								{
									title: 'KwaZulu-Natal',
								},
								{
									title: 'Eastern Cape',
								},
								{
									title: 'Western Cape',
								},
								{
									title: 'Northern Cape',
								},
							]}
							selected={(e) => setProvince(e)}
							value={province}
						/>
						{errors.province && (
							<Text style={styles.error}>{errors.province}</Text>
						)}
					</View>

					<View>
						<Text style={styles.label}>Email</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								onChangeText={(email) => setValues({ ...values, email })}
								numberOfLines={1}
								maxLength={50}
								placeholder='Email Address'
								placeholderTextColor={Colors.gray}
								keyboardType='email-address'
								autoCapitilize='none'
								autoCorrect={false}
							/>
						</View>
						{errors.email && <Text style={styles.error}>{errors.email}</Text>}
					</View>

					<View>
						<Text style={styles.label}>Password</Text>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								onChangeText={(password) => setValues({ ...values, password })}
								numberOfLines={1}
								maxLength={20}
								placeholderTextColor={Colors.gray}
								placeholder='Strong Password'
								secureTextEntry={secure}
								setFocus={focus}
								onFocus={() => setFocus(true)}
								onBlur={() => setFocus(false)}
							/>
							<FeatherIcons
								style={{ paddingRight: 15 }}
								name={secure ? 'eye' : 'eye-off'}
								size={20}
								color={Colors.gray}
								onPress={() => setSecure(!secure)}
							/>
						</View>
						{errors.password && (
							<Text style={styles.error}>{errors.password}</Text>
						)}
						{errors.passwordLength && (
							<Text style={styles.error}>{errors.passwordLength}</Text>
						)}
						{errors.passwordLowerCase && (
							<Text style={styles.error}>{errors.passwordLowerCase}</Text>
						)}
						{errors.passwordUpperCase && (
							<Text style={styles.error}>{errors.passwordUpperCase}</Text>
						)}
						{errors.passwordNumber && (
							<Text style={styles.error}>{errors.passwordNumber}</Text>
						)}
					</View>

					<Button title={'Sign Up'} onPress={() => onSignUp()} />

					<View style={styles.termsTextContainer}>
						<Text style={styles.infoText}>By signing up you accept our </Text>
						<Text
							onPress={() => console.log('Terms of use')}
							style={styles.termsText}
						>
							Terms of use
						</Text>
						<Text style={styles.infoText}> and </Text>
						<Text
							onPress={() => console.log('Privacy Policy')}
							style={styles.termsText}
						>
							Privacy Policy
						</Text>
					</View>

					<TouchableOpacity
						style={styles.swicthPage}
						onPress={() => navigation.navigate('SignIn')}
					>
						<Text style={styles.infoText}>
							Have an account?
							<Text
								style={[
									styles.infoText,
									{ color: Colors.Dark, fontFamily: Fonts.Semibold },
								]}
							>
								{' '}
								Sign In
							</Text>
						</Text>
					</TouchableOpacity>
				</View>
				{/* <Loading loading={loading} /> */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 20,
		height: windowHeight,
	},
	subText: {
		fontSize: 30,
		fontFamily: Fonts.Bold,
		color: Colors.Primary,
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	Title: {
		marginTop: 15,
		fontFamily: Fonts.Bold,
		fontSize: 20,
		color: Colors.Primary,
		textAlign: 'center',
		width: windowWidth * 0.9,
	},
	subTitle: {
		fontFamily: Fonts.Regular,
		fontSize: 14,
		color: Colors.Dark,
		textAlign: 'center',
		width: windowWidth * 0.9,
		marginBottom: 20,
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
	forgotText: {
		marginTop: 5,
		alignSelf: 'flex-end',
	},
	infoText: {
		fontSize: 14,
		color: Colors.Dark,
		fontFamily: Fonts.Regular,
	},
	swicthPage: {
		marginTop: 10,
	},
	termsTextContainer: {
		marginTop: 20,
		width: windowWidth * 0.9,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	termsText: {
		fontSize: 14,
		color: Colors.Dark,
		fontFamily: Fonts.Semibold,
	},
	error: {
		color: 'red',
		fontSize: 12,
		fontFamily: Fonts.Regular,
		marginLeft: 20,
	},
});
