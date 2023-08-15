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
import { Colors, Fonts, windowWidth,windowHeight } from '../../utils/util';
import Feather from '@expo/vector-icons/Feather';
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

const Recycling = ({navigation}) => {
	let isMounted = useMountedState();
	const [refreshing, setRefreshing] = useState(false);
	const [speech, setSpeech] = useState({
		inProgress: false,
		paused: false,
		rate: 0.75,
	});

	const whatToSay = `	
	Reduce, reuse, recycle.
	1.	Food waste is a mostly untapped energy source and is generally wasted, releasing greenhouse gases into landfills and, ultimately, global warming. 
	2.	How to dispose of food waste socially and responsibly:.
	•	Composting: vegetable peels can be used as fertiliser.
	•	Use off-cuts like carrot tops, peels, tomato cores etc., to make vegetable stock.
	•	Use vegetable peels such as carrots, cabbage, and butternut to make soup.
	•	Use vegetable leaves, like those of carrots, as herbs to season food.
	3.	Edible food can be donated instead of discarded.
	
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
				<Text style={styles.bold}>Learn how to recycle food.</Text>

				<View style={styles.flexBtn}>
					<TouchableOpacity
						style={styles.controllbtn}
						onPress={() => decreaseRate()}
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
							onPress={() => speak()}
						>
							<Feather name='play' color={Colors.Primary} size={20} />
						</TouchableOpacity>
					)} */}

					<TouchableOpacity
						style={styles.controllbtn}
						onPress={() => increaseRate()}
					>
						<Feather name='fast-forward' color={Colors.Primary} size={20} />
					</TouchableOpacity>
				</View>

				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/FoodRecycle.jpg')}
						style={styles.image}
					/>
				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>Reduce, Reuse, Recycle</Text>
					<Text style={styles.graytext}>
						1. Food waste is a mostly untapped energy source and is generally
						wasted, releasing greenhouse gases into landfills and, ultimately,
						global warming.
						{'\n\n'}
						2. How to dispose of food waste socially and responsibly:
						{'\n\n'} • Composting: vegetable peels can be used as fertiliser.
						{'\n'} • Use off-cuts like carrot tops, peels, tomato cores etc., to
						make vegetable stock.
						{'\n'} • Use vegetable peels such as carrots, cabbage, and butternut
						to make soup.
						{'\n'} • Use vegetable leaves, like those of carrots, as herbs to
						season food.
						{'\n\n'}
						3. Edible food can be donated instead of discarded.
					</Text>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
						<View style={styles.option_bottom}>
							<Text style={styles.title2}>Take A Quiz</Text>
							<View style={styles.bottomOptionContent}>
								<View style={styles.imageIcon}>
									<Image
										source={require('../../assets/quiz.png')}
										style={styles.flatIcon}
									/>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<view>
					
				</view>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Recycling;

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
	title2: {
		height: '20%',
		fontSize: 14,
		fontFamily: Fonts.Semibold,
		color: Colors.Light,
		textAlign: 'center',
		zIndex: 2,
		backgroundColor: Colors.Tertiary,
	},

});
