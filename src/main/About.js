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
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
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

const About = () => {
	let isMounted = useMountedState();
	const [refreshing, setRefreshing] = useState(false);
	const [speech, setSpeech] = useState({
		inProgress: false,
		paused: false,
		rate: 0.75,
	});

	const whatToSay = `	
	The Food Evolution Research Laboratory established its presence through an increased demand and aspirations towards
	enhancing the lifestyles of all people and communities who align themselves towards nutrition and health through active research studies.
	The lab concept will contribute to enhanced understanding and awareness, associated with the change in eating patterns with food away from homes,
	movement from indigenous diets to Westernised diets and now the combination of these with the emphasis of good health and nutrition.`;

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
				
			>
				<Text style={styles.bold}>About FERL.</Text>
				<Text style={styles.heading}>1 Minutes read</Text>

				<View style={styles.info}>
					<Text style={styles.heading}></Text>
					<Text style={styles.graytext}>
						The Food Evolution Research Laboratory established its presence
						through an increased demand and aspirations towards enhancing the
						lifestyles of all people and communities who align themselves
						towards nutrition and health through active research studies. The
						lab concept will contribute to enhanced understanding and awareness,
						associated with the change in eating patterns with food away from
						homes, movement from indigenous diets to Westernised diets and now
						the combination of these with the emphasis of good health and
						nutrition.
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default About;

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
		height: windowHeight / 2,
		overflow: 'hidden',
		borderRadius: 10,
		borderTopRightRadius: 50,
		borderBottomLeftRadius: 50,
		borderWidth: 2,
		borderColor: Colors.Primary,
		marginVertical: 5,
		backgroundColor: '#fff',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
});
