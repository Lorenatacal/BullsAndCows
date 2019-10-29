import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1.2em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin-left: 1%;
`

function RestartButton({ setGuessHistory, guessHistory, setNumberToBeGuessed}) {
    if (guessHistory.length === 3) {
        return(
            <StyledButton onClick={() => {
                setGuessHistory([]);
                setNumberToBeGuessed(Math.floor(1000 + Math.random() * 9000))
            }}>Restart</StyledButton>
        )
    } else {
        return null
    }
}

export default RestartButton;