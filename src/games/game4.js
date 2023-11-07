import React, { useContext, useState, useEffect, useRef } from "react";
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
import { Table, TableWrapper, Col, Cols } from 'react-native-table-component';

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


    var shouldRunEffect = false;
    const ref0 = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);
    const ref13 = useRef(null);
    const ref14 = useRef(null);
    const ref15 = useRef(null);
    const ref16 = useRef(null);
    const ref17 = useRef(null);
    const ref18 = useRef(null);
    const ref19 = useRef(null)
    const ref20 = useRef(null);
    const ref21 = useRef(null);
    const ref22 = useRef(null);
    const ref23 = useRef(null);
    const ref24 = useRef(null);
    const ref25 = useRef(null);
    const ref26 = useRef(null);
    const ref27 = useRef(null);
    const ref28 = useRef(null);
    const ref29 = useRef(null);
    const ref30 = useRef(null);
    const ref31 = useRef(null);



    const [puzzle_Data, setPuzzleData] = useState([{ input_Value: '', correct_Value: 'F', status: '' },
    { input_Value: '', correct_Value: 'R', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'H', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'D', status: '' },
    { input_Value: '', correct_Value: 'I', status: '' },
    { input_Value: '', correct_Value: 'B', status: '' },
    { input_Value: '', correct_Value: 'L', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'T', status: '' },
    { input_Value: '', correct_Value: 'O', status: '' },
    { input_Value: '', correct_Value: 'N', status: '' },
    { input_Value: '', correct_Value: 'N', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'F', status: '' },
    { input_Value: '', correct_Value: 'A', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'T', status: '' },
    { input_Value: '', correct_Value: 'R', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'H', status: '' },
    { input_Value: '', correct_Value: 'R', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'H', status: '' },
    { input_Value: '', correct_Value: 'R', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'H', status: '' },
    { input_Value: '', correct_Value: 'R', status: '' },
    { input_Value: '', correct_Value: 'E', status: '' },
    { input_Value: '', correct_Value: 'S', status: '' },
    { input_Value: '', correct_Value: 'H', status: '' }])


    const [score, setScore] = useState(0);
    const [correct_word, setCorrectWord] = useState([]);


    const validate = (index, char, inputRef, nextRef) => {
        shouldRunEffect = true;
        console.log('Not bad at all');
        var char = char.toUpperCase();
        console.log(char);
        const updatepuzzle = [...puzzle_Data];

        updatepuzzle[index].input_Value = char[0];
        setPuzzleData(updatepuzzle);


        if (inputRef && inputRef.current && updatepuzzle[index].input_Value != '') {

            setTimeout(() => {

                try {

                    inputRef.current.blur();
                    nextRef.current.focus();

                } catch (error) {
                    console.log(error)
                }
            }, 500);

        };

        Fresh(puzzle_Data[0].input_Value,
            puzzle_Data[1].input_Value,
            puzzle_Data[2].input_Value,
            puzzle_Data[3].input_Value,
            puzzle_Data[4].input_Value,
        );

        EDIBLE(puzzle_Data[5].input_Value,
            puzzle_Data[6].input_Value,
            puzzle_Data[7].input_Value,
            puzzle_Data[8].input_Value,
            puzzle_Data[9].input_Value,
            puzzle_Data[10].input_Value,
        );

        TONNES(puzzle_Data[11].input_Value,
            puzzle_Data[12].input_Value,
            puzzle_Data[13].input_Value,
            puzzle_Data[14].input_Value,
            puzzle_Data[15].input_Value,
            puzzle_Data[16].input_Value,
        );

        FAST(puzzle_Data[17].input_Value,
            puzzle_Data[18].input_Value,
            puzzle_Data[19].input_Value,
            puzzle_Data[20].input_Value,
        );

        BILLION(puzzle_Data[21].input_Value,
            puzzle_Data[22].input_Value,
            puzzle_Data[23].input_Value,
            puzzle_Data[24].input_Value,
            puzzle_Data[25].input_Value,
            puzzle_Data[26].input_Value,
            puzzle_Data[27].input_Value,
        );


    };

    const Fresh = (char_1, char_2, char_3, char_4, char_5) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5;
       

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'WASTE') {

            updatepuzzle[0].status = 'correct';
            updatepuzzle[1].status = 'correct';
            updatepuzzle[2].status = 'correct';
            updatepuzzle[3].status = 'correct';
            updatepuzzle[4].status = 'correct';

            if (!correct_word.includes('WASTE')) {

                setCorrectWord([...correct_word, 'WASTE']);
                setScore(score + 5);

            }
        }
        else {

            updatepuzzle[0].status = '';
            updatepuzzle[1].status = '';
            updatepuzzle[2].status = '';
            updatepuzzle[3].status = '';
            updatepuzzle[4].status = '';
        }

        setPuzzleData(updatepuzzle);
    };

    const FAST = (char_1, char_2, char_3, char_4) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4;
      

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'SAFE') {

            updatepuzzle[17].status = 'correct';
            updatepuzzle[18].status = 'correct';
            updatepuzzle[19].status = 'correct';
            updatepuzzle[20].status = 'correct';

            if (!correct_word.includes('SAFE')) {

                setCorrectWord([...correct_word, 'SAFE']);
                setScore(score + 4);

            }


        }
        else {

            updatepuzzle[17].status = '';
            updatepuzzle[18].status = '';
            updatepuzzle[19].status = '';
            updatepuzzle[20].status = '';
        }

        setPuzzleData(updatepuzzle);
    };

    const TONNES = (char_1, char_2, char_3, char_4, char_5, char_6) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6;
       

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'TONNES') {

            updatepuzzle[11].status = 'correct';
            updatepuzzle[12].status = 'correct';
            updatepuzzle[13].status = 'correct';
            updatepuzzle[14].status = 'correct';
            updatepuzzle[15].status = 'correct';
            updatepuzzle[16].status = 'correct';

            if (!correct_word.includes('TONNES')) {

                setCorrectWord([...correct_word, 'TONNES']);
                setScore(score + 6);

            }


        }
        else {

            updatepuzzle[11].status = '';
            updatepuzzle[12].status = '';
            updatepuzzle[13].status = '';
            updatepuzzle[14].status = '';
            updatepuzzle[15].status = '';
            updatepuzzle[16].status = '';
        }

        setPuzzleData(updatepuzzle);
    };

    const BILLION = (char_1, char_2, char_3, char_4, char_5, char_6, char_7) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6 + char_7;

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'BILLION') {

            updatepuzzle[21].status = 'correct';
            updatepuzzle[22].status = 'correct';
            updatepuzzle[23].status = 'correct';
            updatepuzzle[24].status = 'correct';
            updatepuzzle[25].status = 'correct';
            updatepuzzle[26].status = 'correct';
            updatepuzzle[27].status = 'correct';

            if (!correct_word.includes('BILLION')) {

                setCorrectWord([...correct_word, 'BILLION']);
                setScore(score + 7);

            }


        }
        else {

            updatepuzzle[21].status = '';
            updatepuzzle[22].status = '';
            updatepuzzle[23].status = '';
            updatepuzzle[24].status = '';
            updatepuzzle[25].status = '';
            updatepuzzle[26].status = '';
            updatepuzzle[27].status = '';
        }

        setPuzzleData(updatepuzzle);
    };

    const EDIBLE = (char_1, char_2, char_3, char_4, char_5, char_6) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6;

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'EDIBLE') {

            updatepuzzle[5].status = 'correct';
            updatepuzzle[6].status = 'correct';
            updatepuzzle[7].status = 'correct';
            updatepuzzle[8].status = 'correct';
            updatepuzzle[9].status = 'correct';
            updatepuzzle[10].status = 'correct';

            if (!correct_word.includes('EDIBLE')) {

                setCorrectWord([...correct_word, 'EDIBLE']);
                setScore(score + 6);

            }

        }
        else {

            updatepuzzle[5].status = '';
            updatepuzzle[6].status = '';
            updatepuzzle[7].status = '';
            updatepuzzle[8].status = '';
            updatepuzzle[9].status = '';
            updatepuzzle[10].status = '';
        }

        setPuzzleData(updatepuzzle);
    };

    useEffect(() => {


        console.log('who a u');


    }, [puzzle_Data, correct_word]);


    if (correct_word.length > 4) {

        return <SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} >

                <View onLayout={() => {
                    console.log('This has mounted')
                    setTimeout(() => {
                        navigation.navigate('Home'); // Replace 'NextScreen' with the name of the screen you want to navigate to.
                    }, 1000);
                }
                } style={styles.GameWon}>

                    <Text style={styles.points}>{score}</Text>

                    <Text style={styles.SorryMsg}>congratulations</Text>
                    <Text style={styles.GameLost}>You won</Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    }
    else {


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

                        <Text style={styles.GameTxt}>Daily Anagram</Text>
                    </View>

                    <View style={styles.point}>
                        <Text style={styles.point} >Points:{score}</Text>
                    </View>
                    {/* First row anagram */}
                    <View style={styles.container}>

                        <View style={styles.row}>
                            <Pressable key={114} style={styles.blank_cell}>
                                <Text>A</Text>
                            </Pressable>

                            <Pressable key={115} style={styles.blank_cell}>
                                <Text>S</Text>
                            </Pressable>

                            <Pressable key={116} style={styles.blank_cell}>
                                <Text>T</Text>
                            </Pressable>

                            <Pressable key={117} style={styles.blank_cell}>
                                <Text>E</Text>
                            </Pressable>
                            <Pressable key={118} style={styles.blank_cell}>
                                <Text>W</Text>
                            </Pressable>

                        </View>

                        {/* First row  */}

                        {/* First row  */}

                        <View style={styles.row}>

                            <Pressable key={124} style={[styles.input_cell, { backgroundColor: puzzle_Data[0].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref0} style={styles.inputText} value={puzzle_Data[0].input_Value} maxlength={1} onChangeText={(char) => validate(0, char, ref0, ref1)} />
                            </Pressable>

                            <Pressable key={125} style={[styles.input_cell, { backgroundColor: puzzle_Data[1].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref1} style={styles.inputText} value={puzzle_Data[1].input_Value} maxlength={1} onChangeText={(char) => validate(1, char, ref1, ref2)} />
                            </Pressable>

                            <Pressable key={126} style={[styles.input_cell, { backgroundColor: puzzle_Data[2].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref2} style={styles.inputText} value={puzzle_Data[2].input_Value} maxlength={1} onChangeText={(char) => validate(2, char, ref2, ref3)} />
                            </Pressable>

                            <Pressable key={127} style={[styles.input_cell, { backgroundColor: puzzle_Data[3].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref3} style={styles.inputText} value={puzzle_Data[3].input_Value} maxlength={1} onChangeText={(char) => validate(3, char, ref3, ref4)} />
                            </Pressable>
                            <Pressable key={128} style={[styles.input_cell, { backgroundColor: puzzle_Data[4].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref4} style={styles.inputText} value={puzzle_Data[4].input_Value} maxlength={1} onChangeText={(char) => validate(4, char, ref4, ref5)} />
                            </Pressable>

                        </View>



                    </View>

                    {/* Second row anagram */}
                    <View style={styles.container}>

                        <View style={styles.row}>
                            <Pressable key={203} style={styles.blank_cell}>
                                <Text>D</Text>
                            </Pressable>

                            <Pressable key={204} style={styles.blank_cell}>
                                <Text>I</Text>
                            </Pressable>

                            <Pressable key={205} style={styles.blank_cell}>
                                <Text>L</Text>
                            </Pressable>

                            <Pressable key={206} style={styles.blank_cell}>
                                <Text>B</Text>
                            </Pressable>

                            <Pressable key={207} style={styles.blank_cell}>
                                <Text>E</Text>
                            </Pressable>
                            <Pressable key={208} style={styles.blank_cell}>
                                <Text>E</Text>
                            </Pressable>

                        </View>

                        <View style={styles.row}>

                            <Pressable key={213} style={[styles.input_cell, { backgroundColor: puzzle_Data[5].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref5} style={styles.inputText} value={puzzle_Data[5].input_Value} maxlength={1} onChangeText={(char) => validate(5, char, ref5, ref6)} />
                            </Pressable>

                            <Pressable key={214} style={[styles.input_cell, { backgroundColor: puzzle_Data[6].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref6} style={styles.inputText} value={puzzle_Data[6].input_Value} maxlength={1} onChangeText={(char) => validate(6, char, ref6, ref7)} />
                            </Pressable>

                            <Pressable key={215} style={[styles.input_cell, { backgroundColor: puzzle_Data[7].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref7} style={styles.inputText} value={puzzle_Data[7].input_Value} maxlength={1} onChangeText={(char) => validate(7, char, ref7, ref8)} />
                            </Pressable>

                            <Pressable key={216} style={[styles.input_cell, { backgroundColor: puzzle_Data[8].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref8} style={styles.inputText} value={puzzle_Data[8].input_Value} maxlength={1} onChangeText={(char) => validate(8, char, ref8, ref9)} />
                            </Pressable>

                            <Pressable key={217} style={[styles.input_cell, { backgroundColor: puzzle_Data[9].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref9} style={styles.inputText} value={puzzle_Data[9].input_Value} maxlength={1} onChangeText={(char) => validate(9, char, ref9, ref10)} />
                            </Pressable>
                            <Pressable key={218} style={[styles.input_cell, { backgroundColor: puzzle_Data[10].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref10} style={styles.inputText} value={puzzle_Data[10].input_Value} maxlength={1} onChangeText={(char) => validate(10, char, ref10, ref11)} />
                            </Pressable>


                        </View>
                    </View>


                    {/* Third row anagram */}

                    <View style={styles.container}>

                        {/* First row  */}

                        <View style={styles.row}>
                            <Pressable key={313} style={styles.blank_cell}>
                                <Text>N</Text>
                            </Pressable>

                            <Pressable key={314} style={styles.blank_cell}>
                                <Text>N</Text>
                            </Pressable>

                            <Pressable key={315} style={styles.blank_cell}>
                                <Text>E</Text>
                            </Pressable>

                            <Pressable key={316} style={styles.blank_cell}>
                                <Text>S</Text>
                            </Pressable>

                            <Pressable key={317} style={styles.blank_cell}>
                                <Text>O</Text>
                            </Pressable>
                            <Pressable key={318} style={styles.blank_cell}>
                                <Text>T</Text>
                            </Pressable>
                        </View>

                        <View style={styles.row}>

                            <Pressable key={323} style={[styles.input_cell, { backgroundColor: puzzle_Data[11].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref11} style={styles.inputText} value={puzzle_Data[11].input_Value} maxlength={1} onChangeText={(char) => validate(11, char, ref11, ref12)} />
                            </Pressable>

                            <Pressable key={324} style={[styles.input_cell, { backgroundColor: puzzle_Data[12].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref12} style={styles.inputText} value={puzzle_Data[12].input_Value} maxlength={1} onChangeText={(char) => validate(12, char, ref12, ref13)} />
                            </Pressable>

                            <Pressable key={325} style={[styles.input_cell, { backgroundColor: puzzle_Data[13].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref13} style={styles.inputText} value={puzzle_Data[13].input_Value} maxlength={1} onChangeText={(char) => validate(13, char, ref13, ref14)} />
                            </Pressable>

                            <Pressable key={326} style={[styles.input_cell, { backgroundColor: puzzle_Data[14].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref14} style={styles.inputText} value={puzzle_Data[14].input_Value} maxlength={1} onChangeText={(char) => validate(14, char, ref14, ref15)} />
                            </Pressable>

                            <Pressable key={327} style={[styles.input_cell, { backgroundColor: puzzle_Data[15].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref15} style={styles.inputText} value={puzzle_Data[15].input_Value} maxlength={1} onChangeText={(char) => validate(15, char, ref15, ref16)} />
                            </Pressable>
                            <Pressable key={328} style={[styles.input_cell, { backgroundColor: puzzle_Data[16].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref16} style={styles.inputText} value={puzzle_Data[16].input_Value} maxlength={1} onChangeText={(char) => validate(16, char, ref16, ref17)} />
                            </Pressable>
                        </View>


                        {/* Input  row  */}
                    </View>

                    {/* Fourth row anagram */}

                    <View style={styles.container}>

                        {/* First row  */}


                        <View style={styles.row}>
                            <Pressable key={404} style={styles.blank_cell}>
                                <Text>A</Text>
                            </Pressable>

                            <Pressable key={405} style={styles.blank_cell}>
                                <Text>F</Text>
                            </Pressable>

                            <Pressable key={406} style={styles.blank_cell}>
                                <Text>S</Text>
                            </Pressable>

                            <Pressable key={407} style={styles.blank_cell}>
                                <Text>E</Text>
                            </Pressable></View>
                        <View style={styles.row}>

                            <Pressable key={414} style={[styles.input_cell, { backgroundColor: puzzle_Data[17].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref17} style={styles.inputText} value={puzzle_Data[17].input_Value} maxlength={1} onChangeText={(char) => validate(17, char, ref17, ref18)} />
                            </Pressable>

                            <Pressable key={415} style={[styles.input_cell, { backgroundColor: puzzle_Data[18].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref18} style={styles.inputText} value={puzzle_Data[18].input_Value} maxlength={1} onChangeText={(char) => validate(18, char, ref18, ref19)} />
                            </Pressable>

                            <Pressable key={416} style={[styles.input_cell, { backgroundColor: puzzle_Data[19].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref19} style={styles.inputText} value={puzzle_Data[19].input_Value} maxlength={1} onChangeText={(char) => validate(19, char, ref19, ref20)} />
                            </Pressable>

                            <Pressable key={417} style={[styles.input_cell, { backgroundColor: puzzle_Data[20].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref20} style={styles.inputText} value={puzzle_Data[20].input_Value} maxlength={1} onChangeText={(char) => validate(20, char, ref20, ref21)} />
                            </Pressable>
                        </View>



                        {/* First row  */}


                    </View>

                    {/* Five row anagram */}

                    <View style={styles.container}>

                        {/* First row  */}

                        <View style={styles.row}>
                            <Pressable key={513} style={styles.blank_cell}>
                                <Text>N</Text>
                            </Pressable>

                            <Pressable key={514} style={styles.blank_cell}>
                                <Text>I</Text>
                            </Pressable>

                            <Pressable key={515} style={styles.blank_cell}>
                                <Text>L</Text>
                            </Pressable>

                            <Pressable key={516} style={styles.blank_cell}>
                                <Text>L</Text>
                            </Pressable>

                            <Pressable key={517} style={styles.blank_cell}>
                                <Text>I</Text>
                            </Pressable>
                            <Pressable key={518} style={styles.blank_cell}>
                                <Text>O</Text>
                            </Pressable>

                            <Pressable key={519} style={styles.blank_cell}>
                                <Text>B</Text>
                            </Pressable>
                        </View>
                        <View style={styles.row}>

                            <Pressable key={523} style={[styles.input_cell, { backgroundColor: puzzle_Data[21].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref21} style={styles.inputText} value={puzzle_Data[21].input_Value} maxlength={1} onChangeText={(char) => validate(21, char, ref21, ref22)} />
                            </Pressable>

                            <Pressable key={524} style={[styles.input_cell, { backgroundColor: puzzle_Data[22].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref22} style={styles.inputText} value={puzzle_Data[22].input_Value} maxlength={1} onChangeText={(char) => validate(22, char, ref22, ref23)} />
                            </Pressable>

                            <Pressable key={525} style={[styles.input_cell, { backgroundColor: puzzle_Data[23].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref23} style={styles.inputText} value={puzzle_Data[23].input_Value} maxlength={1} onChangeText={(char) => validate(23, char, ref23, ref24)} />
                            </Pressable>

                            <Pressable key={526} style={[styles.input_cell, { backgroundColor: puzzle_Data[24].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref24} style={styles.inputText} value={puzzle_Data[24].input_Value} maxlength={1} onChangeText={(char) => validate(24, char, ref24, ref25)} />
                            </Pressable>

                            <Pressable key={527} style={[styles.input_cell, { backgroundColor: puzzle_Data[25].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref25} style={styles.inputText} value={puzzle_Data[25].input_Value} maxlength={1} onChangeText={(char) => validate(25, char, ref25, ref26)} />
                            </Pressable>
                            <Pressable key={528} style={[styles.input_cell, { backgroundColor: puzzle_Data[26].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref26} style={styles.inputText} value={puzzle_Data[26].input_Value} maxlength={1} onChangeText={(char) => validate(26, char, ref26, ref27)} />
                            </Pressable>
                            <Pressable key={529} style={[styles.input_cell, { backgroundColor: puzzle_Data[27].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                                <TextInput ref={ref27} style={styles.inputText} value={puzzle_Data[27].input_Value} maxlength={1} onChangeText={(char) => validate(27, char, ref27, ref0)} />
                            </Pressable>
                        </View>




                        {/* First row  */}


                    </View>

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
        width: windowWidth - 10,
        marginHorizontal: 5,
        marginBottom: 5,
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#37BC9B',
        borderStyle: 'solid',
        alignItems: 'center',
        shadowOffset: { width: 30, height: 30 },
        shadowColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    row: {
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    GameTxt: {
        color: '#F6BB42',
        fontSize: 25,
    },

    input_cell: {
        backgroundColor: '#fff',
        display: 'flex',
        height: windowWidth / 6,
        width: windowWidth / 10,
        borderColor: '#37BC9B',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        marginHorizontal: 1.5,
    },

    inputText: {
        fontSize: windowWidth / 12,
    },


    blank_cell: {

        display: 'flex',
        height: windowWidth / 10,
        width: windowWidth / 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 1.5,
    },

    color_cell: {
        backgroundColor: '#37BC9B',
        display: 'flex',
        height: windowWidth / 10,
        width: windowWidth / 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    GameInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        backgroundColor: '#37BC9B',
        marginTop: 3,
        height: 80,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#37BC9B',
        borderStyle: 'solid',

    },
    point: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,

    },

    points: {
    fontSize: 45,

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

    fontSize: 30,
},
    GameLost: {

    fontSize: 20,
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