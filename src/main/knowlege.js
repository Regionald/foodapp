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
				<Text style={styles.heading}>Learn more about Food waste general knowledge and understanding</Text>

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

				<View style={styles.info}>
					<View><Text>
						{"\n"}
					</Text></View>
					<Text style={styles.heading}>Food waste is food that is left uneaten.</Text>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/Nutrients.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						Food waste can be <Text style={{ fontWeight: 'bold' }}>edible</Text> or <Text style={{ fontWeight: 'bold' }}>inedible</Text>.{"\n"}
						<Text>
							{"\n"}
						</Text>
						<Text style={{ fontWeight: 'bold' }}>Edible</Text> means that it is still safe and able to be eaten, like if you dish up too much and leave food on your plate.{"\n"}
						<Text>
							{"\n"}
						</Text>
						<Text style={{ fontWeight: 'bold' }}>Inedible</Text> is either unsafe or cannot be eaten further. Things such as bones and certain vegetable peels.

					</Text>

					<Text style={styles.graytext}>
						<Text>
							{"\n"}
						</Text>

						It is said that almost 1/3rd or 30% of all the food produces to be eaten goes wasted.
						This means that more than 2 billion people could be fed with the amount of food we waste.
						This is over 1.3 billion tonnes of fruits, vegetables, dairy, seafood and grains.

					</Text>

					<Text style={styles.graytext}>
						<Text>
							{"\n"}
						</Text>
						If food waste were to reduced, this would improve society as levels of food insecurity and malnutrition would decrease.
						This wasted food is caused throughout the food supply chain (FSC) for various reasons like:{"\n"}
					</Text>
					<Text style={styles.graytext}>1)	On the farms due to poor harvesting{"\n"}</Text>
					<Text style={styles.graytext}>2)	At manufacturers and distributors due to poor handling and transportation{"\n"}</Text>
					<Text style={styles.graytext}>3)	 At retailers due to poor storage and supply/demand trends{"\n"}</Text>
					<Text style={styles.graytext}>4)	Or at consumers due to overconsumptions and poor consumption behaviours{"\n"}</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.heading}>

						This wasted food could be enough to end world hunger and feed every starving person on the planet.
						Globally food waste waste’s money. Money spent on growing, processing, storing and disposing of the food w=that was never eaten.

					</Text>

					<Text>
						{"\n"}
					</Text>
					<Text style={styles.graytext}>
						In South Africa 10 million tonnes of food are wasted each year Of this, 70% of the foods that are wasted are fruits, vegetables and cereals.
						This is an annually loss of R61,5 billion rand according to the Council for Scientific and Industrial Research
						The wasted food in South Africa leads to a wasted energy that was used to produce these foods. It is said that this wasted energy could light up the City of Johannesburg for 16 weeks!
						The wasted water could fill 600 000 Olympic sized swimming pools. All this wasted food ends up in landfills whereas the food rot they produce greenhouse gases that affect the environment.

					</Text>
				</View>
				<View style={styles.info}>

					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/Carbohydrates.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						Food waste is the prominent items to end up in landfills which then get incinerated (burned).
						Wasted food therefore poots a lot of strain on natural resources like water, land, labour and energy.
						Consumers food waste patterns is at least 8 times more costly than those of farms.
						<Text>
							{"\n"}
						</Text>

						<Text style={{ fontWeight: 'bold' }}>
						<Text>
							{"\n"}
						</Text>

							Consumers do not necessarily see food waste as a problem for them to solve:

						</Text>


					</Text>

					<Text style={styles.graytext}>
						1)	When eating out, you pay for the food, so you assume all other responsibilities are not your problem.{"\n"}
						2)	Younger generations are more concerned about food waste as they are generally more worried about the effects on the environment.{"\n"}
						
						<Text style={{ fontWeight: 'bold' }}>Money is a motivator:{"\n"}</Text>
						
						1) People will think about preventing food waste only if its of benefit to them.{"\n"}
						2) If there is a way that money will be saved, then food waste will try to be avoided.{"\n"}
						<Text style={{ fontWeight: 'bold' }}>
						 Food waste is an economic issue.{"\n"}

						</Text>
						
						1) Money used to dispose of food waste comes directly for consumers through tax.{"\n"}
						2) The less food wasted; the less money is spent on trying to treat the waste.{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Food waste is a social issue.{"\n"}</Text>
						1) Billions go hungry each day without access to food.{"\n"}
						2) There is enough food being produced, it is simply being improperly handled or carelessly wasted.{"\n"}


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
