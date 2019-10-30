import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 25%;
  width: 25%
`
const StyledButton = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1.2em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin-left: 1%;
`

function EndGame({ setGuessHistory, guessHistory, setNumberToBeGuessed, numberToBeGuessed, setTypedInput }) {
    for(let i=0; i<guessHistory.length; i++) {
      if(guessHistory[i].bulls === 4){
        return (
            <>
            <StyledButton onClick={() => {
                    setGuessHistory([]);
                    setNumberToBeGuessed(Math.floor(1000 + Math.random() * 9000));
                }}>Restart</StyledButton>
            <StyledImage src="http://halopublishing.com/blog/wp-content/uploads/2015/05/winner.jpg" />
            </>
        )
      }
    }
    return null
  }

  export default EndGame;