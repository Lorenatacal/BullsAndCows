import React from 'react';
import styled from 'styled-components';
import Result from './components/Result'

const StyledImage = styled.img`
  width: 10%;
  height: 10%;
`
const Container = styled.div`
  margin: 10%;
  text-align: center;
  border: 0.1px solid grey;
`
const ImageDiv = styled.div`
  margin-top: 2%
`
const Won = styled.img`
  width: 30%;
  height: 30%;
`
const StyledButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1.1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: white;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 1em
`
const Title = styled.h1`
  font-size: 2em;
  color: black;
`
const Text = styled.p`
  font-size: 1.3em;
`

/*
  [
    { guess: 7201, cows: 2, bulls: 1 },
    { guess: 8303, cows: 0, bulls: 2 }
  ]

*/

function App() {
  const [numberToBeGuessed] = React.useState(Math.floor(1000 + Math.random() * 9000));
  console.log(numberToBeGuessed)
  const [userGuessedNumber, setUserGuessedNumber] = React.useState('')
  const [typedInput, setTypedInput] = React.useState('')
  const [userInputHistory, setUserInputHistory] = React.useState([])
  const [listOfAttempt, setListOfAttempt] = React.useState([])
  // const listOfAttempt = setUserInputHistory(1234)

 const onClick = (event) => {
    const setUserGuessedNumber = [...userGuessedNumber, typedInput]
    setListOfAttempt([...listOfAttempt, setUserGuessedNumber])
    console.log(setUserGuessedNumber, "setUser", setListOfAttempt, "setAttept")
 }
  
  return (
    <Container>
      <Title>Play Bull and Cows</Title>
      {/* <p>Number to be guessed: {numberToBeGuessed}</p> */}
      <Text>Your choice: {userGuessedNumber}</Text>
      <StyledInput onChange={event => setTypedInput(event.target.value)} />
      <StyledButton onClick={onClick}
        // onClick={() =>  {setUserGuessedNumber(typedInput)}}

      >Submit your Answer
      </StyledButton>
      <ul>{listOfAttempt}</ul>
      <Result answer={numberToBeGuessed} guess={userGuessedNumber} />
      {/* {userGuessedNumber === numberToBeGuessed && <p>You won</p>} */}
    </ Container>
  );
}


export default App;



