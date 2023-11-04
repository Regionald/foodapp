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
import Startquize from '../components/startquiz';
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



const Causes = ({ navigation }) => {
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
				<Text style={styles.bold}>Common causes and misconceptions of food waste</Text>
				{/* <View style={styles.flexBtn}>
					<TouchableOpacity
						style={styles.controllbtn}
					// onPress={() => decreaseRate()}
					>
						<Feather name='rewind' color={Colors.Primary} size={20} />
					</TouchableOpacity>
					{speech.inProgress ? (
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
					)}

					<TouchableOpacity
						style={styles.controllbtn}
					// onPress={() => increaseRate()}
					>
						<Feather name='fast-forward' color={Colors.Primary} size={20} />
					</TouchableOpacity>
				</View> */}

				<View style={styles.info}>

					<Text style={styles.heading}>Food waste and food loss occur through the food supply chain (FSC).</Text>

					<Text style={styles.graytext}>
						The food supply chain broadly consists of:
					</Text>
					<Text style={styles.graytext}>

						{' '}1) <Text style={{ fontWeight: 'bold' }}>Producers-</Text> grow or produce the foods.{"\n"}
						{' '}2) <Text style={{ fontWeight: 'bold' }}>Manufacturers-</Text> process, package and store the foods.{"\n"}
						{' '}3) <Text style={{ fontWeight: 'bold' }}>Distributors-</Text> Transport the bulk foods to different industries.{"\n"}
						{' '}4) <Text style={{ fontWeight: 'bold' }}>Retailers-</Text> sell the foods to consumers (e.g., grocery store, restaurant).{"\n"}
						{' '}5) <Text style={{ fontWeight: 'bold' }}>Consumers-</Text> final stage, receive the products and use it up.{"\n"}
					</Text>


				</View>

				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/FoodWaste.jpg')}
						style={styles.image}
					/>
				</View>

				<View style={styles.info}>

					<Text style={styles.graytext}>
						Food waste and loss can happen at any of these stages.{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Producers can experience food waste due to:{"\n"}</Text>

						{' '}1)Poor weather conditions.{"\n"}
						{' '}2)Increase/decrease in demand and supply.{"\n"}
						{' '}3)Poor finances of the economy.{"\n"}
						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Manufacturers can experience food waste due to{"\n"}</Text>

						{' '}1)Poor handling of food items{"\n"}
						{' '}2)Incorrect storage methods and temperatures{"\n"}
						{' '}3)Unsanitary working environments{"\n"}
						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Distributors can experience food waste due to{"\n"}</Text>
						{' '}1)Incorrect transportation methods{"\n"}
						{' '}2)Incorrect transportation temperatures{"\n"}
						{' '}3)Poor transportation facilities{"\n"}
						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Retailers are a large sector and have a variety of reasons for food waste.{"\n"}</Text>
						{' '}1)Incorrect storage methods and temperatures{"\n"}
						{' '}2)Incorrect preparation methods{"\n"}
						{' '}3)Lack of accurate skills{"\n"}
						{' '}4)Overproduction of foods{"\n"}
						{' '}5)Underproduction of foods{"\n"}
						{' '}6)Incorrect forecasting of consumers{"\n"}

					</Text>
				</View>
				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/Carbohydrates.jpg')}
						style={styles.image}
					/>
				</View>

				<View style={styles.info}>

					<Text style={styles.graytext}>
						At the consumer stage, which is the focus, there are multiple reasons as well for food wasted.{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Poor menu planning{"\n"}</Text>
						<Text style={{ fontWeight: 'bold' }}>Poor preparation methods{"\n"}</Text>

						{' '}1)Overcooking produce.{"\n"}
						{' '}2)Using the same preparation method on multiple ingredients.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Incorrect storage methods {"\n"}</Text>

						{' '}1)Food not being used in time before it goes bad{"\n"}
						{' '}2)Food ‘hidden’ in the fridge{"\n"}
						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Overpreparing{"\n"}</Text>
						{' '}1)Cooking up or serving too much food{"\n"}
						{' '}2)Forgetting or not wanting to eat leftover overprepared food and throwing it away{"\n"}
						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Poor portion control{"\n"}</Text>
						{' '}1)Larger and larger portions are being served.{"\n"}
						{' '}2)Restaurants are serving larger portions and more options.{"\n"}
						{' '}3)All-you-can-eat buffets create large amounts of waste as they produce a surplus of food items.{"\n"}

						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Overbuying{"\n"}</Text>

						{' '}1)Buying sales and not items{"\n"}
						{' '}2)Bulk buying{"\n"}

					</Text>
				</View>

				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/Carbohydrates.jpg')}
						style={styles.image}
					/>
				</View>

				<View style={styles.info}>

					<Text style={styles.graytext}>
						Consumers do not see food waste as an issue that they can control.{"\n"}


						Many consumers see food waste as the governments problem or the institutions problem.As
						they do no not see the large amounts of waste that end up in landfills, they do not see how
						their sole reduction would contribute.
						{"\n"}
						{' '}{"\n"}
						When they are at institutions like restaurants, they feel it the restaurants
						responsibility to deal with food waste.As they have paid the institutions,
						they do not see that costs associated with treating the food waste
						{"\n"}
						{' '}{"\n"}
						They are also a lot of choices to be made and so tend to maybe dish up more than they can
						actually consume, e.g., at a buffet style service.
						{"\n"}
						{' '}{"\n"}


						At institutions like schools, hospitals, and hotels where regulations are strict, 
						food already presented at a buffet cannot be reserved, this food is then thrown away.{"\n"}
						{' '}{"\n"}
						At grocery stores food quality comes into question{"\n"}
						{' '}1)Consumers like to purchase foods that look good visibly.{"\n"}
						{' '}2)A lot of food is then thrown away as consumers do not want to by foods especially produce that has started to wilt or go brown.{"\n"}
						{' '}3)This amongst other reasons is why fruits and vegetables are the most wasted food items.{"\n"}
						{' '}4)As food is biodegradable, many think the food will just naturally break down, therefore food waste isn’t such a big deal.{"\n"}
						{' '}{"\n"}
						In reality, the wasted food ends up in landfills, which negatively affect the  environment.

					</Text>
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
