import React from 'react';
import styled from 'styled-components';
import RestartButton from './components/RestartButton';
import EndGame from './components/EndGame'


const Container = styled.div`
  margin: 10%;
  text-align: center;
  border: 0.1px solid grey;
`
const StyledButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1.2em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const StyledInput = styled.input`
  padding: 0.25em 1em;
  margin: 0.5em;
  color: palevioletred;
  background: white;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 1.2em
`
const Title = styled.h1`
  font-size: 2em;
  color: black;
`
const Text = styled.p`
  font-size: 1.3em;
`

function App() {
  const [numberToBeGuessed, setNumberToBeGuessed] = React.useState(Math.floor(1000 + Math.random() * 9000));
  console.log(numberToBeGuessed)

  const [guessHistory, setGuessHistory] = React.useState([])

  const convertInputToGuess = (numberString) => {
    const answerArray = numberToBeGuessed.toString().split('');
    const answerGuessed = numberString.toString().split('');
    let numOfCows = 0;
    let numOfBulls = 0;
  
    for(let i=0; i<4; i++) {
      if(answerGuessed.includes(answerArray[i])){
        if(answerArray[i] === answerGuessed[i]) {
          numOfBulls = numOfBulls + 1;
        } else {
          numOfCows = numOfCows + 1
        }
      }
    }
    return { guess: numberString, bulls: numOfBulls, cows: numOfCows }
  }
  
  const [typedInput, setTypedInput] = React.useState('')

  return (
    <Container>
      <Title>Play Bull and Cows</Title>
      <p>Computer has picked a number, it's time to make your guesses</p>
      {
        guessHistory.map(({ guess, cows, bulls }, index) => (
          <Text key={index}>{guess}: {cows} Cows, {bulls} Bulls </Text>
          
        ))
      }

      <StyledInput onChange={event => setTypedInput(event.target.value)} />
      <StyledButton onClick={() => {
        if (guessHistory.length < 3) {
          const guessObject = convertInputToGuess(typedInput)
          setGuessHistory([...guessHistory, guessObject])
        } 
      }
    }
      >Submit your Answer
      </StyledButton>
      <RestartButton 
        guessHistory={guessHistory} 
        setGuessHistory={setGuessHistory} 
        setNumberToBeGuessed={setNumberToBeGuessed}
        numberToBeGuessed={numberToBeGuessed}
        setTypedInput={setTypedInput}/>
        <EndGame 
        guessHistory={guessHistory} 
        setGuessHistory={setGuessHistory} 
        setNumberToBeGuessed={setNumberToBeGuessed}
        numberToBeGuessed={numberToBeGuessed}
        setTypedInput={setTypedInput}/>
    </ Container>
  );
}


export default App;



