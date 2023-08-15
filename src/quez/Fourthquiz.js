import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
import FeatherIcons from '@expo/vector-icons/Feather';
import { AuthProvider } from '../navigation/AuthProvider';
import Button from '../components/Button';
import Loading from '../components/loading';
import DropDown from '../components/DropDown';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: 'AIzaSyB5VMVtl6wjKh5ttFuOgV5SqedFJ1-K2JU',
    authDomain: 'foodwastage-a02af.firebaseapp.com',
    projectId: 'foodwastage-a02af',
    storageBucket: 'foodwastage-a02af.appspot.com',
    messagingSenderId: '232726174827',
    appId: '1:232726174827:web:0f00263b9547c06cc6a52e',
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}



const getAllData = async () => {
    try {
        const snapshot = await firebase.firestore().collection('YourCollection').get();
        const data = [];

        snapshot.forEach(doc => {
            // Extract the document data and add it to the array
            data.push(doc.data());
        });

        // Return the array containing all the documents
        return data;
    } catch (error) {
        console.error('Error getting documents:', error);
        return [];
    }
};

// Usage example
getAllData()
    .then(data => {
        // Do something with the retrieved data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred
        console.error(error);
    });


const SignUpScreen = ({ navigation }) => {
    // const { register, loading } = useContext(AuthProvider);
    console.log('Regionald Mongwe')
    firebase
    const [secure, setSecure] = useState(true);
    const [focus, setFocus] = useState(false);
    const [errors, setErrors] = useState({});
    const [province, setProvince] = useState('-- Select Province --');
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const onSignUp = () => {
        const error = validateInput();

        if (Object.keys(error).length === 0) {
            register(values.name, values.email, values.password, province);
        } else {
            setErrors(error);
        }
    };

    const validateInput = () => {
        let errors = {};
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Invalid Email';
        }

        if (!province || province === '-- Select Province --') {
            errors.province = 'Province is required';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        if (values.password.length < 8) {
            errors.passwordLength = 'Password must be at least 8 characters';
        }

        if (!values.password.match(lowerCaseLetters)) {
            errors.passwordLowerCase =
                'Password must contain at least one lowercase letter';
        }

        if (!values.password.match(upperCaseLetters)) {
            errors.passwordUpperCase =
                'Password must contain at least one uppercase letter';
        }

        if (!values.password.match(numbers)) {
            errors.passwordNumber = 'Password must contain at least one number';
        }

        return errors;
    };

    useEffect(() => {
        setErrors({});
    }, [values]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar
                        statusbarStyle='light-content'
                        backgroundColor={Colors.Primary}
                    />

                    <Text style={styles.subTitle}>Food waste prevention methods Quiz</Text>

                    <View>
                        <DropDown
                            label={'1.	All foods should be stored in their original packaging.'}
                            options={[
                                {
                                    title: 'A.	True',
                                },
                                {
                                    title: 'B.	False',
                                },
                            ]}
                            selected={(e) => setProvince(e)}
                            value={province}
                        />
                        {errors.province && (
                            <Text style={styles.error}>{errors.province}</Text>
                        )}
                    </View>
                    <View>
                        <DropDown
                            label={'2.	Freezers are not as good as fridges.'}
                            options={[
                                {
                                    title: 'A. True',
                                },
                                {
                                    title: 'B. False',
                                },
                            ]}
                            selected={(e) => setProvince(e)}
                            value={province}
                        />
                        {errors.province && (
                            <Text style={styles.error}>{errors.province}</Text>
                        )}
                    </View>
                    <View>
                        <DropDown
                            label={'3.	A place where food is given to people who don’t have enough.'}
                            options={[
                                {
                                    title: 'A.	Landfill',
                                },
                                {
                                    title: 'B.	Rubbish',
                                },
                                {
                                    title: 'C. Soup Kitchen',
                                },
                                {
                                    title: 'D.	Supermarket',
                                },
                            ]}
                            selected={(e) => setProvince(e)}
                            value={province}
                        />
                        {errors.province && (
                            <Text style={styles.error}>{errors.province}</Text>
                        )}
                    </View>
                    <View>
                        <DropDown
                            label={'4.	FIFO means.'}
                            options={[
                                {
                                    title: 'A.	First Inventory Find Out',
                                },
                                {
                                    title: 'B.	First Out First In',
                                },
                                {
                                    title: 'C.	First Invite First Out',
                                },
                                {
                                    title: 'D.	First In First Out',
                                },
                            ]}
                            selected={(e) => setProvince(e)}
                            value={province}
                        />
                        {errors.province && (
                            <Text style={styles.error}>{errors.province}</Text>
                        )}
                    </View>
                    <View>
                        <DropDown
                            label={'5.	The amount of food you prepare doesn’t matter.'}
                            options={[
                                {
                                    title: 'A. True',
                                },
                                {
                                    title: 'B. False',
                                },
                            ]}
                            selected={(e) => setProvince(e)}
                            value={province}
                        />
                        {errors.province && (
                            <Text style={styles.error}>{errors.province}</Text>
                        )}
                    </View>
                    <Button title='Submit' />
                     



                </View>
                {/* <Loading loading={loading} /> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        height: windowHeight,
    },
    subText: {
        fontSize: 30,
        fontFamily: Fonts.Bold,
        color: Colors.Primary,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    Title: {
        marginTop: 15,
        fontFamily: Fonts.Bold,
        fontSize: 20,
        color: Colors.Primary,
        textAlign: 'center',
        width: windowWidth * 0.9,
    },
    subTitle: {
        fontFamily: Fonts.Regular,
        fontSize: 14,
        color: Colors.Dark,
        textAlign: 'center',
        width: windowWidth * 0.9,
        marginBottom: 20,
    },
    label: {
        fontFamily: Fonts.Semibold,
        fontSize: 14,
        color: Colors.Primary,
        marginLeft: 10,
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 0,
        marginBottom: 5,
        width: windowWidth - 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderColor: Colors.Primary,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: Fonts.Regular,
        color: Colors.Dark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotText: {
        marginTop: 5,
        alignSelf: 'flex-end',
    },
    infoText: {
        fontSize: 14,
        color: Colors.Dark,
        fontFamily: Fonts.Regular,
    },
    swicthPage: {
        marginTop: 10,
    },
    termsTextContainer: {
        marginTop: 20,
        width: windowWidth * 0.9,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    termsText: {
        fontSize: 14,
        color: Colors.Dark,
        fontFamily: Fonts.Semibold,
    },
    error: {
        color: 'red',
        fontSize: 12,
        fontFamily: Fonts.Regular,
        marginLeft: 20,
    },
});
