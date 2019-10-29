import React from 'react';
import styled from 'styled-components';

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

function Result({ answer, guess }) {
    const answerArray = answer.toString().split('');
    const answerGuessed = guess.toString().split('');
    let cows = 0;
    let bulls = 0;
  
    for(let i=0; i<4; i++) {
      if(answerGuessed.includes(answerArray[i])){
        if(answerArray[i] === answerGuessed[i]) {
          bulls = bulls + 1;
        } else {
          cows = cows + 1
        }
      }
    }
    if(bulls === 4) {
      return(
        <ImageDiv>
        <Won src = "http://halopublishing.com/blog/wp-content/uploads/2015/05/winner.jpg" />
        </ImageDiv>
      )
    } else {
      return (
        <>
        <Text>{bulls} bulls and</Text> 
        <StyledImage src="https://i.dlpng.com/static/png/1177844-charging-bull-cattle-clip-art-bull-png-transparent-images-cow-and-bull-png-900_520_preview.png" />
        <Text>{cows} cows</Text>
        <StyledImage src="https://www.fourjay.org/myphoto/f/45/453681_cows-png.jpg" />
        <h1>Try Again!</h1>
        </>
      )
    }
  }

  export default Result