import React, { useContext, useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Image,
} from 'react-native';
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
import { AuthContext } from '../auth/AuthProvider';
import Loading from '../components/loading';

const HomeScreen = ({ navigation }) => {
	const { userData, loading } = useContext(AuthContext);
	const [msg, setMsg] = useState('');

	const onInitialMaker = (text) => {
		console.log(text);
		try {
			if (text !== undefined) {

				text = text.trim();
				let myString = text.split(' ');

				let firstName = myString[0];
				let lastName = myString[1];

				let initials = firstName.substring(0, 1) + lastName.substring(0, 1);
				return initials;


			} else {
				return 'NA';
			}
		} catch (error) {
			return text.substring(0, 1);
		}
	};

	const getJustName = (text) => {
		if (text !== undefined) {
			try {

				text = text.Full_Name;
				text = text.trim();
				let myString = text.split(' ');
				let firstName = myString[0];

				return firstName;
			} catch (error) {
				return text;
			}
		} else {
			return 'User';
		}
	};

	const gettime = () => {
		var today = new Date();
		var currentHour = today.getHours();
		var time = null;

		if (currentHour < 12) {
			time = 'Morning';
		} else if (currentHour < 18) {
			time = 'Afternoon';
		} else {
			time = 'Evening';
		}

		setMsg(time);
	};

	useEffect(() => {
		gettime();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<StatusBar
						statusbarStyle='default'
						backgroundColor={Colors.Secondary}
					/>
					<View style={styles.header}>
						<View style={styles.headerContent}>
							<Text style={styles.headerText}>
								Good {msg}, {getJustName(userData)}
							</Text>
							<Text style={styles.text}>
								Learn more about food wastage and how to reduce it.
							</Text>
						</View>
						<TouchableOpacity
							style={styles.avatar}
							onPress={() => navigation.navigate('Profile')}
						>
							<Text style={styles.initials}>
								{onInitialMaker(userData?.Full_Name)}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.body}>
						<View style={styles.bodyrow}>
							<TouchableOpacity
								onPress={() => navigation.navigate('Knowlodge')}
							>
								<View style={styles.option_sm}>
									<Text style={styles.title2}>Food waste general knowledge and understanding</Text>
									<View style={styles.optionContent}>
										<View style={styles.imageIcon}>
											<Image
												source={require('../../assets/nutrition.png')}
												style={styles.flatIcon}
											/>
										</View>
									</View>
								</View>
							</TouchableOpacity>


							<TouchableOpacity
								onPress={() => navigation.navigate('Prevention')}
							>
								<View style={styles.option}>
									<Text style={styles.title}>Food Wastage Prevention</Text>
									<View style={styles.optionContent}>
										<View style={styles.imageIcon}>
											<Image
												source={require('../../assets/investigate.png')}
												style={styles.flatIcon}
											/>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.bodyrow}>
							<TouchableOpacity onPress={() => navigation.navigate('Causes')}>
								<View style={styles.option_xs}>
									<Text style={styles.title}>Food Wastage Causes</Text>
									<View style={styles.optionContent}>
										<View style={styles.imageIcon}>
											<Image
												source={require('../../assets/garbage-can.png')}
												style={styles.flatIcon}
											/>
										</View>
									</View>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => navigation.navigate('Environment')}
							>
								<View style={styles.option_md}>
									<Text style={styles.title2}>Food waste on the environment</Text>
									<View style={styles.optionContent}>
										<View style={styles.imageIcon}>
											<Image
												source={require('../../assets/paper-bag.png')}
												style={styles.flatIcon}
											/>
										</View>
									</View>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => navigation.navigate('Management')}>
								<View style={styles.option_xs}>
									<Text style={styles.title}>Food waste management methods</Text>
									<View style={styles.optionContent}>
										<View style={styles.imageIcon}>
											<Image
												source={require('../../assets/good-review.png')}
												style={styles.flatIcon}
											/>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
			{/* <Loading loading={loading} /> */}
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: 10,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: windowWidth - 20,
		borderWidth: 1,
		borderColor: Colors.Secondary,
		borderRadius: 10,
	},
	headerContent: {
		padding: 10,
	},
	headerText: {
		fontSize: 18,
		fontFamily: Fonts.Semibold,
		color: Colors.Primary,
		width: windowWidth / 1.5,
	},
	text: {
		fontSize: 14,
		fontFamily: Fonts.Regular,
		color: Colors.Primary,
		width: windowWidth / 1.5,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: Colors.Primary,
		backgroundColor: Colors.Tertiary,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	initials: {
		fontSize: 16,
		color: Colors.Light,
		fontFamily: Fonts.Bold,
	},
	body: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: windowWidth - 20,
		marginVertical: 5,
	},
	bodyrow: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '50%',
	},
	option: {
		height: windowHeight / 2.5,
		borderWidth: 1,
		borderColor: Colors.Secondary,
		borderRadius: 10,
		margin: 5,
		backgroundColor: Colors.Secondary,
		width: windowWidth / 2.2,
		padding: 10,
		marginVertical: 3,
		overflow: 'hidden',
	},
	option_md: {
		height: windowHeight / 4.3,
		borderWidth: 1,
		borderColor: Colors.Secondary,
		borderRadius: 10,
		margin: 5,
		backgroundColor: Colors.Tertiary,
		width: windowWidth / 2.2,
		padding: 10,
		marginVertical: 3,
		overflow: 'hidden',
	},
	option_sm: {
		height: windowHeight / 3.5,
		borderWidth: 1,
		borderColor: Colors.Secondary,
		borderRadius: 10,
		margin: 5,
		backgroundColor: Colors.Tertiary,
		width: windowWidth / 2.2,
		padding: 10,
		marginVertical: 3,
		overflow: 'hidden',
	},
	option_xs: {
		height: windowHeight / 4.5,
		borderWidth: 1,
		borderColor: Colors.Secondary,
		borderRadius: 10,
		margin: 5,
		backgroundColor: Colors.Secondary,
		width: windowWidth / 2.2,
		padding: 10,
		marginVertical: 3,
		overflow: 'hidden',
	},
	title: {
		height: '20%',
		fontSize: 14,
		fontFamily: Fonts.Semibold,
		color: Colors.Light,
		textAlign: 'center',
		zIndex: 2,
		backgroundColor: Colors.Secondary,
	},
	title2: {
		height: '20%',
		fontSize: 14,
		fontFamily: Fonts.Semibold,
		color: Colors.Light,
		textAlign: 'center',
		zIndex: 2,
		backgroundColor: Colors.Tertiary,
	},
	optionContent: {
		position: 'relative',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '80%',
		zIndex: 1,
	},
	imageIcon: {
		width: windowWidth / 5.1,
		height: windowWidth / 5.1,
		overflow: 'hidden',
	},
	flatIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	bottom: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: windowWidth - 20,
		borderColor: Colors.Tertiary,
		borderWidth: 1,
		borderRadius: 10,
		overflow: 'hidden',
	},
	option_bottom: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: windowWidth - 20,
		height: windowHeight / 5,
		backgroundColor: Colors.Tertiary,
	},
	bottomOptionContent: {
		position: 'relative',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
	},
});
