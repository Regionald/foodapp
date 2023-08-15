import React, { useState, createContext, useEffect } from 'react';
import firebase from '../auth/firebase';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const [updated, setUpdated] = useState(false);

	const getUser = async () => {
		setLoading(true);
		if (user !== null) {
			try {
				await firebase
					.firestore()
					.collection('Users')
					.doc(user.uid)
					.get()
					.then((snapshot) => {
						if (snapshot.exists) {
							setUserData(snapshot.data());
							setLoading(false);
						}
					});
			} catch (error) {
				Alert.alert(error.message);
				setLoading(false);yar
			}
		} else {
			setLoading(false);
		}
	};

	useEffect(() => {
		updated && setUpdated(false);
		user && getUser();
	}, [user, updated]);

	const login = async (Email, Password) => {
		setLoading(true);
		try {
			await firebase
				.auth()
				.signInWithEmailAndPassword(Email, Password)
				.then(() => {
					setLoading(false);
					Alert.alert('Success', 'Login Successful');
				});
		} catch (e) {
			setLoading(false);
			Alert.alert('Error!', '' + e.message + '');
		}
	};

	const register = async (Name, Email, Password,province) => {
		setLoading(true);
		try {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(Email, Password)
				.then(() => {
					firebase
						.firestore()
						.collection('Users')
						.doc(firebase.auth().currentUser.uid)
						.set({
							Name,
							Email,
							Location: province,
							CreatedBy: firebase.auth().currentUser.uid,
							CreatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
						})
						.then(() => {
							setLoading(false);
						});
				});
		} catch (e) {
			setLoading(false);
			Alert.alert('Error!', '' + e.message + '');
		}
	};

	const forgot = async (email) => {
		try {
			await firebase
				.auth()
				.sendPasswordResetEmail(email)
				.then(() => {
					Alert.alert(
						'Email Sent',
						'Please check your email, You will get a link to reset your password.'
					);
				});
		} catch (e) {
			Alert.alert('Error!', '' + e.message + '');
		}
	};

	const logout = async () => {
		try {
			await firebase.auth().signOut();
		} catch (e) {
			Alert.alert('Error!', '' + e.message + '');
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				login,
				register,
				forgot,
				logout,
				loading,
				setLoading,
				setUpdated,
				userData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
