import React from 'react';
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

function RestartButton({ setGuessHistory, guessHistory, setNumberToBeGuessed, numberToBeGuessed, setTypedInput }) {
    if (guessHistory.length === 3) {
        return(
            <>
                <StyledButton onClick={() => {
                    setGuessHistory([]);
                    setNumberToBeGuessed(Math.floor(1000 + Math.random() * 9000));
                }}>Restart</StyledButton>
                <StyledImage src="https://www.clipartwiki.com/clipimg/full/243-2435844_over-by-mohanmadabd-logo-game-over-png.png" alt="You Lost!"/>
                <h3>The number was: {numberToBeGuessed}</h3>
            </>
        )
    } else {
        return null
    }
}

export default RestartButton;