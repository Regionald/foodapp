import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/auth/welcomScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './src/auth/authStack';

import PasswordScreen from './src/auth/passwordScreen';
import SignInScreen from './src/auth/signInScreen';
import SignUpScreen from './src/auth/signUpScreen';
import HomeScreen from './src/main/HomeScreen';

import Causes from './src/main/Causes';
import Knowledge from './src/main/knowlege';
import Prevention from './src/main/prevention';
import Enviroment from './src/main/environment';
import Management from './src/main/management';
import Firstquiz from './src/quiz/Firstquiz';
import Secondquiz from './src/quiz/Secondquiz';
import Thirdquiz from './src/quiz/Thirdquiz';
import Fourthquiz from './src/quiz/Fourthquiz';
import Firthquiz from './src/quiz/Fifth'
import Game1 from './src/games/game1'
import Game2 from './src/games/game2'
import Game3 from './src/games/game3';
import Providers from './src/auth';




const App = () => {
	// LogBox.ignoreLogs(['EventEmitter.removeListener']);
	// LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
	// const [loaded] = useFonts({
	// 	'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
	// 	'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
	// 	'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
	// });

	// if (!loaded) {

  //   console.log('I have return null');
	// 	return null;
	// }

	return <Providers />;
};

export default App;


// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <AuthStack></AuthStack>
      
//       <Stack.Navigator>


//         <Stack.Screen name='Home'
//           component={HomeScreen}
//           options={{ header: () => null }} />


//         <Stack.Screen name='Game3'
//           component={Game3}
//           options={{ header: () => null }} />


//         <Stack.Screen name='Game2'
//           component={Game2}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Game1'
//           component={Game1}
//           options={{ header: () => null }} />
//         <Stack.Screen name='Welcome'
//           component={WelcomeScreen}
//           options={{ header: () => null }} />

//         <Stack.Screen name='SignIn'
//           component={SignInScreen}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Password'
//           component={PasswordScreen}
//           options={{ header: () => null }} />

//         <Stack.Screen name='SignUp'
//           component={SignUpScreen}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Causes'
//           component={Causes}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Knowlodge'
//           component={Knowledge}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Prevention'
//           component={Prevention}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Environment'
//           component={Enviroment}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Management'
//           component={Management}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Secondquiz'
//           component={Secondquiz}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Firstquiz'
//           component={Firstquiz}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Fourthquiz'
//           component={Fourthquiz}
//           options={{ header: () => null }} />

//         <Stack.Screen name='Thirdquiz'
//           component={Thirdquiz}
//           options={{ header: () => null }} />


//         <Stack.Screen name='Firthquiz'
//           component={Firthquiz}
//           options={{ header: () => null }} />

//       </Stack.Navigator>
//     </NavigationContainer>)
// }


