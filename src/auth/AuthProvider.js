import React, { useState, createContext, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const [updated, setUpdated] = useState(false);

	const getUser = async () => {
		// setLoading(true);
		if (user !== null) {
			try {

				const current_User = db().ref('users')
					.child(user.uid)
					.orderByKey()
					.once('value')
					.then((snapshot) => {

						if (snapshot){
							setUserData(snapshot.val());
						}
					});
				
			} catch (error) {
				Alert.alert(error.message);
				// setLoading(false);
			}
		} else {
			console.log("regionald");
			// setLoading(false);
		}
	};

	useEffect(() => {
		updated && setUpdated(false);
		user && getUser();
	}, [user, updated]);

	const login = async (Email, Password) => {
		// setLoading(true);
		try {

			await auth()
				.signInWithEmailAndPassword(Email, Password)
				.then(() => {
					setLoading(false);
					Alert.alert('Success', 'Login Successful');
				});
		} catch (e) {
			// setLoading(false);
			Alert.alert('Error!', '' + e.message + '');
		}
	};


	const createProfile = async (response, full_name, province,Email,school) => {
        
		
        // console.log(response.Timestamp.fromDate(new Date()));
		console.log('School:',school);

		db().ref(`/users/${response.user.uid}`).set({
			Province: province,
			Job_title: full_name,
			Email:Email,
			School:school,
		});
	}

	const register = async (Name, Email, Password, province,school) => {
		// setLoading(true);
		console.log(school," at the register function")
		try {

			const response = await auth().createUserWithEmailAndPassword(Email, Password);

			if (response.user) {

				await createProfile(response, Name, province,Email,school);

			};
		} catch (e) {
			// setLoading(false);
			Alert.alert('Error!', '' + e.message + '');
		}
	};


	const update_quiz = (survey_name, quiz, score) => {

		data_object = {}

		data_object.survey_name = survey_name;

		const quiz_obj = quiz.map((question, index) => {

			data_object[question.Question] = question.responce;

			return question.responce;
		});

		data_object.score = score;
		db().ref(`/${survey_name}/${user.uid}`).set(data_object);

	};

	const forgot = async (email) => {
		try {
	
			await auth()
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

			await auth().signOut();
		} catch (e) {
			Alert.alert('Error!', '' + e.message + '');
		}
	};

	return (
		<AuthContext.Provider
			value={{ user, update_quiz, setUser, userData, setUserData, login, register, forgot, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
