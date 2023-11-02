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

const remainingTime = 0;

// const targetTime = new Date();
// targetTime.setMinutes(targetTime.getMinutes() + 10);

// const interval = setInterval(updateCountdown, 1000);

//  function updateCountdown() {

//         const currentTime = new Date();
//         const timeDifference = targetTime - currentTime;

//         // Check if the countdown has reached zero
//         if (timeDifference <= 0) {
//             clearInterval(interval); // Stop the countdown when it reaches zero
//         } else {
//             // Calculate minutes and seconds
//             const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
//             const seconds = Math.floor((timeDifference / 1000) % 60);

//             // Display the countdown in the "countdown" div
//             var new_time=(minutes/10)*windowWidth;
//             setRemainingTime=new_time;
//         }

// };


const Game = ({ navigation }) => {

    var shouldRunEffect = false;

    const [puzzle_Data, setPuzzleData] = useState([{ input_Value: '', correct_Value: 'F', status: '', index: 0 },
    { input_Value: '', correct_Value: 'R', status: '', index: 1 },
    { input_Value: '', correct_Value: 'E', status: '', index: 2 },
    { input_Value: '', correct_Value: 'S', status: '', index: 3 },
    { input_Value: '', correct_Value: 'H', status: '', index: 4 },
    { input_Value: '', correct_Value: 'R', status: '', index: 5 },
    { input_Value: '', correct_Value: 'E', status: '', index: 6 },
    { input_Value: '', correct_Value: 'S', status: '', index: 7 },
    { input_Value: '', correct_Value: 'H', status: '', index: 8 },
    { input_Value: '', correct_Value: 'R', status: '', index: 9 },
    { input_Value: '', correct_Value: 'E', status: '', index: 10 },
    { input_Value: '', correct_Value: 'S', status: '', index: 11 },
    { input_Value: '', correct_Value: 'H', status: '', index: 12 },
    { input_Value: '', correct_Value: 'R', status: '', index: 13 },
    { input_Value: '', correct_Value: 'E', status: '', index: 14 },
    { input_Value: '', correct_Value: 'S', status: '', index: 15 },
    { input_Value: '', correct_Value: 'H', status: '', index: 16 },
    { input_Value: '', correct_Value: 'R', status: '', index: 17 },
    { input_Value: '', correct_Value: 'E', status: '', index: 18 },
    { input_Value: '', correct_Value: 'S', status: '', index: 19 },
    { input_Value: '', correct_Value: 'H', status: '', index: 20 },
    { input_Value: '', correct_Value: 'R', status: '', index: 21 },
    { input_Value: '', correct_Value: 'E', status: '', index: 22 },
    { input_Value: '', correct_Value: 'S', status: '', index: 23 },
    { input_Value: '', correct_Value: 'H', status: '', index: 24 },
    { input_Value: '', correct_Value: 'R', status: '', index: 25 },
    { input_Value: '', correct_Value: 'E', status: '', index: 26 },
    { input_Value: '', correct_Value: 'S', status: '', index: 27 },
    { input_Value: '', correct_Value: 'H', status: '', index: 28 },
    { input_Value: '', correct_Value: 'R', status: '', index: 29 },
    { input_Value: '', correct_Value: 'E', status: '', index: 30 },
    { input_Value: '', correct_Value: 'S', status: '', index: 31 },
    { input_Value: '', correct_Value: 'H', status: '', index: 32 },
    { input_Value: '', correct_Value: 'R', status: '', index: 33 },
    { input_Value: '', correct_Value: 'E', status: '', index: 34 },
    { input_Value: '', correct_Value: 'S', status: '', index: 35 },
    { input_Value: '', correct_Value: 'R', status: '', index: 36 },
    { input_Value: '', correct_Value: 'E', status: '', index: 37 },
    { input_Value: '', correct_Value: 'S', status: '', index: 38 },
    { input_Value: '', correct_Value: 'H', status: '', index: 39 },
    { input_Value: '', correct_Value: 'R', status: '', index: 40 },
    { input_Value: '', correct_Value: 'E', status: '', index: 41 },
    { input_Value: '', correct_Value: 'S', status: '', index: 42 },
    { input_Value: '', correct_Value: 'H', status: '', index: 43 },
    { input_Value: '', correct_Value: 'R', status: '', index: 44 },
    { input_Value: '', correct_Value: 'E', status: '', index: 45 },
    { input_Value: '', correct_Value: 'S', status: '', index: 46 },
    { input_Value: '', correct_Value: 'R', status: '', index: 47 },
    { input_Value: '', correct_Value: 'E', status: '', index: 48 },
    { input_Value: '', correct_Value: 'S', status: '', index: 49 },
    { input_Value: '', correct_Value: 'H', status: '', index: 50 },
    { input_Value: '', correct_Value: 'R', status: '', index: 51 },
    { input_Value: '', correct_Value: 'E', status: '', index: 52 },
    { input_Value: '', correct_Value: 'S', status: '', index: 53 },
    { input_Value: '', correct_Value: 'H', status: '', index: 54 },
    { input_Value: '', correct_Value: 'R', status: '', index: 55 },
    { input_Value: '', correct_Value: 'E', status: '', index: 56 },
    { input_Value: '', correct_Value: 'S', status: '', index: 57 },
    { input_Value: '', correct_Value: 'H', status: '', index: 58 }])

    const [hint, setHint] = useState('');


    const validate = (index, char) => {
        shouldRunEffect = true;
        console.log('Not bad at all');
        var char = char.toUpperCase();
        console.log(char);
        const updatepuzzle = [...puzzle_Data];
        updatepuzzle[index].input_Value = char[0];
        setPuzzleData(updatepuzzle);

        Fresh(puzzle_Data[0].input_Value,
            puzzle_Data[1].input_Value,
            puzzle_Data[2].input_Value,
            puzzle_Data[3].input_Value,
            puzzle_Data[4].input_Value,
        );

        REFRIGERATOR(updatepuzzle[1].input_Value,
            updatepuzzle[6].input_Value,
            updatepuzzle[10].input_Value,
            updatepuzzle[16].input_Value,
            updatepuzzle[19].input_Value,
            updatepuzzle[22].input_Value,
            updatepuzzle[25].input_Value,
            updatepuzzle[29].input_Value,
            updatepuzzle[36].input_Value,
            updatepuzzle[39].input_Value,
            updatepuzzle[41].input_Value,
            updatepuzzle[43].input_Value
        );


        PACKAGING(updatepuzzle[5].input_Value,
            updatepuzzle[8].input_Value,
            updatepuzzle[15].input_Value,
            updatepuzzle[18].input_Value,
            updatepuzzle[21].input_Value,
            updatepuzzle[24].input_Value,
            updatepuzzle[27].input_Value,
            updatepuzzle[35].input_Value,
            updatepuzzle[38].input_Value);

        LANDFILL(updatepuzzle[7].input_Value,
            updatepuzzle[8].input_Value,
            updatepuzzle[58].input_Value,
            updatepuzzle[9].input_Value,
            updatepuzzle[10].input_Value,
            updatepuzzle[11].input_Value,
            updatepuzzle[12].input_Value,
            updatepuzzle[13].input_Value);


        PREPARATION(updatepuzzle[14].input_Value,
            updatepuzzle[17].input_Value,
            updatepuzzle[20].input_Value,
            updatepuzzle[23].input_Value,
            updatepuzzle[26].input_Value,
            updatepuzzle[34].input_Value,
            updatepuzzle[37].input_Value,
            updatepuzzle[40].input_Value,
            updatepuzzle[42].input_Value,
            updatepuzzle[47].input_Value,
            updatepuzzle[48].input_Value);

        FREEZER(updatepuzzle[28].input_Value,
            updatepuzzle[29].input_Value,
            updatepuzzle[30].input_Value,
            updatepuzzle[31].input_Value,
            updatepuzzle[32].input_Value,
            updatepuzzle[33].input_Value,
            updatepuzzle[34].input_Value);

        FIFO(puzzle_Data[44].input_Value,
            puzzle_Data[45].input_Value,
            puzzle_Data[46].input_Value,
            puzzle_Data[47].input_Value
        );

    };

    const FIFO = (char_1, char_2, char_3, char_4) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'FIFO') {

            updatepuzzle[44].status = 'correct';
            updatepuzzle[45].status = 'correct';
            updatepuzzle[46].status = 'correct';
            updatepuzzle[47].status = 'correct';
        }
        else {

            updatepuzzle[44].status = '';
            updatepuzzle[45].status = '';
            updatepuzzle[46].status = '';
            updatepuzzle[47].status = '';
        }
        setPuzzleData(updatepuzzle);
    };

    const Fresh = (char_1, char_2, char_3, char_4, char_5) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'FRESH') {

            updatepuzzle[0].status = 'correct';
            updatepuzzle[1].status = 'correct';
            updatepuzzle[2].status = 'correct';
            updatepuzzle[3].status = 'correct';
            updatepuzzle[4].status = 'correct';


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



    const FREEZER = (char_1, char_2, char_3, char_4, char_5, char_6, char_7) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6 + char_7;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'FREEZER') {

            updatepuzzle[28].status = 'correct'; //
            updatepuzzle[29].status = 'correct'; //
            updatepuzzle[30].status = 'correct';//
            updatepuzzle[31].status = 'correct';//
            updatepuzzle[32].status = 'correct'; //
            updatepuzzle[33].status = 'correct'; //
            updatepuzzle[34].status = 'correct'; //

        }
        else {

            updatepuzzle[28].status = ''; //
            updatepuzzle[29].status = ''; //
            updatepuzzle[30].status = '';//
            updatepuzzle[31].status = '';//
            updatepuzzle[32].status = ''; //
            updatepuzzle[33].status = ''; //
            updatepuzzle[34].status = ''; //

        }
        setPuzzleData(updatepuzzle);
    };

    const LANDFILL = (char_1, char_2, char_3, char_4, char_5, char_6, char_7, char_8) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6 + char_7 + char_8;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'LANDFILL') {

            updatepuzzle[7].status = 'correct'; //
            updatepuzzle[8].status = 'correct'; //
            updatepuzzle[58].status = 'correct';//
            updatepuzzle[9].status = 'correct';//
            updatepuzzle[10].status = 'correct'; //
            updatepuzzle[11].status = 'correct'; //
            updatepuzzle[12].status = 'correct'; //
            updatepuzzle[13].status = 'correct';

        }
        else {

            updatepuzzle[7].status = ''; //
            updatepuzzle[8].status = ''; //
            updatepuzzle[58].status = '';//
            updatepuzzle[9].status = '';//
            updatepuzzle[10].status = ''; //
            updatepuzzle[11].status = ''; //
            updatepuzzle[12].status = ''; //
            updatepuzzle[13].status = '';//
        }
        setPuzzleData(updatepuzzle);
    };

    const PACKAGING = (char_1, char_2, char_3, char_4, char_5, char_6, char_7, char_8, char_9) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6 + char_7 + char_8 + char_9;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'PACKAGING') {

            updatepuzzle[5].status = 'correct'; //
            updatepuzzle[8].status = 'correct'; //
            updatepuzzle[15].status = 'correct';//
            updatepuzzle[18].status = 'correct';//
            updatepuzzle[21].status = 'correct'; //
            updatepuzzle[24].status = 'correct'; //
            updatepuzzle[27].status = 'correct'; //
            updatepuzzle[35].status = 'correct';//
            updatepuzzle[38].status = 'correct'; //

        }
        else {

            updatepuzzle[5].status = ''; //
            updatepuzzle[8].status = ''; //
            updatepuzzle[15].status = '';//
            updatepuzzle[18].status = '';//
            updatepuzzle[21].status = ''; //
            updatepuzzle[24].status = ''; //
            updatepuzzle[27].status = ''; //
            updatepuzzle[35].status = '';//
            updatepuzzle[38].status = ''; //
        }
        setPuzzleData(updatepuzzle);
    };

    const PREPARATION = (char_1, char_2, char_3, char_4, char_5, char_6, char_7, char_8, char_9, char_10, char_11) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6 + char_7 + char_8 + char_9 + char_10 + char_11;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'PREPARATION') {

            updatepuzzle[14].status = 'correct'; //R
            updatepuzzle[17].status = 'correct'; //E
            updatepuzzle[20].status = 'correct';//F
            updatepuzzle[23].status = 'correct'; //R
            updatepuzzle[26].status = 'correct'; //I
            updatepuzzle[34].status = 'correct'; //G
            updatepuzzle[37].status = 'correct';//E
            updatepuzzle[40].status = 'correct'; //R
            updatepuzzle[42].status = 'correct'; //A
            updatepuzzle[47].status = 'correct'; //T
            updatepuzzle[48].status = 'correct';//O

        }
        else {

            updatepuzzle[14].status = ''; //R
            updatepuzzle[17].status = ''; //E
            updatepuzzle[20].status = '';//F
            updatepuzzle[23].status = ''; //R
            updatepuzzle[26].status = ''; //I
            updatepuzzle[34].status = ''; //G
            updatepuzzle[37].status = '';//E
            updatepuzzle[40].status = ''; //R
            updatepuzzle[42].status = ''; //A
            updatepuzzle[47].status = ''; //T
            updatepuzzle[48].status = '';//O
        }
        setPuzzleData(updatepuzzle);
    };

    const REFRIGERATOR = (char_1, char_2, char_3, char_4, char_5, char_6, char_7, char_8, char_9, char_10, char_11, char_12) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5 + char_6 + char_7 + char_8 + char_9 + char_10 + char_11 + char_12;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'REFRIGERATOR') {

            updatepuzzle[1].status = 'correct'; //R
            updatepuzzle[6].status = 'correct'; //E
            updatepuzzle[10].status = 'correct';//F
            updatepuzzle[16].status = 'correct'; //R
            updatepuzzle[19].status = 'correct'; //I
            updatepuzzle[22].status = 'correct'; //G
            updatepuzzle[25].status = 'correct';//E
            updatepuzzle[29].status = 'correct'; //R
            updatepuzzle[36].status = 'correct'; //A
            updatepuzzle[39].status = 'correct'; //T
            updatepuzzle[41].status = 'correct';//O
            updatepuzzle[43].status = 'correct'; //R


        }
        else {

            updatepuzzle[1].status = ''; //R
            updatepuzzle[6].status = ''; //E
            updatepuzzle[10].status = '';//F
            updatepuzzle[16].status = ''; //R
            updatepuzzle[19].status = ''; //I
            updatepuzzle[22].status = ''; //G
            updatepuzzle[25].status = '';//E
            updatepuzzle[29].status = ''; //R
            updatepuzzle[36].status = ''; //A
            updatepuzzle[39].status = ''; //T
            updatepuzzle[41].status = '';//O
            updatepuzzle[43].status = ''; //R
        }
        setPuzzleData(updatepuzzle);
    };

    useEffect(() => {


        console.log(puzzle_Data);


    }, [puzzle_Data]);

    return <SafeAreaView >
        <ScrollView showsVerticalScrollIndicator={false} >
            <View>
                <View>

                    <StatusBar
                        statusbarStyle='light-content'
                        backgroundColor={Colors.Primary}
                    />

                </View>

                {/* <View style={styles.bar}>

                    <Text style={styles.bar_status}>CROSS WORD</Text>
                </View> */}

                <View style={styles.hint}>

                    <Text style={styles.hintTxt}>Hint:{hint}</Text>
                </View>

                <View style={styles.container}>


                    {/* First row  */}

                    <Pressable key={1} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={2} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={3} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={4} style={[styles.input_cell, { backgroundColor: puzzle_Data[0].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="1" value={puzzle_Data[0].input_Value} onFocus={() => setHint('Recently made or bought.')} maxlength={1} onChangeText={(char) => validate(0, char)} />
                    </Pressable>

                    <Pressable key={5} style={[styles.input_cell, { backgroundColor: puzzle_Data[1].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="2" value={puzzle_Data[1].input_Value} onFocus={() => setHint('An appliance where food is kept cool.')} maxlength={1} onChangeText={(char) => validate(1, char)} />
                    </Pressable>

                    <Pressable key={6} style={[styles.input_cell, { backgroundColor: puzzle_Data[2].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[2].input_Value} maxlength={1} onChangeText={(char) => validate(2, char)} />
                    </Pressable>

                    <Pressable key={7} style={[styles.input_cell, { backgroundColor: puzzle_Data[3].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[3].input_Value} maxlength={1} onChangeText={(char) => validate(3, char)} />
                    </Pressable>
                    <Pressable key={8} style={[styles.input_cell, { backgroundColor: puzzle_Data[4].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[4].input_Value} maxlength={1} onChangeText={(char) => validate(4, char)} />
                    </Pressable>

                    <Pressable key={9} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={10} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* second  row*/}

                    <Pressable key={11} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={12} style={[styles.input_cell, { backgroundColor: puzzle_Data[5].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="3" value={puzzle_Data[5].input_Value} onFocus={() => setHint('Material used to protect and wrap things.')} maxlength={1} onChangeText={(char) => validate(5, char)} />
                    </Pressable>

                    <Pressable key={13} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={14} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={15} style={[styles.input_cell, { backgroundColor: puzzle_Data[6].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[6].input_Value} maxlength={1} onChangeText={(char) => validate(6, char)} />
                    </Pressable>
                    <Pressable key={16} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={17} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={18} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={19} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={20} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* third  row*/}


                    <Pressable key={21} style={[styles.input_cell, { backgroundColor: puzzle_Data[7].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="4" value={puzzle_Data[7].input_Value} onFocus={() => setHint('A large area to dispose of waste.')} maxlength={1} onChangeText={(char) => validate(7, char)} />
                    </Pressable>

                    <Pressable key={22} style={[styles.input_cell, { backgroundColor: puzzle_Data[8].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[8].input_Value} maxlength={1} onChangeText={(char) => validate(8, char)} />
                    </Pressable>

                    <Pressable key={23} style={[styles.input_cell, { backgroundColor: puzzle_Data[58].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[58].input_Value} maxlength={1} onChangeText={(char) => validate(58, char)} />
                    </Pressable>

                    <Pressable key={24} style={[styles.input_cell, { backgroundColor: puzzle_Data[9].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[9].input_Value} maxlength={1} onChangeText={(char) => validate(9, char)} />
                    </Pressable>
                    <Pressable key={25} style={[styles.input_cell, { backgroundColor: puzzle_Data[10].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[10].input_Value} maxlength={1} onChangeText={(char) => validate(10, char)} />
                    </Pressable>
                    <Pressable key={26} style={[styles.input_cell, { backgroundColor: puzzle_Data[11].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[11].input_Value} maxlength={1} onChangeText={(char) => validate(11, char)} />
                    </Pressable>
                    <Pressable key={27} style={[styles.input_cell, { backgroundColor: puzzle_Data[12].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[12].input_Value} maxlength={1} onChangeText={(char) => validate(12, char)} />
                    </Pressable>
                    <Pressable key={28} style={[styles.input_cell, { backgroundColor: puzzle_Data[13].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[13].input_Value} maxlength={1} onChangeText={(char) => validate(13, char)} />
                    </Pressable>

                    <Pressable key={29} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={30} style={[styles.input_cell, { backgroundColor: puzzle_Data[14].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="5" value={puzzle_Data[14].input_Value} onFocus={() => setHint('The way you make food.')} maxlength={1} onChangeText={(char) => validate(14, char)} />
                    </Pressable>

                    {/* Fouth  row*/}

                    <Pressable key={31} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={32} style={[styles.input_cell, { backgroundColor: puzzle_Data[15].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[15].input_Value} maxlength={1} onChangeText={(char) => validate(15, char)} />
                    </Pressable>

                    <Pressable key={33} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={34} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={35} style={[styles.input_cell, { backgroundColor: puzzle_Data[16].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[16].input_Value} maxlength={1} onChangeText={(char) => validate(16, char)} />
                    </Pressable>
                    <Pressable key={36} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={37} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={38} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={39} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={40} style={[styles.input_cell, { backgroundColor: puzzle_Data[17].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[17].input_Value} maxlength={1} onChangeText={(char) => validate(17, char)} />
                    </Pressable>

                    {/* Five  row*/}

                    <Pressable key={41} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={42} style={[styles.input_cell, { backgroundColor: puzzle_Data[18].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[18].input_Value} maxlength={1} onChangeText={(char) => validate(18, char)} />
                    </Pressable>

                    <Pressable key={43} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={44} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={45} style={[styles.input_cell, { backgroundColor: puzzle_Data[19].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[19].input_Value} maxlength={1} onChangeText={(char) => validate(19, char)} />
                    </Pressable>
                    <Pressable key={46} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={47} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={48} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={49} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={50} style={[styles.input_cell, { backgroundColor: puzzle_Data[20].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[20].input_Value} maxlength={1} onChangeText={(char) => validate(20, char)} />
                    </Pressable>

                    {/* Six  row*/}

                    <Pressable key={51} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={52} style={[styles.input_cell, { backgroundColor: puzzle_Data[21].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[21].input_Value} maxlength={1} onChangeText={(char) => validate(21, char)} />
                    </Pressable>

                    <Pressable key={53} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={54} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={55} style={[styles.input_cell, { backgroundColor: puzzle_Data[22].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[22].input_Value} maxlength={1} onChangeText={(char) => validate(22, char)} />
                    </Pressable>
                    <Pressable key={56} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={57} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={58} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={59} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={60} style={[styles.input_cell, { backgroundColor: puzzle_Data[23].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[23].input_Value} maxlength={1} onChangeText={(char) => validate(23, char)} />
                    </Pressable>

                    {/* Seven  row*/}

                    <Pressable key={61} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={62} style={[styles.input_cell, { backgroundColor: puzzle_Data[24].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[24].input_Value} maxlength={1} onChangeText={(char) => validate(24, char)} />
                    </Pressable>

                    <Pressable key={63} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={64} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={65} style={[styles.input_cell, { backgroundColor: puzzle_Data[25].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[25].input_Value} maxlength={1} onChangeText={(char) => validate(25, char)} />
                    </Pressable>
                    <Pressable key={66} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={67} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={68} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={69} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={70} style={[styles.input_cell, { backgroundColor: puzzle_Data[26].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[26].input_Value} maxlength={1} onChangeText={(char) => validate(26, char)} />
                    </Pressable>

                    {/* Eight  row*/}

                    <Pressable key={71} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={72} style={[styles.input_cell, { backgroundColor: puzzle_Data[27].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[27].input_Value} maxlength={1} onChangeText={(char) => validate(27, char)} />
                    </Pressable>

                    <Pressable key={73} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>


                    <Pressable key={74} style={[styles.input_cell, { backgroundColor: puzzle_Data[28].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="6" value={puzzle_Data[28].input_Value} onFocus={() => setHint('An appliance where food is kept at low temperatures.')} maxlength={1} onChangeText={(char) => validate(28, char)} />
                    </Pressable>
                    <Pressable key={75} style={[styles.input_cell, { backgroundColor: puzzle_Data[29].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[29].input_Value} maxlength={1} onChangeText={(char) => validate(29, char)} />
                    </Pressable>
                    <Pressable key={76} style={[styles.input_cell, { backgroundColor: puzzle_Data[30].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[30].input_Value} maxlength={1} onChangeText={(char) => validate(30, char)} />
                    </Pressable>
                    <Pressable key={77} style={[styles.input_cell, { backgroundColor: puzzle_Data[31].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[31].input_Value} maxlength={1} onChangeText={(char) => validate(31, char)} />
                    </Pressable>
                    <Pressable key={78} style={[styles.input_cell, { backgroundColor: puzzle_Data[32].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[32].input_Value} maxlength={1} onChangeText={(char) => validate(32, char)} />
                    </Pressable>

                    <Pressable key={79} style={[styles.input_cell, { backgroundColor: puzzle_Data[33].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[33].input_Value} maxlength={1} onChangeText={(char) => validate(33, char)} />
                    </Pressable>

                    <Pressable key={80} style={[styles.input_cell, { backgroundColor: puzzle_Data[34].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[34].input_Value} maxlength={1} onChangeText={(char) => validate(34, char)} />
                    </Pressable>

                    {/* Nine  row*/}

                    <Pressable key={81} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={82} style={[styles.input_cell, { backgroundColor: puzzle_Data[35].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[35].input_Value} maxlength={1} onChangeText={(char) => validate(35, char)} />
                    </Pressable>

                    <Pressable key={83} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={84} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={85} style={[styles.input_cell, { backgroundColor: puzzle_Data[36].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[36].input_Value} maxlength={1} onChangeText={(char) => validate(36, char)} />
                    </Pressable>
                    <Pressable key={86} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={87} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={88} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={89} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={90} style={[styles.input_cell, { backgroundColor: puzzle_Data[37].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[37].input_Value} maxlength={1} onChangeText={(char) => validate(37, char)} />
                    </Pressable>

                    {/* 10  row*/}

                    <Pressable key={91} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={92} style={[styles.input_cell, { backgroundColor: puzzle_Data[38].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[38].input_Value} maxlength={1} onChangeText={(char) => validate(38, char)} />
                    </Pressable>

                    <Pressable key={93} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={94} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={95} style={[styles.input_cell, { backgroundColor: puzzle_Data[39].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[39].input_Value} maxlength={1} onChangeText={(char) => validate(39, char)} />
                    </Pressable>
                    <Pressable key={96} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={97} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={98} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={99} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={100} style={[styles.input_cell, { backgroundColor: puzzle_Data[40].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[40].input_Value} maxlength={1} onChangeText={(char) => validate(40, char)} />
                    </Pressable>

                    {/* Eleven  row*/}

                    <Pressable key={101} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={102} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={103} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={104} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={105} style={[styles.input_cell, { backgroundColor: puzzle_Data[41].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[41].input_Value} maxlength={1} onChangeText={(char) => validate(41, char)} />
                    </Pressable>
                    <Pressable key={106} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={107} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={108} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={109} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={110} style={[styles.input_cell, { backgroundColor: puzzle_Data[42].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[42].input_Value} maxlength={1} onChangeText={(char) => validate(42, char)} />
                    </Pressable>

                    {/* Thirteen  row*/}

                    <Pressable key={111} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={112} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={113} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={114} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={115} style={[styles.input_cell, { backgroundColor: puzzle_Data[43].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[43].input_Value} maxlength={1} onChangeText={(char) => validate(43, char)} />
                    </Pressable>
                    <Pressable key={116} style={styles.blank_cell}>
                        <Text></Text>

                    </Pressable>
                    <Pressable key={117} style={[styles.input_cell, { backgroundColor: puzzle_Data[44].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="7" value={puzzle_Data[44].input_Value} onFocus={() => setHint('A method to prevent food wastage.')} maxlength={1} onChangeText={(char) => validate(44, char)} />
                    </Pressable>
                    <Pressable key={118} style={[styles.input_cell, { backgroundColor: puzzle_Data[45].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[45].input_Value} maxlength={1} onChangeText={(char) => validate(45, char)} />
                    </Pressable>

                    <Pressable key={119} style={[styles.input_cell, { backgroundColor: puzzle_Data[46].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[46].input_Value} maxlength={1} onChangeText={(char) => validate(46, char)} />
                    </Pressable>

                    <Pressable key={120} style={[styles.input_cell, { backgroundColor: puzzle_Data[47].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[47].input_Value} maxlength={1} onChangeText={(char) => validate(47, char)} />
                    </Pressable>

                    {/* Eleven  row*/}

                    <Pressable key={121} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={122} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={123} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={124} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={125} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={126} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={127} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>
                    <Pressable key={128} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={129} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={130} style={[styles.input_cell, { backgroundColor: puzzle_Data[48].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[48].input_Value} maxlength={1} onChangeText={(char) => validate(48, char)} />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>

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
        backgroundColor: '#F6BB42',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    GameTxt: {
        fontSize: 20,

    },

    hintTxt: {
        fontSize: 15,

    },

    input_cell: {
        backgroundColor: '#fff',
        display: 'flex',
        height: windowWidth / 10,
        width: windowWidth / 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
    },
    blank_cell: {
        backgroundColor: '#1d5c4d',
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
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,
    },
    hint: {

        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bar: {
        flexDirection: 'row',
        marginHorizontal: 10,
        // paddingVertical: 10,
        marginTop: 5,
        width: windowWidth,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#1d5c4d',
    },

    bar_status: {
        width: remainingTime,
        backgroundColor: '#F6BB42',
        alignItems: 'baseline',
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