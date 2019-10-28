import React from 'react';
function App() {
  const [numberToBeGuessed] = React.useState(Math.round(Math.random()*10000));
  console.log(numberToBeGuessed)
  const [userGuessedNumber, setUserGuessedNumber] = React.useState([])
  const [typedInput, setTypedInput] = React.useState('')

  const checkWinner = () => {
    if(userGuessedNumber === numberToBeGuessed) {
      return(
        <p>You won</p>
      )
    }
  }

  return (
    <>
      <h1>Play Bull and Cows</h1>
      {/* <p>Number to be guessed: {numberToBeGuessed}</p> */}
      <p>Your choice: {userGuessedNumber}</p>
      <input onChange={event => setTypedInput(event.target.value)}></input>
      <button 
        onClick={() =>  {setUserGuessedNumber(typedInput)}}
      >Submit your Answer
      </button>
      <Result answer={numberToBeGuessed} guess={userGuessedNumber} />
      {/* {userGuessedNumber === numberToBeGuessed && <p>You won</p>} */}
    </>
  );
}

function Result({ answer, guess }) {
  const answerArray = answer.toString().split('');
  const answerGuessed = guess.toString().split('');
  let cows = 0;
  let bulls = 0;

  for(let i=0; i<4; i++) {
    if(answerGuessed.includes(answerArray[i])){
      if(answerArray[i] == answerGuessed[i]) {
        bulls = bulls + 1;
      } else {
        cows = cows + 1
      }
    }
  }
  if(bulls === 4) {
    return(
      <h1>You won!</h1>
    )
  } else {
    return (
      `${bulls} bulls and ${cows} cows.  TRY AGAIN!`)
  }
}

export default App;



