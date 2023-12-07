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
import Startquize from '../components/startquiz';
import Feather from '@expo/vector-icons/Feather';
import * as Speech from 'expo-speech';

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

const Prevention = ({ navigation }) => {
	let isMounted = useMountedState();
	const [refreshing, setRefreshing] = useState(false);
	const [speech, setSpeech] = useState({
		inProgress: false,
		paused: false,
		rate: 0.75,
	});

	const whatToSay = `	
	Food waste prevention methods

•	In most instances prevention is better than cure, therefore careful planning is the best way to minimise food waste.
•	Look at the ingredients in your fridge and pantry and create menu items
•	Plan what you will need to purchase at the grocery store, draw up a list.
•	Don’t go to the grocery store when you are hungry as this could lead to impulse buying.
•	Shop small.
o	If possible, avoid bulk buying and rather make smaller purchases and more often trips to the grocery store.
•	Use up what is in the fridge first.
o	Before you go buy more food, look at what you already have in the fridge first.
o	Follow the concept of FIFO (First in First out) and use the food you bought first (oldest date) before buying or using newly bought food.
•	Buy the item not the deal!
o	Only by what you need, you do not need 3 punnets of sweetcorn. Don’t give into the sale price.
o	Only buy items that you know will be eaten, if no one eats it, don’t buy it just because it’s on sale.
•	Accurate reading of food labels will prevent unnecessary wastage of food. Except for baby formula, most labels don’t refer to the safety of the food, but rather when the foods are at their freshest and taste the best. Common food labels: 
o	Sell-by: food is still fresh if bought before that date.
o	Best before: the food is freshest if eaten before that date.
o	Use-by: company’s guarantee of freshness by that date.
•	Most food are still good to eat for weeks after these label dates, even dairy products can last 5-7 days after.
•	Keep the pantry stocked with essentials.
o	Have staples like canned beans and fish and grains such as rice, mealie meal, pasta etc.
o	This way when you buy fresh foods you already have the staples as a base.
•	Cook only enough.
o	If you plan to cook for 2 days, make sure the food will be just enough for the number of days and will be eaten.
•	Make use of the freezer
o	Frozen foods are just as nutritious as fresh ones.
o	If you happened to by the sale and not the item, freeze the extra food so it doesn’t go to waste.
o	Frozen foods help extend the shelf life of food items.
o	Cook and freeze foods before they go bad, especially produce (fruits and vegetables)
•	Be creative with leftovers!
o	Even if you cook food for more than one day, you don’t have to eat it the exact same way.
•	Change up food preparation methods.
o	Blend, bake or boil your wilting or discoloured fruit and vegetables.
o	You can turn imperfect produce that as started to brown into soups/stocks or smoothies and preserves like jam or a pickle.
•	Donate leftover or extra food.
o	Don’t allow for you leftovers to end up in the rubbish.
o	See if there are soup kitchens nearby or organizations to take food that is slightly imperfect.
•	When eating out ask for takeaways
o	Do not leave your leftovers at the restaurant, take them home with you.
o	Even if not eaten, add these to your compost to avoid them ending up in landfills.
•	It is recommended to not wash fruits and vegetables before storing.
o	Washing the produce increases their moisture, which can lead to them going bad faster.
o	If you must though, make sure to dry the food thoroughly.
•	Not all produce should be stored in the fridge.
o	Avocados, bananas, tomatoes, potatoes, eggplant, and onions should be stored at room temperature.
•	Some produce should be left in their original packaging.
o	Apples, cauliflower and broccoli, grapes and carrots should be left in their original packaging and placed in the fridge.
•	As a rule, avoid storing fruits and vegetables together as fruits are mostly ethylene-producing and vegetables are generally ethylene-sensitive.
o	Ethylene gas is a natural hormone found in produce that helps with ripening.

	`;


	const speak = () => {
		const start = () => {
			setSpeech({ ...speech, inProgress: true });
		};
		const complete = () => {
			speech.inProgress &&
				setSpeech({ ...speech, inProgress: false, paused: false });
		};

		Speech.speak(whatToSay, {
			language: 'en',
			rate: speech.rate,
			onStart: start,
			onDone: complete,
			onStopped: complete,
			onError: complete,
		});
	};

	const stop = () => {
		Speech.stop();
		setSpeech({ ...speech, inProgress: false });
	};

	const increaseRate = () => {
		setSpeech({
			...speech,
			rate: speech.rate + 0.1,
		});
	};

	const decreaseRate = () => {
		setSpeech({
			...speech,
			rate: speech.rate - 0.1,
		});
	};

	const onRefresh = () => {
		setRefreshing(true);
		setRefreshing(false);
	};

	useEffect(() => {
		return () => {
			Speech.stop();
		};
	}, [isMounted]);

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
				<Text style={styles.bold}>
					Food waste prevention methods
				</Text>

				<View style={styles.flexBtn}>
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
				</View>

				<View style={styles.imagecontainer}>
					<Image
						source={require('../../assets/Prevention.jpg')}
						style={styles.image}
					/>
				</View>
				<View style={styles.info}>

					<Text style={styles.graytext}>
						In most instances prevention is better than cure, therefore careful planning is the best way to minimise food waste.{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Look at the ingredients in your fridge and pantry and create menu items{"\n"}</Text>
						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Plan what you will need to purchase at the grocery store, draw up a list.{"\n"}</Text>
						{' '}{"\n"}


						<Text style={{ fontWeight: 'bold' }}>Don’t go to the grocery store when you are hungry as this could lead to impulse buying.{"\n"}</Text>


						{' '}{"\n"}
						<Text style={{ fontWeight: 'bold' }}>Don’t go to the grocery store when you are hungry as this could lead to impulse buying.{"\n"}</Text>
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Shop small.{"\n"}</Text>
						{' '}1) If possible, avoid bulk buying and rather make smaller purchases and more often trips to the grocery store.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Use up what is in the fridge first.{"\n"}</Text>
						{' '}1) Before you go buy more food, look at what you already have in the fridge first.{"\n"}
						{' '}2) Follow the concept of FIFO (First in First out) and use the food you bought first (oldest date) before buying or using newly bought food.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Buy the item not the deal!{"\n"}</Text>
						{' '}1) Only by what you need, you do not need 3 punnets of sweetcorn. Don’t give into the sale price.{"\n"}
						{' '}2) Only buy items that you know will be eaten, if no one eats it, don’t buy it just because it’s on sale.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Accurate reading of food labels will prevent unnecessary wastage of food. Except for baby formula, most labels don’t refer to the safety of the food, but rather when the foods are at their freshest and taste the best. Common food labels:{"\n"}</Text>
						{' '}1) Sell-by: food is still fresh if bought before that date.{"\n"}
						{' '}2) Best before: the food is freshest if eaten before that date.{"\n"}
						{' '}3) Use-by: company’s guarantee of freshness by that date.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Most food are still good to eat for weeks after these label dates, even dairy products can last 5-7 days after.{"\n"}</Text>


						<Text style={{ fontWeight: 'bold' }}>Keep the pantry stocked with essentials.{"\n"}</Text>
						{' '}1) Have staples like canned beans and fish and grains such as rice, mealie meal, pasta etc.{"\n"}
						{' '}2) This way when you buy fresh foods you already have the staples as a base.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Cook only enough.{"\n"}</Text>
						{' '}1) If you plan to cook for 2 days, make sure the food will be just enough for the number of days and will be eaten.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Make use of the freezer{"\n"}</Text>
						{' '}1) Frozen foods are just as nutritious as fresh ones.{"\n"}
						{' '}2) If you happened to by the sale and not the item, freeze the extra food so it doesn’t go to waste.{"\n"}
						{' '}3) Frozen foods help extend the shelf life of food items.{"\n"}
						{' '}4) Cook and freeze foods before they go bad, especially produce (fruits and vegetables){"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>	Be creative with leftovers!{"\n"}</Text>
						{' '}1) Even if you cook food for more than one day, you don’t have to eat it the exact same way.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Change up food preparation methods.{"\n"}</Text>
						{' '}1) Blend, bake or boil your wilting or discoloured fruit and vegetables.{"\n"}
						{' '}2) You can turn imperfect produce that as started to brown into soups/stocks or smoothies and preserves like jam or a pickle.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Donate leftover or extra food.{"\n"}</Text>
						{' '}1) Don’t allow for you leftovers to end up in the rubbish.{"\n"}
						{' '}2) See if there are soup kitchens nearby or organizations to take food that is slightly imperfect.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>When eating out ask for takeaways{"\n"}</Text>
						{' '}1) Do not leave your leftovers at the restaurant, take them home with you.{"\n"}
						{' '}2) Even if not eaten, add these to your compost to avoid them ending up in landfills.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>It is recommended to not wash fruits and vegetables before storing.{"\n"}</Text>
						{' '}1) Washing the produce increases their moisture, which can lead to them going bad faster.{"\n"}
						{' '}2) If you must though, make sure to dry the food thoroughly.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Not all produce should be stored in the fridge.{"\n"}</Text>
						{' '}1) Avocados, bananas, tomatoes, potatoes, eggplant, and onions should be stored at room temperature.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>Some produce should be left in their original packaging.{"\n"}</Text>
						{' '}1) Apples, cauliflower and broccoli, grapes and carrots should be left in their original packaging and placed in the fridge.{"\n"}
						{' '}{"\n"}

						<Text style={{ fontWeight: 'bold' }}>As a rule, avoid storing fruits and vegetables together as fruits are mostly ethylene-producing and vegetables are generally ethylene-sensitive.{"\n"}</Text>
						{' '}1) Ethylene gas is a natural hormone found in produce that helps with ripening.{"\n"}

					</Text>
				</View>

				<Startquize title='Take a quiz' onPress={() => navigation.navigate('Fourthquiz')} />
				<Text>
					{"\n"}
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Prevention;

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
