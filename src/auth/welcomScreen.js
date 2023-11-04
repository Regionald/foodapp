import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Image,
	Text,
	Alert,
} from 'react-native';
import React from 'react';
import { windowWidth, Colors, Fonts } from '../../utils/util';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {

	const alertText=()=>{

		Alert.alert('First Alert',"This is my first Alert",[
		  {
			text: 'Cancel',
			onPress: () => console.log('Cancel Pressed'),
			style: 'cancel',
		  },
		  {text: 'OK', onPress: () => console.log('OK Pressed')},
		])
  
	}
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				nestedScrollEnabled={true}
				contentContainerStyle={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					width: windowWidth,
				}}
			>
				<Image
					source={require('../../assets/Logo.png')}
					style={styles.image}
				/>

				<Text style={styles.heading}>Food Wastage</Text>
				<Text style={styles.text}>
					We are here to help you share your food with the needy
				</Text>

				<Button
					title={'Get Started'}
					onPress={() => navigation.navigate('SignIn')}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default WelcomeScreen;


//************CSS */

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.blue,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: windowWidth * 0.65,
		height: windowWidth * 0.65,
		borderRadius: 10,
		resizeMode: 'contain',
		borderColor: Colors.gray,
		borderWidth: 1,
		margin: 10,
		overflow: 'hidden',
		marginVertical: 30,
	},
	heading: {
		fontFamily: Fonts.Bold,
		fontSize: 20,
		color: Colors.Dark,
		textAlign: 'center',
		width: windowWidth * 0.8,
		marginTop: 5,
	},
	subHeading: {
		fontFamily: Fonts.Semibold,
		fontSize: 18,
		color: Colors.Primary,
		textAlign: 'center',
		width: windowWidth * 0.8,
		marginBottom: 5,
	},
	text: {
		fontFamily: Fonts.Semibold,
		color: Colors.Primary,
		fontSize: 16,
		textAlign: 'center',
		marginVertical: 20,
		width: windowWidth - 20,
	},
});
