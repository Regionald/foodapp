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


const Game = ({ navigation }) => {


    var shouldRunEffect = false;

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


    const [points, setPoints] = useState(0);


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
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'WASTE') {

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

    const FAST = (char_1, char_2, char_3, char_4) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'FAST') {

            updatepuzzle[17].status = 'correct';
            updatepuzzle[18].status = 'correct';
            updatepuzzle[19].status = 'correct';
            updatepuzzle[20].status = 'correct';


        }
        else {

            updatepuzzle[17].status = '';
            updatepuzzle[18].status = '';
            updatepuzzle[19].status = '';
            updatepuzzle[20].status = '';
        }

        setPuzzleData(updatepuzzle);
    };

    const TONNES = (char_1, char_2, char_3, char_4, char_5,char_6) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5+char_6;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'TONNES') {

            updatepuzzle[11].status = 'correct';
            updatepuzzle[12].status = 'correct';
            updatepuzzle[13].status = 'correct';
            updatepuzzle[14].status = 'correct';
            updatepuzzle[15].status = 'correct';
            updatepuzzle[16].status = 'correct';


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

    const BILLION= (char_1, char_2, char_3, char_4, char_5,char_6,char_7) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5+char_6+char_7;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'BILLION') {

            updatepuzzle[21].status = 'correct';
            updatepuzzle[22].status = 'correct';
            updatepuzzle[23].status = 'correct';
            updatepuzzle[24].status = 'correct';
            updatepuzzle[25].status = 'correct';
            updatepuzzle[26].status = 'correct';
            updatepuzzle[27].status = 'correct';


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

    const EDIBLE = (char_1, char_2, char_3, char_4, char_5,char_6) => {
        var formed_Word = char_1 + char_2 + char_3 + char_4 + char_5+char_6;
        console.log(formed_Word);

        const updatepuzzle = [...puzzle_Data];

        if (formed_Word === 'EDIBLE') {

            updatepuzzle[5].status = 'correct';
            updatepuzzle[6].status = 'correct';
            updatepuzzle[7].status = 'correct';
            updatepuzzle[8].status = 'correct';
            updatepuzzle[9].status = 'correct';
            updatepuzzle[10].status = 'correct';

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
                <View style={styles.GameInfo}>

                    <Text style={styles.GameTxt}>Daily Anagram</Text>
                </View>

                <View style={styles.points}>
                    <Text>Points:{points}</Text>
                </View>
                {/* First row anagram */}
                <View style={styles.container}>

                    {/* First row  */}

                    <Pressable key={111} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={112} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={113} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

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

                    <Pressable key={119} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={120} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* First row  */}

                    <Pressable key={121} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={122} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={123} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={124} style={[styles.input_cell, { backgroundColor: puzzle_Data[0].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="1" value={puzzle_Data[0].input_Value} maxlength={1} onChangeText={(char) => validate(0, char)} />
                    </Pressable>

                    <Pressable key={125} style={[styles.input_cell, { backgroundColor: puzzle_Data[1].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[1].input_Value} maxlength={1} onChangeText={(char) => validate(1, char)} />
                    </Pressable>

                    <Pressable key={126} style={[styles.input_cell, { backgroundColor: puzzle_Data[2].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[2].input_Value} maxlength={1} onChangeText={(char) => validate(2, char)} />
                    </Pressable>

                    <Pressable key={127} style={[styles.input_cell, { backgroundColor: puzzle_Data[3].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[3].input_Value} maxlength={1} onChangeText={(char) => validate(3, char)} />
                    </Pressable>
                    <Pressable key={128} style={[styles.input_cell, { backgroundColor: puzzle_Data[4].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[4].input_Value} maxlength={1} onChangeText={(char) => validate(4, char)} />
                    </Pressable>

                    <Pressable key={129} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={130} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>
                </View>
                <Text>
                    {"\n"}
                </Text>
                {/* Second row anagram */}
                <View style={styles.container}>


                    <Pressable key={201} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={202} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

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

                    <Pressable key={209} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={210} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* First row  */}

                    <Pressable key={211} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={212} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={213} style={[styles.input_cell, { backgroundColor: puzzle_Data[5].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="2" value={puzzle_Data[5].input_Value} maxlength={1} onChangeText={(char) => validate(5, char)} />
                    </Pressable>

                    <Pressable key={214} style={[styles.input_cell, { backgroundColor: puzzle_Data[6].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[6].input_Value} maxlength={1} onChangeText={(char) => validate(6, char)} />
                    </Pressable>

                    <Pressable key={215} style={[styles.input_cell, { backgroundColor: puzzle_Data[7].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[7].input_Value} maxlength={1} onChangeText={(char) => validate(7, char)} />
                    </Pressable>

                    <Pressable key={216} style={[styles.input_cell, { backgroundColor: puzzle_Data[8].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[8].input_Value} maxlength={1} onChangeText={(char) => validate(8, char)} />
                    </Pressable>

                    <Pressable key={217} style={[styles.input_cell, { backgroundColor: puzzle_Data[9].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[9].input_Value} maxlength={1} onChangeText={(char) => validate(9, char)} />
                    </Pressable>
                    <Pressable key={218} style={[styles.input_cell, { backgroundColor: puzzle_Data[10].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[10].input_Value} maxlength={1} onChangeText={(char) => validate(10, char)} />
                    </Pressable>

                    <Pressable key={219} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={220} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>
                </View>
                <Text>
                    {"\n"}
                </Text>

                {/* Third row anagram */}

                <View style={styles.container}>

                    {/* First row  */}

                    <Pressable key={311} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={312} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

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

                    <Pressable key={319} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={320} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* Input  row  */}

                    <Pressable key={321} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={322} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={323} style={[styles.input_cell, { backgroundColor: puzzle_Data[11].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="3" value={puzzle_Data[11].input_Value} maxlength={1} onChangeText={(char) => validate(11, char)} />
                    </Pressable>

                    <Pressable key={324} style={[styles.input_cell, { backgroundColor: puzzle_Data[12].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[12].input_Value} maxlength={1} onChangeText={(char) => validate(12, char)} />
                    </Pressable>

                    <Pressable key={325} style={[styles.input_cell, { backgroundColor: puzzle_Data[13].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[13].input_Value} maxlength={1} onChangeText={(char) => validate(13, char)} />
                    </Pressable>

                    <Pressable key={326} style={[styles.input_cell, { backgroundColor: puzzle_Data[14].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[14].input_Value} maxlength={1} onChangeText={(char) => validate(14, char)} />
                    </Pressable>

                    <Pressable key={327} style={[styles.input_cell, { backgroundColor: puzzle_Data[15].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[15].input_Value} maxlength={1} onChangeText={(char) => validate(15, char)} />
                    </Pressable>
                    <Pressable key={328} style={[styles.input_cell, { backgroundColor: puzzle_Data[16].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[16].input_Value} maxlength={1} onChangeText={(char) => validate(16, char)} />
                    </Pressable>

                    <Pressable key={329} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={330} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>
                </View>
                <Text>
                    {"\n"}
                </Text>

                {/* Fourth row anagram */}

                <View style={styles.container}>

                    {/* First row  */}

                    <Pressable key={401} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={402} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={403} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

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
                    </Pressable>
                    <Pressable key={408} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={409} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={410} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* First row  */}

                    <Pressable key={411} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={412} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={413} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={414} style={[styles.input_cell, { backgroundColor: puzzle_Data[17].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="4" value={puzzle_Data[17].input_Value} maxlength={1} onChangeText={(char) => validate(17, char)} />
                    </Pressable>

                    <Pressable key={415} style={[styles.input_cell, { backgroundColor: puzzle_Data[18].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[18].input_Value} maxlength={1} onChangeText={(char) => validate(18, char)} />
                    </Pressable>

                    <Pressable key={416} style={[styles.input_cell, { backgroundColor: puzzle_Data[19].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[19].input_Value} maxlength={1} onChangeText={(char) => validate(19, char)} />
                    </Pressable>

                    <Pressable key={417} style={[styles.input_cell, { backgroundColor: puzzle_Data[20].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[20].input_Value} maxlength={1} onChangeText={(char) => validate(20, char)} />
                    </Pressable>
                    <Pressable key={418} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={419} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={420} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>
                </View>
                <Text>
                    {"\n"}
                </Text>

                {/* Five row anagram */}

                <View style={styles.container}>

                    {/* First row  */}

                    <Pressable key={511} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={512} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

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

                    <Pressable key={520} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    {/* First row  */}

                    <Pressable key={521} style={styles.color_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={522} style={styles.blank_cell}>
                        <Text></Text>
                    </Pressable>

                    <Pressable key={523} style={[styles.input_cell, { backgroundColor: puzzle_Data[21].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput placeholder="5" value={puzzle_Data[21].input_Value} maxlength={1} onChangeText={(char) => validate(21, char)} />
                    </Pressable>

                    <Pressable key={524} style={[styles.input_cell, { backgroundColor: puzzle_Data[22].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[22].input_Value} maxlength={1} onChangeText={(char) => validate(22, char)} />
                    </Pressable>

                    <Pressable key={525} style={[styles.input_cell, { backgroundColor: puzzle_Data[23].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[23].input_Value} maxlength={1} onChangeText={(char) => validate(23, char)} />
                    </Pressable>

                    <Pressable key={526} style={[styles.input_cell, { backgroundColor: puzzle_Data[24].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[24].input_Value} maxlength={1} onChangeText={(char) => validate(24, char)} />
                    </Pressable>

                    <Pressable key={527} style={[styles.input_cell, { backgroundColor: puzzle_Data[25].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[25].input_Value} maxlength={1} onChangeText={(char) => validate(25, char)} />
                    </Pressable>
                    <Pressable key={528} style={[styles.input_cell, { backgroundColor: puzzle_Data[26].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[26].input_Value} maxlength={1} onChangeText={(char) => validate(26, char)} />
                    </Pressable>
                    <Pressable key={529} style={[styles.input_cell, { backgroundColor: puzzle_Data[27].status === 'correct' ? '#F6BB42' : '#f4f3ee' }]}>
                        <TextInput value={puzzle_Data[27].input_Value} maxlength={1} onChangeText={(char) => validate(27, char)} />
                    </Pressable>

                    <Pressable key={530} style={styles.color_cell}>
                        <Text></Text>
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
        backgroundColor: '#fff',
        display: 'flex',
        height: windowWidth / 10,
        width: windowWidth / 10,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,

    },
    points: {
        justifyContent: 'center',
        alignItems: 'center',

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