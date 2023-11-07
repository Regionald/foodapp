import React, { useState, useEffect } from 'react'
import {
    View,
    H1,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Pressable,
    Image,
    Dimensions,
    Alert
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Game = ({ navigation }) => {

    const [items, setItems] = useState([
        { id: 1, Img: require('../../assets/game3/html.png'), stat: '' },
        { id: 1, Img: require('../../assets/game3/html.png'), stat: '' },
        { id: 2, Img: require('../../assets/game3/css.png'), stat: '' },
        { id: 2, Img: require('../../assets/game3/css.png'), stat: '' },
        { id: 3, Img: require('../../assets/game3/js.png'), stat: '' },
        { id: 3, Img: require('../../assets/game3/js.png'), stat: '' },
        { id: 4, Img: require('../../assets/game3/scss.png'), stat: '' },
        { id: 4, Img: require('../../assets/game3/scss.png'), stat: '' },
        { id: 5, Img: require('../../assets/game3/react.png'), stat: '' },
        { id: 5, Img: require('../../assets/game3/react.png'), stat: '' },
        { id: 6, Img: require('../../assets/game3/vue.png'), stat: '' },
        { id: 6, Img: require('../../assets/game3/vue.png'), stat: '' },
        { id: 7, Img: require('../../assets/game3/angular.png'), stat: '' },
        { id: 7, Img: require('../../assets/game3/angular.png'), stat: '' },
        { id: 8, Img: require('../../assets/game3/nodejs.png'), stat: '' },
        { id: 8, Img: require('../../assets/game3/nodejs.png'), stat: '' },

    ].sort(() => Math.random() - 0.5));



    const [correct_word, setCorrectWord] = useState([]);
    const quic_view = () => {

        for (i = 0; i < items.length; i++) {

            items[i].stat = '';
            setItems([...items]);

        }
    };

    const Active = () => {

        if (prev == -1) {
            return 'None'
        }
        return prev + 1;

    }


    const [prev, setPrev] = useState(-1);

    const check = (current) => {

        if (items[current].id == items[prev].id) {
            console.log('this is correct')
            items[current].stat = 'correct';
            items[prev].stat = 'correct';
            setItems([...items]);
            setPrev(-1);

            if (!correct_word.includes(current) && !correct_word.includes(prev)) {

                setCorrectWord([...correct_word, current, prev]);

            }

        }
        else {

            items[current].stat = 'wrong';
            items[prev].stat = 'wrong';
            console.log('this is not correct')
            setItems([...items]);

            setTimeout(() => {
                items[current].stat = '';
                items[prev].stat = '';
                setItems([...items]);
                setPrev(-1);

            }, 500)
        }
    };


    const handdleClick = (id) => {


        console.log('ID :', id);
        console.log('Prev :', prev);
        if (prev === -1) {
            setPrev(id);
            items[id].stat = 'active';
            setItems([...items])
        }

        else {
            items[id].stat = 'active';
            setItems([...items]);

            setTimeout(() => check(id), 1000);
        }
    };




    useEffect(() => {


        console.log(correct_word);
        console.log(correct_word.length);

    }, [items]);

    // useEffect(() => {

    //     quic_view();

    // }, []);

    if (correct_word.length == 16) {
 
        return <SafeAreaView>

        <ScrollView showsVerticalScrollIndicator={false} >

            <View onLayout={() => {
                console.log('This has mounted')
                setTimeout(() => {
                    navigation.navigate('Home'); // Replace 'NextScreen' with the name of the screen you want to navigate to.
                }, 1000);
            }
            } style={styles.GameWon}>
                
                <Text style={styles.points}>16</Text>

                <Text style={styles.SorryMsg}>congratulations</Text>
                <Text style={styles.GameLost}>You won</Text>
            </View>

        </ScrollView>

    </SafeAreaView>
    }
    else {
        return (

            <SafeAreaView style={styles.body}>
                <View>

                    <StatusBar
                        statusbarStyle='light-content'
                    />

                </View>
                <View style={styles.uppercut} >

                    <Text style={styles.title}>Memory Game</Text>


                </View>

                <View style={styles.header} >
                    <Text>ACTIVE Tile:{Active()}</Text>
                </View>

                {/* <View style={styles.mainContainer}>

                {items.map((item, key) => {
                    var imagePath = `${item.Img}`;

                    return <Pressable key={key} style={[styles.cell, { backgroundColor: item.stat === 'correct' ? '#7ae582' ? item.stat = 'wrong' : '#ff0035' : '#344e41' }]} onPress={() => handdleClick(key)}>
                        <Image source={imagePath} style={[styles.icon, { transform: (item.stat === 'active' || item.stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>
                })}

            </View> */}

                <View style={styles.mainContainer}>
                    <Pressable disabled={items[0].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[0].stat === 'correct' ? '#7ae582' : (items[0].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(0)}>

                        <Image source={items[0].Img} style={[styles.icon, { transform: (items[0].stat === 'active' || items[0].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[1].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[1].stat === 'correct' ? '#7ae582' : (items[1].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(1)}>

                        <Image source={items[1].Img} style={[styles.icon, { transform: (items[1].stat === 'active' || items[1].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[2].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[2].stat === 'correct' ? '#7ae582' : (items[2].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(2)}>

                        <Image source={items[2].Img} style={[styles.icon, { transform: (items[2].stat === 'active' || items[2].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[3].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[3].stat === 'correct' ? '#7ae582' : (items[3].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(3)}>

                        <Image source={items[3].Img} style={[styles.icon, { transform: (items[3].stat === 'active' || items[3].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[4].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[4].stat === 'correct' ? '#7ae582' : (items[4].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(4)}>

                        <Image source={items[4].Img} style={[styles.icon, { transform: (items[4].stat === 'active' || items[4].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[5].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[5].stat === 'correct' ? '#7ae582' : (items[5].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(5)}>

                        <Image source={items[5].Img} style={[styles.icon, { transform: (items[5].stat === 'active' || items[5].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[6].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[6].stat === 'correct' ? '#7ae582' : (items[6].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(6)}>

                        <Image source={items[6].Img} style={[styles.icon, { transform: (items[6].stat === 'active' || items[6].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[7].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[7].stat === 'correct' ? '#7ae582' : (items[7].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(7)}>

                        <Image source={items[7].Img} style={[styles.icon, { transform: (items[7].stat === 'active' || items[7].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>
                    <Pressable disabled={items[8].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[8].stat === 'correct' ? '#7ae582' : (items[8].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(8)}>

                        <Image source={items[8].Img} style={[styles.icon, { transform: (items[8].stat === 'active' || items[8].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[9].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[9].stat === 'correct' ? '#7ae582' : (items[9].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(9)}>

                        <Image source={items[9].Img} style={[styles.icon, { transform: (items[9].stat === 'active' || items[9].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[10].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[10].stat === 'correct' ? '#7ae582' : (items[10].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(10)}>

                        <Image source={items[10].Img} style={[styles.icon, { transform: (items[10].stat === 'active' || items[10].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[11].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[11].stat === 'correct' ? '#7ae582' : (items[11].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(11)}>

                        <Image source={items[11].Img} style={[styles.icon, { transform: (items[11].stat === 'active' || items[11].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[12].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[12].stat === 'correct' ? '#7ae582' : (items[12].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(12)}>

                        <Image source={items[12].Img} style={[styles.icon, { transform: (items[12].stat === 'active' || items[12].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[13].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[13].stat === 'correct' ? '#7ae582' : (items[13].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(13)}>

                        <Image source={items[13].Img} style={[styles.icon, { transform: (items[13].stat === 'active' || items[13].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[14].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[14].stat === 'correct' ? '#7ae582' : (items[14].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(14)}>

                        <Image source={items[14].Img} style={[styles.icon, { transform: (items[14].stat === 'active' || items[14].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>

                    <Pressable disabled={items[15].stat === 'correct' ? true : false} style={[styles.cell, { backgroundColor: items[15].stat === 'correct' ? '#7ae582' : (items[15].stat === 'wrong' ? '#ff0035' : '#ecf39e') }]} onPress={() => handdleClick(15)}>

                        <Image source={items[15].Img} style={[styles.icon, { transform: (items[15].stat === 'active' || items[15].stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>


                </View>


            </SafeAreaView>

        )
    }

}


export default Game;

const styles = StyleSheet.create({


    body: {
        backgroundColor: '#f4f3ee',
        display: 'flex',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {

        fontSize: 60,
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
    uppercut: {
        backgroundColor: '#344e41',
        width: windowWidth - 4,
        height: '25%',
        alignItems: 'center',
    },
    title: {
        padding: '10%',
        fontSize: 30,
        color: '#7ae582',
    }
    ,
    mainContainer: {
        width: windowWidth,
        height: windowWidth,
        backgroundColor: '#f4f3ee',
        margin: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        backgroundColor: '#fff',
        display: 'flex',
        height: windowWidth / 4.2,
        width: windowWidth / 4.2,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // transform: [{ rotateY: '180deg' }],
        animation: '',

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
        height: windowWidth / 4.6,
        width: windowWidth / 4.6,
    },
})