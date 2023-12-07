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

const Nutrition = ({ navigation }) => {
	let isMounted = useMountedState();
	const [refreshing, setRefreshing] = useState(false);
	const [speech, setSpeech] = useState({
		inProgress: false,
		paused: false,
		rate: 0.75,
	});

	const whatToSay=`Food waste on the environment
	•	When food is wasted it also affects the land, water, labour energy and other factors that were used in its production, processing, transporting, preparing, storing and disposal.
	•	Food waste and food loss heightens the climate crisis with the production of greenhouse gases (GHG) 
	o	Greenhouse gases are gases that sit in the Earth’s atmosphere and create a layer like a “blanket”.
	o	These gases are needed to maintain the Earth’s temperature. 
	o	But because of humans, this layer has gotten thicker which makes the Earth a lot warmer.
	o	The more greenhouse gases the thicker the “blanket” gets, the thicker the blanket, the warmer the Earth becomes.
	•	GHG’s are dangerous in large amounts because the thick blanket makes the Earth warmer and warmer which starts to change the natural weather patterns. 
	•	This is known as global warming.
	o	The increased rising of the Earth’s temperature.
	•	The production, transportation and handling of food generates a large amount of Carbon dioxide (CO2) 
	o	CO2 is a greenhouse gas produced by natural processes such as breathing of plants and animals.
	o	Human activities like burning coal and cutting down large amounts of trees has increased the amount of CO2 the atmosphere can manage.
	•	When thrown away food ends up in landfills it leads to methane gas being produced which is an even deadlier greenhouse gas which has terrible negative effects on global warming and environment
	o	Methane gas is another greenhouse gas that occurs naturally when things rot
	o	Human activities like cattle farming and landfills have increased the balance of methane in the atmosphere.
	o	Methane gas is a lot heavier the CO2 so the “blanket” it makes in the atmosphere is a lot thicker
	o	The effects of methane gas on the environment leads to global warming which cause drastic and rapid climate changes.
	•	Landfills are breading sites for methane gas because all the food is piled on top of each other and doesn’t have oxygen to rot properly.
	•	Landfills are huge rubbish sites where most of the worlds waste products end up.
	•	In the case of food waste most of our wasted food ends up on landfills instead of being properly managed such as composted
	•	When food is composted, it is done so with oxygen, so the food is allowed to rot more openly which is better for the environment.
	•	There is a clear connection between food waste and climate change. 
	o	The more we waste, the more natural resources are used up.
	o	The more we waste the more food that ends up in landfills.
	o	The more food in landfills, the more methane gas produced.
	o	The more methane gas in the environment, the thicker the “blanket”.
	o	The thicker the blanket the greater impact it has on the climate and global warming.
	o	The more drastic the weather changes are, the more food is poorly harvested and more wasted.
	o	Then the cycle repeats.
	•	Wasted food uses up large amounts of freshwater with up to 25% in some cases and is a leading cause of water pollution.
	•	If food waste were to be reduced about 6%-8% of all GHG caused by people would be reduced.
	•	The more the worlds population grows, the more we need to think about how to waste less food.
	•	As it stands there is enough food being produced to feed every person, so we need to look at how to better use the food already produced and reduce food insecurity.
	`


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
				<Text style={styles.heading}>Learn more about Food waste on the environment  </Text>

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

				<View style={styles.info}>
				
					<Text style={styles.heading}>When food is wasted it also affects the land, water,
						labour energy and other factors that were used in its production, processing, transporting,
						preparing, storing and disposal.</Text>
					<Text>
						{"\n"}
					</Text>

					<Text style={styles.graytext}>
						Food waste and food loss heightens the climate crisis with the production of greenhouse gases (GHG)
					</Text>
					<Text style={styles.graytext}>

					{' '}1) Greenhouse gases are gases that sit in the Earth’s atmosphere and create a layer like a “blanket”.{"\n"}
					{' '}2) These gases are needed to maintain the Earth’s temperature. {"\n"}
					{' '}3) But because of humans, this layer has gotten thicker which makes the Earth a lot warmer.{"\n"}
					{' '}4) The more greenhouse gases the thicker the “blanket” gets, the thicker the blanket, the warmer the Earth becomes.{"\n"}
					</Text>


				</View>
				<View style={styles.info}>
					<Text style={styles.graytext}>
						GHG’s are dangerous in large amounts because the thick blanket makes the Earth warmer and warmer which starts to change the natural weather patterns.
						This is known as global warming.
						The increased rising of the Earth’s temperature.

					</Text>
				</View>
				<View style={styles.info}>

					<Text style={styles.graytext}>
						The production, transportation and handling of food generates a large amount of Carbon dioxide (CO2)
					</Text>
					<Text style={styles.graytext}>

					{' '}1) CO2 is a greenhouse gas produced by natural processes such as breathing of plants and animals.{"\n"}
					{' '}2) Human activities like burning coal and cutting down large amounts of trees has increased the amount of CO2 the atmosphere can manage. {"\n"}
					</Text>
				</View>


				<View style={styles.info}>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/compost.jpg')}
							style={styles.image}
						/>
					</View>
				</View>

				<View style={styles.info}>



					<Text style={styles.graytext}>
						When thrown away food ends up in landfills it leads to methane gas being produced
						which is an even deadlier greenhouse gas which has terrible negative effects on global warming and environment
					</Text>
					<Text style={styles.graytext}>

					{' '}1) Methane gas is another greenhouse gas that occurs naturally when things rot.{"\n"}
					{' '}2) Human activities like cattle farming and landfills have increased the balance of methane in the atmosphere. {"\n"}
					{' '}3) Methane gas is a lot heavier the CO2 so the “blanket” it makes in the atmosphere is a lot thicker.{"\n"}
					{' '}4) The effects of methane gas on the environment leads to global warming which cause drastic and rapid climate changes.{"\n"}
					</Text>


				</View>

				<View style={styles.info}>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/pexels.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						Landfills are breading sites for methane gas because all the food is piled on top of each other and doesn’t have oxygen to rot properly.
						Landfills are huge rubbish sites where most of the worlds waste products end up.
						In the case of food waste most of our wasted food ends up on landfills instead of being properly managed such as composted

					</Text>
				</View>

				<View style={styles.info}>
					<View style={styles.imagecontainer}>
						<Image
							source={require('../../assets/pexe.jpg')}
							style={styles.image}
						/>
					</View>
					<Text style={styles.graytext}>
						When food is composted, it is done so with oxygen, so the food is allowed to rot more openly which is better for the environment.
						There is a clear connection between food waste and climate change.

					</Text>
					<Text style={styles.graytext}>

						{' '}1) The more we waste, the more natural resources are used up..{"\n"}
						{' '}2) The more we waste the more food that ends up in landfills. {"\n"}
						{' '}3) The more food in landfills, the more methane gas produced.{"\n"}
						{' '}4) The more methane gas in the environment, the thicker the “blanket”.{"\n"}
						{' '}5) The thicker the blanket the greater impact it has on the climate and global warming.{"\n"}
						{' '}6) The more drastic the weather changes are, the more food is poorly harvested and more wasted.{"\n"}
						{' '}7) Then the cycle repeats.{"\n"}
					</Text>

				</View>

				<View style={styles.info}>
					<Text style={styles.heading}>Wasted food uses up large amounts of freshwater with up to 25% in some cases and is a leading cause of water pollution.
						If food waste were to be reduced about 6%-8% of all GHG caused by people would be reduced.
					</Text>
					<Text style={styles.graytext}>
						The more the worlds population grows, the more we need to think about how to waste less food.
						As it stands there is enough food being produced to feed every person, so we need to look at how to better use the food already produced and reduce food insecurity.

					</Text>
				</View>
				<Startquize title='Take a quiz' onPress={() => navigation.navigate('Thirdquiz')} />
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
