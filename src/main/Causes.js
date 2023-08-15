import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	ScrollView,
	StatusBar,
	RefreshControl,
	TouchableOpacity,
	Text,
	Image,
} from 'react-native';
import { Colors, Fonts, windowWidth } from '../../utils/util';
import Feather from '@expo/vector-icons/Feather';
import Startquize from '../components/startquiz'
// import * as Speech from 'expo-speech';

const useMountedState = () => {
	const mountedRef = useRef(false);
	const isMounted = useCallback(() => mountedRef.current, []);

	useEffect(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, [isMounted]);

	return isMounted;
};

const logFun = () => {
	console.log('regionald')
}



const Causes = () => {
	let isMounted = useMountedState();
	const [refreshing, setRefreshing] = useState(false);
	// const [speech, setSpeech] = useState({
	// 	inProgress: false,
	// 	paused: false,
	// 	rate: 0.75,
	// });

	const whatToSay = `	
	Causes of food waste in schools:

	1.	Poor service delivery standards.
	2.	Poor quality of food leads the food to be discarded or returned.
	3.	Lack of appropriate ordering system within the school.
	4.	Learners have varying taste preferences.
	5.	Learners not having enough time to finish their food during short break periods.
	6.	Over-production of food by VFH.
	`;

	// const speak = () => {
	// 	const start = () => {
	// 		setSpeech({ ...speech, inProgress: true });
	// 	};
	// 	const complete = () => {
	// 		speech.inProgress &&
	// 			setSpeech({ ...speech, inProgress: false, paused: false });
	// 	};

	// 	Speech.speak(whatToSay, {
	// 		language: 'en',
	// 		rate: speech.rate,
	// 		onStart: start,
	// 		onDone: complete,
	// 		onStopped: complete,
	// 		onError: complete,
	// 	});
	// };

	// const stop = () => {
	// 	Speech.stop();
	// 	setSpeech({ ...speech, inProgress: false });
	// };

	// const increaseRate = () => {
	// 	setSpeech({
	// 		...speech,
	// 		rate: speech.rate + 0.1,
	// 	});
	// };

	// const decreaseRate = () => {
	// 	setSpeech({
	// 		...speech,
	// 		rate: speech.rate - 0.1,
	// 	});
	// };

	// const onRefresh = () => {
	// 	setRefreshing(true);
	// 	setRefreshing(false);
	// };

	// useEffect(() => {
	// 	return () => {
	// 		Speech.stop();
	// 	};
	// }, [isMounted]);

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
						// refreshing={refreshing}
						// onRefresh={onRefresh}
						colors={[Colors.Primary, Colors.Light, Colors.Dark]}
					/>
				}
			>
				<Text style={styles.bold}>Causes of food waste in Schools</Text>
				<View style={styles.flexBtn}>
					<TouchableOpacity
						style={styles.controllbtn}
					// onPress={() => decreaseRate()}
					>
						<Feather name='rewind' color={Colors.Primary} size={20} />
					</TouchableOpacity>
					{/* {speech.inProgress ? (
						<TouchableOpacity style={styles.controllbtn} onPress={() => stop()}>
							<Feather name='pause' color={Colors.Primary} size={20} />
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							style={styles.controllbtn}
							// onPress={() => speak()}
						>
							<Feather name='play' color={Colors.Primary} size={20} />
						</TouchableOpacity>
					)} */}

					<TouchableOpacity
						style={styles.controllbtn}
					// onPress={() => increaseRate()}
					>
						<Feather name='fast-forward' color={Colors.Primary} size={20} />
					</TouchableOpacity>
				</View>

				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/FoodWaste.jpg')}
						style={styles.image}
					/>
				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>1.</Text>
					<Text style={styles.graytext}>Poor service delivery standards.</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>2.</Text>
					<Text style={styles.graytext}>
						Poor quality of food leads the food to be discarded or returned.
					</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>3.</Text>
					<Text style={styles.graytext}>
						Lack of appropriate ordering system within the school.
					</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>4.</Text>
					<Text style={styles.graytext}>
						Learners have varying taste preferences.
					</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>5.</Text>
					<Text style={styles.graytext}>
						Learners not having enough time to finish their food during short
						break periods.
					</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>6.</Text>
					<Text style={styles.graytext}>Over-production of food by VFH.</Text>
				</View>
				<Startquize title='Take a quiz' onPress={() => navigation.navigate('Firstquiz')} />
				<Text>
					{"\n"}
				</Text>

			</ScrollView>
		</SafeAreaView>
	);
};

export default Causes;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: Colors.Light,
		paddingTop: 5,
	},
	info: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: windowWidth - 20,
		marginBottom: 10,
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
		marginVertical: 10,
	},
	heading: {
		fontFamily: Fonts.Semibold,
		fontSize: 14,
		color: Colors.Primary,
	},
	graytext: {
		fontFamily: Fonts.Regular,
		fontSize: 14,
		color: Colors.Primary,
		textAlign: 'justify',
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
	flexBtn: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 10,
	},
	controllbtn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: Colors.Light,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: Colors.Primary,
		marginHorizontal: 5,
	},
	imagecontainer: {
		width: windowWidth - 20,
		height: windowWidth - 20,
		overflow: 'hidden',
		borderRadius: 10,
		borderTopRightRadius: 50,
		borderBottomLeftRadius: 50,
		borderWidth: 2,
		borderColor: Colors.Primary,
		marginVertical: 5,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
});
