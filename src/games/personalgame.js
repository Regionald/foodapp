import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { PanGestureHandler, Gesture } from 'react-native-gesture-handler';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const cell_width = windowWidth / 9;
const cell_X2 = 2 * cell_width;
const cell_X3 = 3 * cell_width;
const cell_X4 = 4 * cell_width;
const cell_X5 = 5 * cell_width;
const cell_X6 = 6 * cell_width;
const cell_X7 = 7 * cell_width;
const cell_X8 = 8 * cell_width;
const cell_X9 = 9 * cell_width;


const cell_Y2 = 2 * cell_width;
const cell_Y3 = 3 * cell_width;
const cell_Y4 = 4 * cell_width;
const cell_Y5 = 5 * cell_width;
const cell_Y6 = 6 * cell_width;
const cell_Y7 = 7 * cell_width;
const cell_Y8 = 8 * cell_width;
const cell_Y9 = 9 * cell_width;

const row_pan = [cell_width, cell_X2, cell_X3, cell_X4, cell_X5, cell_X6, cell_X7, cell_X8, cell_X9];
const column_pan = [cell_width, cell_Y2, cell_Y3, cell_Y4, cell_Y5, cell_Y6, cell_Y7, cell_Y8, cell_Y9]


const WordSearch = () => {





  const gridSize = 9;
  const [grid, setGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [permCells, setPermCells] = useState([]);
  const [formed_Word, setFormed_word] = useState([]);
  const wordsToInsert = ["STORAGE", "RICH", "EXPENSIVE", "SURPLUS", "PROTEIN", "EXCESS"];
  const myViewRef = useRef(null);


  useEffect(() => {

    const generateRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const splitWordIntoChars = (word) => {
      return word.split('');
    };


    // write storage
    // write RICH
    // write Expensive
    // write SURPLUS
    // write Protein
    // write Excess	

    const newGrid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(generateRandomLetter());
      }
      newGrid.push(row);
    };
    // write storage
    newGrid[0][0] = 'S';
    newGrid[0][1] = 'T';
    newGrid[0][2] = 'O';
    newGrid[0][3] = 'R';
    newGrid[0][4] = 'A';
    newGrid[0][5] = 'G';
    newGrid[0][6] = 'E';

    // write RICH
    newGrid[0][3] = 'R';
    newGrid[1][3] = 'I';
    newGrid[2][3] = 'C';
    newGrid[3][3] = 'H';

    // write Expensive
    newGrid[8][0] = 'E';
    newGrid[7][1] = 'X';
    newGrid[6][2] = 'P';
    newGrid[5][3] = 'E';
    newGrid[4][4] = 'N';
    newGrid[3][5] = 'S';
    newGrid[2][6] = 'I';
    newGrid[1][7] = 'V';
    newGrid[0][8] = 'E';

    // write SURPLUS
    newGrid[8][1] = 'S';
    newGrid[8][2] = 'U';
    newGrid[8][3] = 'R';
    newGrid[8][4] = 'P';
    newGrid[8][5] = 'L';
    newGrid[8][6] = 'U';
    newGrid[8][7] = 'S';

    // write Protein
    newGrid[8][8] = 'P';
    newGrid[7][8] = 'R';
    newGrid[6][8] = 'O';
    newGrid[5][8] = 'T';
    newGrid[4][8] = 'E';
    newGrid[3][8] = 'I';
    newGrid[2][8] = 'N';

    // write Excess	
    newGrid[2][0] = 'E';
    newGrid[3][1] = 'X';
    newGrid[4][2] = 'C';
    newGrid[5][3] = 'E';
    newGrid[6][4] = 'S';
    newGrid[7][5] = 'S';

    setGrid(newGrid);
  }, []);


  const handleCellSelect = (x, y, char) => {
    console.log(char);
    var newSelectedCells = [...selectedCells, [x, y]];
    setSelectedCells(newSelectedCells);

    var new_formed_Word = [...formed_Word, char];
    setFormed_word(new_formed_Word);

    const charString = new_formed_Word.join('');
    console.log(charString);


    if (newSelectedCells.length > 1) {

      // co-ordinates of the genesis cell
      const x1 = newSelectedCells[0][0];
      const y1 = newSelectedCells[0][1];

      // co-ordinates of the second cell
      const x2 = newSelectedCells[1][0];
      const y2 = newSelectedCells[1][1];

      // co-ordinates of the previos cell
      const prev_x = newSelectedCells[newSelectedCells.length - 2][0];
      const prev_y = newSelectedCells[newSelectedCells.length - 2][1];



      //calculate the constant
      var constant_Handler = () => {
        const constant = (y2 - y1) / (x2 - x1);

        const new_constant = (y1 - y) / (x1 - x);


        if (constant !== new_constant) {

          newSelectedCells = [[x, y]];
          setSelectedCells(newSelectedCells);

          new_formed_Word = [char];
          setFormed_word(new_formed_Word);
        };
      }

      if (x1 == x) {

        const constant = (y2 - y1);

        const new_constant = (y - prev_y);

        console.log('Constant :', constant);
        console.log('New constant :', new_constant);

        if (constant != new_constant) {

          newSelectedCells = [[x, y]];
          setSelectedCells(newSelectedCells);

          new_formed_Word = [char];
          setFormed_word(new_formed_Word);
        };
      }
      else (
        constant_Handler()
      )

    };

  };


  const handlePan = event => {


    const Y_input = event.nativeEvent.translationY;
    const X_input = event.nativeEvent.translationX;

    const row_index = row_pan.findIndex(value => value > X_input);
    const column_index = column_pan.findIndex(value => value > Y_input);


    const char = grid[row_index][column_index];
    console.log('chara', char);
    console.log(column_index,row_index);

    handleCellSelect(column_index,row_index, char);


    if (event.nativeEvent.translationX > 0 && event.nativeEvent.translationX < cell_width) {

      console.log('row 1')

    }

    if (event.nativeEvent.translationX > cell_width && event.nativeEvent.translationX < cell_X2) {

      console.log('row 2')

    }



  };


  return <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false} >

      <View style={styles.scoreBord}>

        <View>

          <Text>
            SCORE:20 POINTS
          </Text>
        </View>

      </View>

      <View style={styles.wordBord}>

        <View style={styles.wordRow}>

          <Text style={styles.word}>
            STORAGE
          </Text>
          <Text style={styles.word2}>
            SURPLUS
          </Text>
          <Text style={styles.word3}>
            RICH
          </Text>
        </View>
        <View style={styles.wordRow}>

          <Text style={styles.word4}>
            EXCESS
          </Text>
          <Text style={styles.word5}>
            EXPENSIVE
          </Text>
          <Text style={styles.word6}>
            PROTEIN
          </Text>

        </View>

      </View>

      <View ref={myViewRef}>

        <PanGestureHandler onGestureEvent={handlePan}>
          <View style={styles.grid}>
            {
              grid.map((row, x) => (

                <View key={x} style={styles.row}>
                  {row.map((cell, y) => (
                    <TouchableOpacity
                      key={y}
                      style={[
                        styles.cell,
                        selectedCells.some(([i, j]) => i === x && j === y) && styles.selected,
                      ]}

                    // onMoveShouldSetResponder={() => true}
                    // onPress={() => handleCellSelect(x, y, cell)}

                    >
                      <Text>{cell}</Text>
                    </TouchableOpacity>

                  ))}
                </ View>
              ))
            }

          </View>

        </PanGestureHandler>


      </View>

      <View style={styles.container}>




        <Text style={styles.header}>{formed_Word.join('')}</Text>
      </View>
    </ScrollView>
  </SafeAreaView >

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    elevation: 5,
    margin: 10,
    backgroundColor: '#fff',
    shadowOffset: { width: 30, height: 30 },
    shadowColor: '#37BC9B',
    shadowOpacity: 0.3,
    shadowRadius: 3,

  },

  wordBord: {

    elevation: 5,
    margin: 10,
    backgroundColor: '#fff',
    shadowOffset: { width: 30, height: 30 },
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius: 3,

  },
  scoreBord: {


    margin: 10,

  },
  wordRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,

  },
  word: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#f2e8cf',
    backgroundColor: '#76c893',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
  ,
  word2: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#f2e8cf',
    backgroundColor: '#52b69a',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
  ,
  word3: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#f2e8cf',
    backgroundColor: '#34a0a4',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  word4: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#f2e8cf',
    backgroundColor: '#168aad',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
  ,
  word5: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#f2e8cf',
    backgroundColor: '#1a759f',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  word6: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderColor: '#f2e8cf',
    backgroundColor: '#184e77',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
  ,
  header: {
    fontSize: 24,
    marginBottom: 20,
    backgroundColor: '#d9ed92',
    padding: 5,
    borderRadius: 15,
  },
  grid: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: windowWidth / 9,
    height: windowWidth / 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#ffd60a',
  },
  foundWords: {
    marginTop: 20,
    fontSize: 16,
  },
});
export default WordSearch;

