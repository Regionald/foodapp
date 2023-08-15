import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
import { AuthContext } from '../../navigation/AuthProvider';
import Loading from '../../components/Loading';

const Quiz = ({ navigation }) => {
    const { userData, loading } = useContext(AuthContext);
    const [msg, setMsg] = useState('');



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar
                        statusbarStyle='default'
                        backgroundColor={Colors.Secondary}
                    />
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                            <View style={styles.option_bottom}>
                                <Text style={styles.title2}>Take A Quiz</Text>
                                <View style={styles.bottomOptionContent}>
                                    <View style={styles.imageIcon}>
                                        <Image
                                            source={require('../../assets/images/quiz.png')}
                                            style={styles.flatIcon}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Loading loading={loading} />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: windowWidth - 20,
        borderWidth: 1,
        borderColor: Colors.Secondary,
        borderRadius: 10,
    },
    headerContent: {
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontFamily: Fonts.Semibold,
        color: Colors.Primary,
        width: windowWidth / 1.5,
    },
    text: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.Primary,
        width: windowWidth / 1.5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.Primary,
        backgroundColor: Colors.Tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    initials: {
        fontSize: 16,
        color: Colors.Light,
        fontFamily: Fonts.Bold,
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: windowWidth - 20,
        marginVertical: 5,
    },
    bodyrow: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
    },
    option: {
        height: windowHeight / 2.5,
        borderWidth: 1,
        borderColor: Colors.Secondary,
        borderRadius: 10,
        margin: 5,
        backgroundColor: Colors.Secondary,
        width: windowWidth / 2.2,
        padding: 10,
        marginVertical: 3,
        overflow: 'hidden',
    },
    option_md: {
        height: windowHeight / 4.3,
        borderWidth: 1,
        borderColor: Colors.Secondary,
        borderRadius: 10,
        margin: 5,
        backgroundColor: Colors.Tertiary,
        width: windowWidth / 2.2,
        padding: 10,
        marginVertical: 3,
        overflow: 'hidden',
    },
    option_sm: {
        height: windowHeight / 3.5,
        borderWidth: 1,
        borderColor: Colors.Secondary,
        borderRadius: 10,
        margin: 5,
        backgroundColor: Colors.Tertiary,
        width: windowWidth / 2.2,
        padding: 10,
        marginVertical: 3,
        overflow: 'hidden',
    },
    option_xs: {
        height: windowHeight / 4.5,
        borderWidth: 1,
        borderColor: Colors.Secondary,
        borderRadius: 10,
        margin: 5,
        backgroundColor: Colors.Secondary,
        width: windowWidth / 2.2,
        padding: 10,
        marginVertical: 3,
        overflow: 'hidden',
    },
    title: {
        height: '20%',
        fontSize: 14,
        fontFamily: Fonts.Semibold,
        color: Colors.Light,
        textAlign: 'center',
        zIndex: 2,
        backgroundColor: Colors.Secondary,
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
    optionContent: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        zIndex: 1,
    },
    imageIcon: {
        width: windowWidth / 5.1,
        height: windowWidth / 5.1,
        overflow: 'hidden',
    },
    flatIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
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
    bottomOptionContent: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
});
