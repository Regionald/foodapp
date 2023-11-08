import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const WordSearch = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const gridSize = 9;
  const [grid, setGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [permCells, setPermCells] = useState([]);
  const [formed_Word, setFormed_word] = useState([]);
  const wordsToInsert = ["RECYCLE", "REDUCE", "REUSE", "OFFCUTS", "DONATE", "COMPOST"];
  const ref1 = useRef();


  const shouldApplyStyles = (wordToCheck) => {
    console.log('Function called with word :', wordToCheck);
    return foundWords.includes(wordToCheck);

  };

  useEffect(() => {

    const generateRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const splitWordIntoChars = (word) => {
      return word.split('');
    };

    const newGrid = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(generateRandomLetter());
      }
      newGrid.push(row);
    };
    // write RECYCLE
    newGrid[0][0] = 'R';
    newGrid[0][1] = 'E';
    newGrid[0][2] = 'C';
    newGrid[0][3] = 'Y';
    newGrid[0][4] = 'C';
    newGrid[0][5] = 'L';
    newGrid[0][6] = 'E';

    // write REUSE
    newGrid[0][0] = 'R';
    newGrid[1][0] = 'E';
    newGrid[2][0] = 'U';
    newGrid[3][0] = 'S';
    newGrid[4][0] = 'E';

    // write DONATE
    newGrid[8][0] = 'D';
    newGrid[7][1] = 'O';
    newGrid[6][2] = 'N';
    newGrid[5][3] = 'A';
    newGrid[4][4] = 'T';
    newGrid[3][5] = 'E';


    // write COMPOST
    newGrid[8][1] = 'C';
    newGrid[8][2] = 'O';
    newGrid[8][3] = 'M';
    newGrid[8][4] = 'P';
    newGrid[8][5] = 'O';
    newGrid[8][6] = 'S';
    newGrid[8][7] = 'T';

    // write OFFCUTS
    newGrid[8][8] = 'O';
    newGrid[7][8] = 'F';
    newGrid[6][8] = 'F';
    newGrid[5][8] = 'C';
    newGrid[4][8] = 'U';
    newGrid[3][8] = 'T';
    newGrid[2][8] = 'S';


    // write REDUCE

    newGrid[7][2] = 'R';
    newGrid[7][3] = 'E';
    newGrid[7][4] = 'D';
    newGrid[7][5] = 'U';
    newGrid[7][6] = 'C';
    newGrid[7][7] = 'E';


    setGrid(newGrid);
  }, []);


  const handleCellSelect = (x, y, char) => {
    console.log(char);
    var newSelectedCells = [...selectedCells, [x, y]];
    setSelectedCells(newSelectedCells);

    var new_formed_Word = [...formed_Word, char];
    setFormed_word(new_formed_Word);

    const charString = new_formed_Word.join('');
    console.log('Formed word:', charString);


    if (wordsToInsert.includes(charString)) {

      console.log(charString, ": is available on the list");
      if (!foundWords.includes(charString)) {

        var points = charString.length;
        setScore(score + points);
      
        if (charString == 'RECYCLE') {

         setPermCells([...permCells,[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],[0,6]]);
        }
        else if(charString == 'COMPOST'){
          setPermCells([...permCells,[8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6],[8,7]]);
       
        }
        else if(charString == 'DONATE'){
          setPermCells([...permCells,[8, 0], [7, 1], [6, 2], [5, 3], [4, 4],[3,5]]);
       
        }
        else if(charString == 'REDUCE'){
          setPermCells([...permCells,[7, 2], [7, 3], [7, 4], [7, 5], [7, 6],[7,7]]);
       
        }
        else if(charString == 'REUSE'){
          setPermCells([...permCells,[0, 0], [1, 0], [2, 0], [3, 0],[4,0]]);
       
        }else if(charString == 'OFFCUTS'){
          setPermCells([...permCells,[8, 8], [7, 8], [6, 8], [5, 8], [4, 8], [3, 8],[2,8]]);
       
        }
        else {
          console.log('not there');
       
        }
        setFoundWords([...foundWords, charString]);

      }
    }

    console.log(foundWords);

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

      const check_Word = (word_input, list) => {
        if (wordsToInsert.includes(word_input)) {
          console.log('The word is in the list', word_input);
        }
      };

      //calculate the constant
      var constant_Handler = () => {
        const constant = (y2 - y1) / (x2 - x1);

        const new_constant = (y1 - y) / (x1 - x);


        if (constant !== new_constant) {

          newSelectedCells = [[x, y]];
          setSelectedCells(newSelectedCells);

          new_formed_Word = [char];
          setFormed_word(new_formed_Word);

          check_Word(new_formed_Word);
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

  if (foundWords.length == 6) {
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

    return <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={styles.scoreBord}>

          <View>

            <Text>
              SCORE:{score} POINTS
            </Text>
          </View>

        </View>

        <View style={styles.wordBord}>

          <View style={styles.wordRow}>

            <Text ref={ref1} style={[styles.word, shouldApplyStyles('RECYCLE') ? styles.linethrough : styles.word]}>
              RECYCLE
            </Text>
            <Text style={[styles.word2, shouldApplyStyles('REUSE') ? styles.linethrough : styles.word]}>
              REUSE
            </Text>
            <Text style={[styles.word3, shouldApplyStyles('REDUCE') ? styles.linethrough : styles.word]}>
              REDUCE
            </Text>
          </View>
          <View style={styles.wordRow}>

            <Text style={[styles.word4, shouldApplyStyles('DONATE') ? styles.linethrough : styles.word]}>
              DONATE
            </Text>
            <Text style={[styles.word5, shouldApplyStyles('OFFCUTS') ? styles.linethrough : styles.word]}>
              OFFCUTS
            </Text>
            <Text style={[styles.word6, shouldApplyStyles('COMPOST') ? styles.linethrough : styles.word]}>
              COMPOST
            </Text>

          </View>

        </View>

        <View style={styles.container}>
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
                        permCells.some(([i, j]) => i === x && j === y) && styles.selected,
                      ]}
                      onMoveShouldSetResponder={() => true}
                      onPress={() => handleCellSelect(x, y, cell)}
                    >
                      <Text>{cell}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))
            }

          </View>


          <Text style={styles.header}>{formed_Word.join('')}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  }





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
  linethrough: {

    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    backgroundColor: '#ffd60a',

  }
  ,
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
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
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