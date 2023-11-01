import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcomScreen';
import PasswordScreen from './passwordScreen';
import SignInScreen from './signInScreen';
import SignUpScreen from './signUpScreen';
import HomeScreen from '../main/HomeScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();

const AuthStack = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);
	let routeName = 'Welcome';

	// useEffect(() => {
	// 	AsyncStorage.getItem('alreadyLaunched').then((value) => {cls
	// 		if (value == null) {
	// 			AsyncStorage.setItem('alreadyLaunched', 'true');
	// 			setIsFirstLaunch(true);
	// 		} else {
	// 			setIsFirstLaunch(false);
	// 		}
	// 	});
	// }, []);

	// if (isFirstLaunch === null) {
	// 	return null;
	// } else if (isFirstLaunch === true) {
	// 	routeName = 'Welcome';
	// } else {
	// 	routeName = 'SignIn';
	// }

	return (
		<Stack.Navigator initialRouteName={routeName}>
			<Stack.Screen
				name='Welcome'
				component={WelcomeScreen}
				options={{ header: () => null }}
			/>
			<Stack.Screen
				name='SignIn'
				component={SignInScreen}
				options={{ header: () => null }}
			/>
			<Stack.Screen
				name='SignUp'
				component={SignUpScreen}
				options={{ header: () => null }}
			/>
			<Stack.Screen
				name='Password'
				component={PasswordScreen}
				options={{ header: () => null }}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
