import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './welcomScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { NativeBaseProvider } from 'native-base';

// The content 
import HomeScreen from '../main/HomeScreen';
import Causes from '../main/Causes';
import Knowledge from '../main/knowlege';
import Prevention from '../main/prevention';
import Enviroment from '../main/environment';
import Management from '../main/management';

// The questions

import Firstquiz from '../quiz/Firstquiz';
import Secondquiz from '../quiz/Secondquiz';
import Thirdquiz from '../quiz/Thirdquiz';
import Fourthquiz from '../quiz/Fourthquiz'
import Firthquiz from '../quiz/Fifth';
import profile from '../auth/profile';


// The games 

import Game1 from '../games/game1';
import Game2 from '../games/game2';
import Game3 from '../games/game3';
import Game4 from '../games/game4';
import Game5 from '../games/game5';
import Game6 from '../games/game6';
import EditProfile from '../main/EditProfile';
import About from '../main/About';


const Stack = createStackNavigator();
export default function () {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home'
                component={HomeScreen}
                options={{ header: () => null }} />

            <Stack.Screen name='Edit Profile'
                component={EditProfile}
                options={{ header: () => null }} />


            <Stack.Screen name='Game6'
                component={Game6}
                options={{ header: () => null }} />

            <Stack.Screen name='About'
                component={About}
                options={{ header: () => null }} />

            <Stack.Screen name='Game5'
                component={Game5}
                options={{ header: () => null }} />

            <Stack.Screen name='Game3'
                component={Game3}
                options={{ header: () => null }} />

            <Stack.Screen name='Game4'
                component={Game4}
                options={{ header: () => null }} />

            <Stack.Screen name='Game1'
                component={Game1}
                options={{ header: () => null }} />

            <Stack.Screen name='Profile'
                component={profile}
                options={{ header: () => null }} />

            <Stack.Screen name='Game2'
                component={Game2}
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

            <Stack.Screen name='Secondquiz'
                component={Secondquiz}
                options={{ header: () => null }} />

            <Stack.Screen name='Firstquiz'
                component={Firstquiz}
                options={{ header: () => null }} />

            <Stack.Screen name='Fourthquiz'
                component={Fourthquiz}
                options={{ header: () => null }} />

            <Stack.Screen name='Thirdquiz'
                component={Thirdquiz}
                options={{ header: () => null }} />

            <Stack.Screen name='Firthquiz'
                component={Firthquiz}
                options={{ header: () => null }} />
        </Stack.Navigator>)
}










































// import Firstquiz from '../quiz/Firstquiz';
// import Secondquiz from '../quiz/Secondquiz';
// import Thirdquiz from './src/quiz/Thirdquiz';
// import Fourthquiz from './src/quiz/Fourthquiz';
// import Firthquiz from './src/quiz/Fifth'
// import Game1 from './src/games/game1'
// import Game2 from './src/games/game2'
// import Game3 from './src/games/game3';