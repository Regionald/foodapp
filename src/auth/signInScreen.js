import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';
import { windowWidth, Colors, Fonts, windowHeight } from '../../utils/util';
import FeatherIcons from '@expo/vector-icons/Feather';
import { AuthContext } from '../navigation/AuthProvider';
import Button from '../components/Button';
import Loading from '../components/loading';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [focus, setFocus] = useState(false);
    // const { loading } = useContext(AuthContext);

    const onLogin = () => {
        if (email !== '' && password !== '') {
            // login(email, password);
            console.log('yah neh');
        }

    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar
                        statusbarStyle='default'
                        backgroundColor={Colors.Primary}
                    />
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/Logo.png')}
                            style={styles.logo}
                        />
                    </View>
                    <Text style={styles.Title}> Welcome Back.</Text>

                    <View>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(email) => setEmail(email)}
                                numberOfLines={1}
                                maxLength={50}
                                placeholder='Email'
                                placeholderTextColor={Colors.gray}
                                keyboardType='email-address'
                                autoCapitilize='none'
                                autoCorrect={false}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(password) => setPassword(password)}
                                numberOfLines={1}
                                maxLength={20}
                                placeholderTextColor={Colors.gray}
                                placeholder='Password'
                                secureTextEntry={secure}
                                setFocus={focus}
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                            />
                            <FeatherIcons
                                style={{ paddingRight: 15 }}
                                name={secure ? 'eye' : 'eye-off'}
                                size={20}
                                color={Colors.Primary}
                                onPress={() => setSecure(!secure)}
                            />
                        </View>
                    </View>
                    <View style={styles.flex}>
                        <TouchableOpacity>
                            <Text style={styles.text}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Password')}>
                            <Text style={styles.text}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <Button title={'Sign In'} onPress={() => onLogin()} />

                    <View style={styles.line} />

                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.text}>
                            Don't have an account?{' '}
                            <Text
                                style={[
                                    styles.text,
                                    { color: Colors.Dark, fontFamily: Fonts.Semibold },
                                ]}
                            >
                                Sign Up
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <Loading loading={loading} /> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        height: windowHeight,
    },
    imageContainer: {
        marginTop: windowHeight / 20,
        overflow: 'hidden',
        borderRadius: 10,
        height: windowHeight / 6,
        width: windowHeight / 6,
    },
    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    header: {
        marginTop: windowHeight / 20,
        padding: 20,
    },

    Title: {
        marginTop: 20,
        fontFamily: Fonts.Bold,
        fontSize: 20,
        color: Colors.Primary,
        textAlign: 'center',
        width: windowWidth * 0.9,
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
    flex: {
        width: windowWidth * 0.94,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontFamily: Fonts.Regular,
        color: Colors.Primary,
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    line: {
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        width: windowWidth - 30,
        marginTop: 30,
        marginBottom: 20,
    },
});
