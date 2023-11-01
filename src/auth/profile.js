import React, { useState, useEffect, useContext } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	ScrollView,
	StatusBar,
	RefreshControl,
	Text,
	TouchableOpacity,
} from 'react-native';
import { AuthContext } from './AuthProvider';
import { Colors, Fonts, windowWidth } from '../../utils/util';
import Options from '../components/Options';
import Loading from '../components/loading';
import Initial from '../components/Intial';
import LabelData from '../components/LabelData';

const ProfileScreen = ({ navigation }) => {
	const { userData, logout } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		setRefreshing(false);
	};

	const onInitialMaker = (text) => {
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

	useEffect(() => {
		navigation.addListener('focus', () => setLoading(false));
	}, [loading, navigation]);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				statusbarStyle='light-content'
				backgroundColor={Colors.Secondary}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				nestedScrollEnabled={true}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: Colors.Light,
					paddingTop: 5,
					width: windowWidth,
					marginBottom: 10,
				}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={[Colors.Primary, Colors.Light, Colors.Dark]}
					/>
				}
			>
				<Initial initial={onInitialMaker(userData?.Full_Name)} />
				<View style={styles.info}>
					<Text style={styles.bold}>{userData?.Full_Name}</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('Edit Profile')}
					>
						<Text style={styles.text_button}>Edit Profile</Text>
					</TouchableOpacity>

					<View style={styles.line} />

					<View style={styles.options}>
						<LabelData label={'Email'} value={userData.Email} />
						<LabelData label={'Province'} value={userData?.Location} />
						<LabelData
							label={'Joined'}
							// value={userData?.CreatedAt.toDate().toDateString()}
						/>
					</View>

					<View style={styles.line} />

					<View style={styles.options}>
						<Options
							icon={'information-outline'}
							text={'About'}
							onPress={() => navigation.navigate('About')}
						/>
						<Options
							icon={'logout-variant'}
							text={'Logout'}
							onPress={() => logout()}
						/>
					</View>
				</View>
				{/* <Loading loading={loading} /> */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: Colors.Light,
		paddingTop: 5,
	},
	info: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: Fonts.Regular,
		fontSize: 14,
		color: Colors.Primary,
	},
	bold: {
		fontFamily: Fonts.Semibold,
		fontSize: 16,
		color: Colors.Primary,
	},
	graytext: {
		fontFamily: Fonts.Regular,
		fontSize: 14,
		color: Colors.Secondary,
	},
	button: {
		backgroundColor: Colors.Primary,
		padding: 10,
		borderRadius: 10,
		marginTop: 20,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text_button: {
		fontFamily: Fonts.Semibold,
		fontSize: 14,
		color: Colors.Light,
	},
	line: {
		borderBottomColor: Colors.Secondary,
		borderBottomWidth: 1,
		width: windowWidth - 20,
		marginVertical: 20,
	},
	options: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
});
