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
const Game = () => {

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

    const [prev, setPrev] = useState(-1);

    const check = (current) => {

        console.log(items[current].id, items[prev].id);
        console.log(typeof (items[prev].id));
        console.log(typeof (items[current].id));


        if (items[current].id == items[prev].id) {

            items[current].stat = 'correct';
            items[prev].stat = 'correct';
            setItems([...items]);

            setPrev(-1);
        }
        else {

            items[current].stat = 'wrong';
            items[prev].stat = 'wrong';

            setItems([...items]);

            setTimeout(() => {
                items[current].stat = '';
                items[prev].stat = '';
                setItems([...items]);
                setPrev(-1);

            }, 3000)
        }
    };


    const handdleClick = (id) => {
        if (prev === -1) {
            setPrev(id);
            items[id].stat = 'active';
            setItems([...items])
        }

        else {

            items[id].stat = 'active';
            setItems([...items]);
            
            setTimeout(() => check(id), 5000);
        }
    };

    useEffect(() => {

        console.log(items);

    }, [items])

    return (

        <SafeAreaView style={styles.body}>
            <View>

                <StatusBar
                    statusbarStyle='light-content'
                />

            </View>
            <View style={styles.header}>
                <Text>Memory check</Text>
            </View>

            <View style={styles.mainContainer}>

                {items.map((item, key) => {
                    var imagePath = `${item.Img}`;

                    return <Pressable key={key} style={[styles.cell, { backgroundColor: item.stat === 'correct' ? '#7ae582' ? item.stat = 'wrong' : '#ff0035' : '#344e41' }]} onPress={() => handdleClick(key)}>
                        <Image source={imagePath} style={[styles.icon, { transform: (item.stat === 'active' || item.stat === 'correct') ? [{ scale: 1 }] : [{ scale: 0 }] }]} />
                    </Pressable>
                })}

            </View>

            <Pressable style={styles.cancleBTN} >
                <Image source={require('../../assets/game2/replay.png')} style={styles.cancelIcon} />
            </Pressable>

        </SafeAreaView>

    )
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
        height: windowHeight,
    },
    header: {

        fontSize: 60,
    },
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
        height: windowWidth / 8.4,
        width: windowWidth / 8.4,
    },
})