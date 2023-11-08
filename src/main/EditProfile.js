import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useContext,
} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	StatusBar,
	RefreshControl,
} from 'react-native';
import firebase from 'firebase';
import { AuthContext } from '../../navigation/AuthProvider';
import { Colors, windowWidth } from '../../utils/util';
import LabelInput from '../../components/LabelInput';
import Loading from '../../components/Loading';
import Initial from '../../components/Initial';
import CustomAlert from '../../components/CustomAlert';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';

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

const EditProfile = ({ navigation }) => {
	let isMounted = useMountedState();
	const { user, userData, setUpdated } = useContext(AuthContext);
	const [name, setName] = useState(userData?.Name);
	const [email, setEmail] = useState(userData?.Email);
	const [province, setProvince] = useState(userData?.Location);
	const [newEmail, setNewEmail] = useState(userData?.Email);
	const [loading, setLoading] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [alert, setAlert] = useState({
		status: '',
		title: '',
		visible: false,
	});

	const onRefresh = () => {
		setRefreshing(true);
		setRefreshing(false);
	};

	const updateData = async () => {
		if (name !== '' && email !== '' && newEmail !== '' && province !== '') {
			if (isMounted()) setLoading(true);
			try {
				if (newEmail !== email) {
					const user = firebase.auth().currentUser;

					user
						.updateEmail(newEmail)
						.then(() => {
							setEmail(newEmail);
						})
						.catch((error) => {
							if (isMounted()) setLoading(false);
							setAlert({
								status: 'error',
								title: error.message,
								visible: true,
							});
						});
				}

				saveInfo();
			} catch (error) {
				if (isMounted())
					setAlert({
						status: 'error',
						title: error.message,
						visible: true,
					});
			}
		} else {
			if (isMounted())
				setAlert({
					status: 'error',
					title: 'Please fill all the fields',
					visible: true,
				});
		}
	};

	const saveInfo = () => {
		try {
			firebase
				.firestore()
				.collection('Users')
				.doc(user.uid)
				.set(
					{
						Name: name,
						Email: email === newEmail ? email : newEmail,
						Location: province,
						Updated: user.uid,
						UpdatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
					},
					{ merge: true }
				)
				.then(() => {
					if (isMounted()) {
						setName('');
						setEmail('');
						setProvince('-- Select Province --');
						setLoading(false);
						setAlert({
							status: 'success',
							title: 'Info successfully updated',
							visible: true,
						});
						setUpdated(true);
						navigation.popToTop();
					}
				});
		} catch (error) {
			if (isMounted())
				setAlert({
					status: 'error',
					title: error.message,
					visible: true,
				});
		}
	};

	const onInitialMaker = (text) => {
		try {
			if (text !== undefined) {
				text = text.trim();
				let myString = text.split(' ');
				let firstName = myString[0];
				let lastName = myString[1];

				let initials = firstName.substring(0, 1) + lastName.substring(0, 1);
				return initials;
			} else {
				return 'NA';
			}
		} catch (error) {
			return text.substring(0, 1);
		}
	};

	useEffect(() => {
		if (isMounted()) {
			setEmail(newEmail);
		}
	}, [newEmail]);

	return (
		<SafeAreaView>
			<StatusBar statusbarStyle='light-content' backgroundColor={Colors.dark} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				nestedScrollEnabled={true}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: Colors.white,
					paddingTop: 5,
					width: windowWidth,
				}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={[Colors.Primary, Colors.Secondary, Colors.Dark]}
					/>
				}
			>
				<Initial initial={onInitialMaker(userData?.Name)} />
				<LabelInput
					label={'Full Name *'}
					onChangeText={(e) => setName(e)}
					placeholder={'John Doe'}
					keyboard={'default'}
					value={name}
				/>

				<LabelInput
					label={'Email **'}
					onChangeText={(e) => setNewEmail(e)}
					placeholder={'johndoe@gmail.com'}
					keyboard={'email-address'}
					value={newEmail !== '' ? newEmail : email}
				/>

				<DropDown
					label={'Province'}
					options={[
						{
							title: 'Gauteng',
						},
						{
							title: 'Limpopo',
						},
						{
							title: 'Mpumalanga',
						},
						{
							title: 'North West',
						},
						{
							title: 'Free State',
						},
						{
							title: 'KwaZulu-Natal',
						},
						{
							title: 'Eastern Cape',
						},
						{
							title: 'Western Cape',
						},
						{
							title: 'Northern Cape',
						},
					]}
					selected={(e) => setProvince(e)}
					value={province}
				/>

				<Button title={'Update'} onPress={() => updateData()} />
				<Loading loading={loading} />
				<CustomAlert
					visible={alert.visible}
					status={alert.status}
					title={alert.title}
					onClose={() => setAlert({ ...alert, visible: false })}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default EditProfile;

const styles = StyleSheet.create({});
