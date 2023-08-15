import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/auth/welcomScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PasswordScreen from './src/auth/passwordScreen';
import SignInScreen from './src/auth/signInScreen';
import SignUpScreen from './src/auth/signUpScreen';
import HomeScreen from './src/main/HomeScreen';
import Causes from './src/main/Causes';
import Knowledge from './src/main/knowlege'
import Prevention from './src/main/prevention';
import Enviroment from './src/main/environment'
import Management from './src/main/management'
import Firstquiz from './src/quez/Firstqueze'
import Secondquiz from './src/quez/Secondquize'



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Secondquiz'
          component={Firstquiz}
          options={{ header: () => null }} />

        <Stack.Screen name='Firstquiz'
          component={Firstquiz}
          options={{ header: () => null }} />

        <Stack.Screen name='Home'
          component={HomeScreen}
          options={{ header: () => null }} />

        <Stack.Screen name='Welcome'
          component={WelcomeScreen}
          options={{ header: () => null }} />

        <Stack.Screen name='SignIn'
          component={SignInScreen}
          options={{ header: () => null }} />

        <Stack.Screen name='Password'
          component={PasswordScreen}
          options={{ header: () => null }} />

        <Stack.Screen name='SignUp'
          component={SignUpScreen}
          options={{ header: () => null }} />

        <Stack.Screen name='Causes'
          component={Causes}
          options={{ header: () => null }} />

        <Stack.Screen name='Knowlodge'
          component={Knowledge}
          options={{ header: () => null }} />

        <Stack.Screen name='Prevention'
          component={Prevention}
          options={{ header: () => null }} />

        <Stack.Screen name='Environment'
          component={Enviroment}
          options={{ header: () => null }} />

        <Stack.Screen name='Management'
          component={Management}
          options={{ header: () => null }} />

      </Stack.Navigator>
    </NavigationContainer>)
}


