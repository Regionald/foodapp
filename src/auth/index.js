import React from 'react';
import { AuthProvider } from './AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routers';


// function Providers() {
// 	return (
// 		<AuthProvider>
// 			<Routes />
// 		</AuthProvider>
// 	);
// }

function Providers() {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
};
export default Providers;
