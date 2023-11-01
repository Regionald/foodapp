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
    Alert,
} from 'react-native';
import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';
import FeatherIcons from '@expo/vector-icons/Feather';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../auth/AuthProvider';



const Quiz = ({ navigation }) => {

    const {update_quiz}=useContext(AuthContext);


    const [question_1, setQuestion_1] = useState('1. No response');
    const [question_2, setQuestion_2] = useState('1. No response');
    const [question_3, setQuestion_3] = useState('1. No response');
    const [question_4, setQuestion_4] = useState('1. No response');
    const [question_5, setQuestion_5] = useState('1. No response');
    const [question_6, setQuestion_6] = useState('1. No response');


    function Clean_responce(response) {
        response = response.split('.');
        return response[1].trim();
    };

    function Mark() {

        const responses = [question_1, question_2, question_3, question_4, question_5, question_6];
        console.log(responses);
        var score = 0;
        const memo = [{ 'Question': 'Question_1', 'responce': question_1, 'correct_answer': 'Fruits and vegetables' },
        { 'Question': 'Question_2', 'responce': question_2, 'correct_answer': 'False' },
        { 'Question': 'Question_3', 'responce': question_3, 'correct_answer': 'False' },
        { 'Question': 'Question_4', 'responce': question_4, 'correct_answer': 'Surplus' },
        { 'Question': 'Question_5', 'responce': question_5, 'correct_answer': 'False' },
        { 'Question': 'Question_6', 'responce': question_6, 'correct_answer': 'False' }]

        for (let i = 0; i < memo.length; i++) {

            var response = Clean_responce(memo[i].responce);
            if (memo[i].correct_answer == response) {

                score = score + 1;
            }
        };

        score = ((score / memo.length) * 100).toFixed(2);

        update_quiz('Causes',memo,score);
        if (score <= 80) {




            Alert.alert('Score Board', `You got ${score} %`, [
                {
                    text: 'Cancel',
                    onPress: () => navigation.navigate('Causes'),
                    style: 'cancel',
                },
                { text: 'Re-try', onPress: () => console.log('OK Pressed') },
            ])
        }
        else {
            navigation.navigate('Game1');
        }

    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Light }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar
                        statusbarStyle='light-content'
                        backgroundColor={Colors.Primary}
                    />

                    <Text style={styles.subTitle}>Causes of FoodWaste Quiz</Text>

                    <View>
                        <DropDown
                            label={'1. What is the most wasted food item?'}
                            options={[
                                {
                                    title: 'A. Dairy',
                                },
                                {
                                    title: 'B. Grains',
                                },
                                {
                                    title: 'C. Fruits and vegetables',
                                },
                                {
                                    title: 'D. Protein',
                                },
                            ]}
                            selected={(e) => setQuestion_1(e)}
                            value={question_1}
                        />
                    </View>
                    <View>
                        <DropDown
                            label={'2. Wasting food is not expensive.'}
                            options={[
                                {
                                    title: 'A. True',
                                },
                                {
                                    title: 'B. False',
                                },
                            ]}
                            selected={(e) => setQuestion_2(e)}
                            value={question_2}
                        />
                    </View>
                    <View>
                        <DropDown
                            label={'3. Only rich countries waste food.'}
                            options={[
                                {
                                    title: 'A. True',
                                },
                                {
                                    title: 'B. False',
                                },
                            ]}
                            selected={(e) => setQuestion_3(e)}
                            value={question_3}
                        />
                    </View>
                    <View>
                        <DropDown
                            label={'4. To prepare more than the needed amount'}
                            options={[
                                {
                                    title: 'A. Excess',
                                },
                                {
                                    title: 'B. Surplus',
                                },
                                {
                                    title: 'C. Overboard',
                                },
                                {
                                    title: 'D. Enough',
                                },
                            ]}
                            selected={(e) => setQuestion_4(e)}
                            value={question_4}
                        />

                    </View>
                    <View>
                        <DropDown
                            label={'5. Only the government should care about food waste.'}
                            options={[
                                {
                                    title: 'A. True',
                                },
                                {
                                    title: 'B. False',
                                },
                            ]}
                            selected={(e) => setQuestion_5(e)}
                            value={question_5}
                        />

                    </View>
                    <View>
                        <DropDown
                            label={'6. The way you store food doesn’t matter.'}
                            options={[
                                {
                                    title: 'A. True',
                                },
                                {
                                    title: 'B. False',
                                },
                            ]}
                            selected={(e) => setQuestion_6(e)}
                            value={question_6}
                        />

                    </View>
                    <Button title='Submit' onPress={Mark} />
                </View>
                {/* <Loading loading={loading} /> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Quiz;

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
