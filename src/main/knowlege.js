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
import Startquize from '../components/startquiz'
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

const Nutrition = ({ navigation }) => {
	let isMounted = useMountedState();
	const [refreshing, setRefreshing] = useState(false);
	const [speech, setSpeech] = useState({
		inProgress: false,
		paused: false,
		rate: 0.75,
	});

	const whatToSay = `	
		Nutrients.
		They provide the body with the fuel to perform day-to-day functions. 
		The essential nutrients are carbohydrates, proteins , fats and oil, vitamins, minerals, and water.
		
		Macronutrients.
		Carbohydrates, fat and protein are called macronutrients. They are
		the nutrients you use in the largest amounts. "Macronutrients are
		the nutritive components of food that the body needs for energy and
		to maintain the body's structure and systems," says MD Anderson
		Wellness Dietitian Lindsey Wohlford.

		Carbohydrates.
		These is the body’s powerhouse and provides the body with energy from calories to function.
		A few main sources of carbohydrates, also high in fibre, include wheat, maise, rice, fruit, and vegetables. 
		The energy form of carbohydrates found in these sources is a sugar known as glucose, which all tissue and cells use. 
		

		Fats and Oils.
		This is a concentrated form of energy. They allow joints to loosen, reduce inflammation and enable the absorption of certain vitamins.
		There are 2 types, saturated and unsaturated. Saturated is solid at room temperature, unhealthy, and mainly found in animal sources, for example, pork fat.
		Unsaturated are liquid at room temperature, healthier and generally found from plant sources, for example, avocado
		
		Proteins.
		These are essential for growth and repair in the body. 
		They are the building blocks and play an important role in making hormones and repairing tissue and may supply the body with energy if carbohydrates are limited. 
		A few common sources include animal proteins such as eggs, beef, and poultry and plant proteins such as soya, beans, and ground nuts. 

		Vitamins and Minerals.
		These are needed in smaller quantities but are crucial in daily processes, known as protective nutrients, required to preserve immune functionality. 
		Vitamins (except vitamin D) and minerals cannot be produced in the body; therefore, they must be eaten. Sources include fruits, vegetables, dairy products, and fish.
	
		Water.
		The adult human body is up to 60% water. The body would only be able to survive a few days without water. 
		Water is essential in building cells, carrying waste, cooling the body, etc.
		It is recommended for children between ages 5 and 12 to drink 1 to 1.5litres a day and for anyone over 13 to drink at least 2 litres a day. 


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
				<Text style={styles.bold}>Let's Get Started</Text>
				<Text style={styles.heading}>Learn more about nutritions</Text>

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

				<View style={styles.info}>
					<Text style={styles.heading}>Nutrients?</Text>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/Nutrients.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						They provide the body with the fuel to perform day-to-day functions.
						The essential nutrients are carbohydrates, proteins, fats and oil,
						vitamins, minerals, and water.
					</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>Macronutrients</Text>
					<Text style={styles.graytext}>
						Carbohydrates, fat and protein are called macronutrients. They are
						the nutrients you use in the largest amounts. "Macronutrients are
						the nutritive components of food that the body needs for energy and
						to maintain the body's structure and systems," says MD Anderson
						Wellness Dietitian Lindsey Wohlford.
					</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>Carbohydrates</Text>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/Carbohydrates.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						These are the body’s powerhouse and provides the body with energy
						from calories to function. A few main sources of carbohydrates, also
						high in fibre, include wheat, maise, rice, fruit, and vegetables.
						The energy form of carbohydrates found in these sources is a sugar
						known as glucose, which all tissue and cells use.
					</Text>
				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>Fats And Oil</Text>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/FatsAndOil.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						These are a concentrated form of energy. They allow joints to
						loosen, reduce inflammation and enable the absorption of certain
						vitamins. There are 2 types, saturated and unsaturated. Saturated is
						solid at room temperature, unhealthy, and mainly found in animal
						sources, for example, pork fat. Unsaturated are liquid at room
						temperature, healthier and generally found from plant sources, for
						example, avocado
					</Text>
				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>Proteins</Text>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/Proteins.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						These are essential for growth and repair in the body. They are the
						building blocks and play an important role in making hormones and
						repairing tissue and may supply the body with energy if
						carbohydrates are limited. A few common sources include animal
						proteins such as eggs, beef, and poultry and plant proteins such as
						soya, beans, and ground nuts.
					</Text>
				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>Vitamins and Minerals</Text>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/VitaminsAndMinerals.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						These are needed in smaller quantities but are crucial in daily
						processes, known as protective nutrients, required to preserve
						immune functionality. Vitamins (except vitamin D) and minerals
						cannot be produced in the body; therefore, they must be eaten.
						Sources include fruits, vegetables, dairy products, and fish.
					</Text>
				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>Water</Text>
					<Text style={styles.graytext}>
						The adult human body is up to 60% water. The body would only be able
						to survive a few days without water. Water is essential in building
						cells, carrying waste, cooling the body, etc. It is recommended for
						children between ages 5-12 to drink 1-1.5litres a day and for anyone
						over 13 to drink at least 2 litres a day.
					</Text>
				</View>
				<Startquize title='Take a quiz' onPress={() => navigation.navigate('Secondquiz')} />
				<Text>
					{"\n"}
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Nutrition;

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
