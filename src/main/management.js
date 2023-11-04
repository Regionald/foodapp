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
import { Colors, Fonts, windowWidth, windowHeight } from '../../utils/util';
import Startquize from '../components/startquiz';
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

const Recycling = ({ navigation }) => {
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
				<Text style={styles.bold}>Food waste management methods.</Text>

				{/* <View style={styles.flexBtn}>
					<TouchableOpacity
						style={styles.controllbtn}
						onPress={() => decreaseRate()}
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
							onPress={() => speak()}
						>
							<Feather name='play' color={Colors.Primary} size={20} />
						</TouchableOpacity>
					)}

					<TouchableOpacity
						style={styles.controllbtn}
						onPress={() => increaseRate()}
					>
						<Feather name='fast-forward' color={Colors.Primary} size={20} />
					</TouchableOpacity>
				</View> */}

				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/FoodRecycle.jpg')}
						style={styles.image}
					/>
				</View>

				<View style={styles.info}>

					<Text style={styles.graytext}>
						;

						The ideal is to prevent food waste, however not all food waste is avoidable. Therefore, options can be looked at the manage food waste.{"\n"}

						<Text style={{ fontWeight: 'bold' }}>The most prominent method of food waste management is the 3 or 4 R’s:{"\n"}</Text>

						{' '}1) <Text style={{ fontWeight: 'bold' }}>Reduce –</Text>minimise the amount of food wasted..{"\n"}
						{' '}2) <Text style={{ fontWeight: 'bold' }}>Reuse – </Text>make use of food items in other recipes, e.g. using leftover chicken to make sandwiches the next day.{"\n"}
						{' '}3) <Text style={{ fontWeight: 'bold' }}>Recycle – </Text>upgrading food items and making them into new products e.g., making soup out of vegetable offcuts{"\n"}
						{' '}4) <Text style={{ fontWeight: 'bold' }}>Recover – </Text>food items that would usually be thrown away can be recovered and used again, e.g., vegetable peel chips.{"\n"}

						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Under recycling there are many different methods:{"\n"}</Text>

						<Text style={{ fontWeight: 'bold' }}>Composting forms as a method of recycling{"\n"}</Text>

						{' '}1)Composting turns the organic waste into fertilizer.{"\n"}
						{' '}2)Items that can be composted include:{"\n"}
						{'   '}<Text style={{ fontWeight: 'bold' }}>Greens – </Text>Grass clippings, vegetable waste, fruit scraps, weeds, and coffee grounds {"\n"}
						{'   '}<Text style={{ fontWeight: 'bold' }}>Browns –</Text> Dead leaves, wood chips, twigs, and fireplace ash {"\n"}
						{'   '}<Text style={{ fontWeight: 'bold' }}>Recyclable Packaging Material –</Text> Newspaper, cardboard, and paper{"\n"}
						{'   '}<Text style={{ fontWeight: 'bold' }}>Food Leftovers –</Text> Eggshells, tea bags, and nutshells {"\n"}
						{' '}{"\n"}





						<Text style={{ fontWeight: 'bold' }}>Try put your waste to work if you cannot compost.{"\n"}</Text>
						{' '}1) Use the leftovers as farm animal feed such. {"\n"}
						{' '}2) Try to find local facilities that you can donate the food scraps to{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Make creative use of your leftovers.{"\n"}</Text>
						{' '}1) Turn stale bread into breadcrumbs/croutons and freeze it{"\n"}
						{' '}2) Turn vegetable peels into pickles.{"\n"}
						{' '}3) Add citrus peels to sugar to flavour the sugar.{"\n"}
						{' '}4) Add citrus peels to sugar syrup and turn them into candy.{"\n"}
						{' '}5) Use vegetable tops such as those from carrots as herbs.{"\n"}
						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Reuse the food packaging materials.{"\n"}</Text>
						{' '}1) Items such as paper wrappers, carons and containers. {"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Use fruit peels as natural aromas{"\n"}</Text>
						{' '}1) Boil fruit peels to create a natural air freshener. {"\n"}
						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Make infusions.{"\n"}</Text>
						{' '}1) Orange peels vinegar to vinegars{"\n"}
						{' '}2) Chilli off cuts to olive oil{"\n"}
						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Regrow vegetables.{"\n"}</Text>
						{' '}1) Seeds, pits, and cuttings of lettuce, ginger, avocado, celery, green onions, and more can even be regrown.{"\n"}
						{' '}2) Plant them in soil, water them appropriately and provide plenty of sunlight.{"\n"}
						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Use every last drop of the jar.{"\n"}</Text>
						{' '}1) Add oats or chia seeds to peanut butter jars to make overnight porridge.{"\n"}
						{' '}2) Add eggs or mashed potatoes to salsa jars for a flavourful punch.{"\n"}
						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Revamp herbs and ends.{"\n"}</Text>
						{' '}1) Dry out herbs to make spice blends.{"\n"}
						{' '}2) Dry out vegetable ends and use in the same way.{"\n"}



					</Text>
				</View>



				<Startquize title='Take a quiz' onPress={() => navigation.navigate('Firthquiz')} />
				<Text>
					{"\n"}
				</Text>

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
