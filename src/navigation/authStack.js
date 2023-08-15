import React, { useEffect, useState } from 'react';
import WelcomeScreen from "../auth/welcomScreen";
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'Welcome';
    } else {
        routeName = 'SignIn';
    }
    return (
        <Stack.Navigator intialRouteName={routeName}>

            <Stack.Screen
                name='Welcome'
                component={WelcomeScreen}
                options={{ header: () => null }}
            />


        </Stack.Navigator>

    )

}

export default AuthStack;