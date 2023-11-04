import React, { useState,useEffect } from 'react'
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

    const [active_player, setActive_player] = useState('X');
    const [markers, setMarkers] = useState([null, null, null, null, null, null, null, null, null]);

    const markPosition = (position) => {

        if (!markers[position]) {
            let temp = [...markers]

            temp[position] = active_player;
            setMarkers(temp);

            if (active_player === "X") {

                setActive_player("O");
            } else {

                setActive_player("X");

            }
        };
    };

    
    const resetMarkers = () => {
        setMarkers([
            null, null, null,
            null, null, null,
            null, null, null
        ])

        
    }
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const winner = calculateWinner(markers);
        if (winner === 'X') {
            Alert.alert("Player X Won!")
            resetMarkers()
        } else if (winner === 'O') {
            Alert.alert("Player O Won!")
            resetMarkers()
        }
    }, [markers])
    return (

        <SafeAreaView style={styles.body}>
            <View>

                <StatusBar
                    statusbarStyle='light-content'
                />

            </View>
            <View style={[styles.PlayerInfo, { backgroundColor: active_player === 'X' ? '#007FF4' : '#f40075' }]}>

                <Text style={styles.PlayerTxt}>Player X's turn</Text>
            </View>
            <View style={styles.mainContainer}>

                {/* Top left cell */}
                <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>

                    {markers[0] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[0] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* Top mid cell */}
                <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>

                    {markers[1] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[1] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* Top right cell */}
                <Pressable style={styles.cell_top_right} onPress={() => markPosition(2)}>
                    {markers[2] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[2] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* mid left cell */}
                <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
                    {markers[3] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[3] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* mid mid left cell */}
                <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
                    {markers[4] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[4] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* mid right cell */}
                <Pressable style={styles.cell_mid_right} onPress={() => markPosition(5)}>
                    {markers[5] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[5] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* bottom left cell */}
                <Pressable style={styles.cell_bottom_left} onPress={() => markPosition(6)}>
                    {markers[6] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[6] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* bottom mid cell */}
                <Pressable style={styles.cell_bottom_mid} onPress={() => markPosition(7)}>
                    {markers[7] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[7] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>
                {/* bottom right cell */}
                <Pressable style={styles.cell_bottom_right} onPress={() => markPosition(8)}>
                    {markers[8] === 'X' && <Image source={require('../../assets/game2/cross.png')} style={styles.icon} />}
                    {markers[8] === 'O' && <Image source={require('../../assets/game2/zero.png')} style={styles.icon} />}
                </Pressable>

            </View>

            <Pressable style={styles.cancleBTN} onPress={resetMarkers} >
                <Image source={require('../../assets/game2/replay.png')} style={styles.cancelIcon} />
            </Pressable>
        </SafeAreaView>

    )
}

export default Game;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    PlayerInfo: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,

    },
    PlayerTxt: {

        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 1.2,
        color: '#fff',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 60
    },
    cell_top_left: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 3,
        borderBottomWidth: 3

    },

    cell_top_mid: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3
    },
    cell_top_right: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
    },
    cell_mid_left: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 3,
    },
    cell_mid_mid: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cell_mid_right: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 3,
    },
    cell_bottom_left: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 3,
        borderTopWidth: 3,
    },
    cell_bottom_mid: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 3,
    },
    cell_bottom_right: {
        height: windowWidth / 3.2,
        width: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderTopWidth: 3,
    },

    icon: {
        height: 62,
        width: 62,
    },
    cancleBTN: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    cancelIcon: {
        height: 80,
        width: 80
    }
})