import React, { useContext, useState, useEffect } from "react";
import {
    View,
    H1,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Pressable,
    StatusBar,
    Dimensions,
    ScrollView,
} from 'react-native';
// import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';

var Colors = {
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
};



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Game = ({ navigation }) => {

    const [examData, setexamData] = useState([
        {
            "question": "An area of the production, distribution and trade, as well as consumption of goods and services.",
            "options": ["Economy", "Animal feed", "Environment", "Compost"],
            "correct_answer": "Economy"

        },
        {
            "question": "Natural process of recycling organic material to make fertilizer",
            "options": ["Animal feed", "Compost", "Environment", "3rd biggest country"],
            "correct_answer": "Compost"
        },
        {
            "question": "Food given to livestock",
            "options": ["Methane ", "Animal feed", "Environment", "3rd biggest country"],
            "correct_answer": "Animal feed"
        },
        {
            "question": "Natural world that involves livening and non-living things",
            "options": ["Methane ", "Animal feed", "3rd biggest country", "Environment"],
            "correct_answer": "Environment"
        },
        {
            "question": "Colourless, odourless invisible gas that affects the Earth’s temperature and climate system.",
            "options": ["Methane", "Animal feed", "3rd biggest country", "Environment"],
            "correct_answer": "Methane"
        },
        {
            "question": "Food waste",
            "options": ["Methane ", "Animal feed", "3rd biggest country", "Compost"],
            "correct_answer": "3rd biggest country"
        }
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [chances, setChances] = useState(3);

    const Mark = (option) => {

        console.log('currentQuestionIndex',currentQuestionIndex);

        const currentQuestion = examData[currentQuestionIndex];
        if (option === currentQuestion.correct_answer) {
            setScore(score + 1);
       
        }
        else {
            setChances(chances - 1);
        }
        nextQuestion();

    };

    const nextQuestion = () => {

        console.log(currentQuestionIndex)
        if (currentQuestionIndex + 1 < examData.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
       
    };

    if (chances < 0) {

        return <SafeAreaView >
            <ScrollView showsVerticalScrollIndicator={false} >

                <View onLayout={() => {
                console.log('This has mounted')
                setTimeout(() => {
                    navigation.navigate('Home'); // Replace 'NextScreen' with the name of the screen you want to navigate to.
                }, 1000);
            }} style={styles.Gamelost}>

                    <Text style={styles.SorryMsg}>Sorry</Text>
                    <Text style={styles.GameLost}>Game Lost</Text>
                </View>

            </ScrollView>
        </SafeAreaView>

    }

   else if (score<5) {
        return <SafeAreaView >
            <ScrollView showsVerticalScrollIndicator={false} >
                <View>
                    <View>

                        <StatusBar
                            statusbarStyle='light-content'
                            backgroundColor={Colors.Primary}
                        />

                    </View>
                    <View style={styles.GameInfo}>

                        <Text style={styles.GameTxt}>Matching Tiles</Text>
                    </View>

                    <View style={styles.points}>
                        <Text>Chances:{chances}</Text>
                        <Text>Points:{score}</Text>
                    </View>
                    {/* First row anagram */}

                    <View style={styles.container}>

                        {/* First row  */}

                        <Pressable key={111} style={styles.color_cell}>
                            <Text style={styles.question}>{examData[currentQuestionIndex].question}</Text>
                        </Pressable>


                    </View>
                    <Text>
                        {"\n"}
                    </Text>

                    <View style={styles.container}>

                        {/* First row  */}

                        <Pressable onPress={() => Mark(examData[currentQuestionIndex].options[0])} key={111} style={styles.color_cell_1}>
                            <Text>{examData[currentQuestionIndex].options[0]}</Text>
                        </Pressable>

                        <Pressable onPress={() => Mark((examData[currentQuestionIndex].options[1]))} key={112} style={styles.color_cell_2}>
                            <Text>{examData[currentQuestionIndex].options[1]}</Text>
                        </Pressable>

                        <Pressable onPress={() => Mark((examData[currentQuestionIndex].options[2]))} key={113} style={styles.color_cell_3}>
                            <Text>{examData[currentQuestionIndex].options[2]}</Text>
                        </Pressable>

                        <Pressable onPress={() => Mark((examData[currentQuestionIndex].options[3]))} key={114} style={styles.color_cell_4}>
                            <Text>{examData[currentQuestionIndex].options[3]}</Text>
                        </Pressable>

                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    }
    else{
        return <SafeAreaView >
        <ScrollView showsVerticalScrollIndicator={false} >

            <View onLayout={() => {
                console.log('This has mounted')
                setTimeout(() => {
                    navigation.navigate('Home'); // Replace 'NextScreen' with the name of the screen you want to navigate to.
                }, 1000);
            }} style={styles.GameWon}>

            <Text style={styles.SorryMsg}>5</Text>

                <Text style={styles.SorryMsg}>congratulations</Text>
                <Text style={styles.GameLost}>You won</Text>
            </View>

        </ScrollView>
    </SafeAreaView>
    }
   

};

export default Game;


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f4f3ee',
        display: 'flex',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
    },
    header: {
        fontSize: 60,
    },
    container: {
        width: windowWidth,
        // margin: 1,
        backgroundColor: '#ffd166',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Gamelost: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#bc4749',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    GameWon: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#8CC152',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    SorryMsg: {

        fontSize: 50,
    },
    GameLost: {

        fontSize: 50,
    }
    ,
    GameTxt: {
        fontSize: 25,

    },
    question: {
        fontSize: 20,

    },
    color_cell: {
        display: 'flex',
        borderRadius: 11,
        height: windowHeight / 3,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    color_cell_1: {
        backgroundColor: '#37BC9B',
        display: 'flex',
        borderRadius: 11,
        marginLeft: 3,
        marginBottom: 3,
        marginRight: 1.5,
        height: windowWidth / 3,
        width: windowWidth / 2.04,
        justifyContent: 'center',
        alignItems: 'center',
    },

    color_cell_2: {
        backgroundColor: '#37BC9B',
        display: 'flex',
        borderRadius: 11,
        height: windowWidth / 3,
        width: windowWidth / 2.02,
        justifyContent: 'center',
        alignItems: 'center',
    },

    color_cell_3: {
        backgroundColor: '#37BC9B',
        display: 'flex',
        borderRadius: 11,
        marginLeft: 3,
        marginRight: 1.5,
        height: windowWidth / 3,
        width: windowWidth / 2.04,
        justifyContent: 'center',
        alignItems: 'center',
    },

    color_cell_4: {
        backgroundColor: '#37BC9B',
        display: 'flex',
        borderRadius: 11,
        marginBottom: 3,
        height: windowWidth / 3,
        width: windowWidth / 2.02,
        justifyContent: 'center',
        alignItems: 'center',
    },
    GameInfo: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,

    },
    points: {
        color: '#37BC9B',
        padding: 3,

    },
    cancleBTN: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    cancelIcon: {
        height: 80,
        width: 80
    },
    icon: {
        height: windowWidth / 8.4,
        width: windowWidth / 8.4,
    },
})