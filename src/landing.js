import React, { useState, useEffect, useRef  } from 'react'
import { Link } from 'react-router-dom'
import HeroImage from './heroImage';
import Nav from './navbar';
import Icons from './icons'

import styled from '@emotion/styled'

function Landing(){

    const breakpoints = [576, 663, 992, 1200]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const HeaderText = styled.h1`
        width: 80%;
        margin: 5% auto;
        margin-top: 15%;
        text-align: center;
        color: white;
        font-size: 2em;
        font-family: 'Abel';
        text-transform: uppercase;

        ${mq[1]}{
            margin-top: 10%;
            font-size: 4em;
        }
    `

    const HeaderChange = styled.span`
        
        text-decoration: underline wavy gold;
    `

    const ButtonWrapper = styled.div`
        position: relative;
        width: 90vw;
        margin: 0 auto;
        top: 1em;

        display: flex;
        flex-direction: column;

        ${mq[1]}{
            width: 36rem;

            display: grid;
            grid-gap: 1em;
            grid-template-columns: 3fr 5fr;    
        }

        ${mq[2]}{

        }
    `


    const ButtonLink = styled(Link)`
        cursor: pointer;

        transition-duration: 0.3s;
        transition-property: color, background-color;
        transition-timing-function: ease-in-out;

        background-clip: border-box;
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;

        letter-spacing: .2em;
        text-align: center;
        font-size: 0.8em;
        font-family: 'Open Sans';

        padding-left: 1.44em;
        padding-right: calc(1.44em - .2em);
        padding-bottom: 1em;
        padding-top: 1em;
        margin: .5em auto;
        
        ${mq[1]}{
            margin: .5em;
            font-size: .9em;
        }
        
        &:hover{
            color: black;
            background-color: #fff;
        }
    `


    const [i, setI] = useState(0);
    const [delay, setDelay] = useState(3000);

    const adjList = ["Incrível.", "Único.", "Novo.", "Original.", "Extraordinário."];
    const adjLength = adjList.length
    const zeroTo = (input, maxValue ) => {
        if(input < maxValue){
            return input+1;
        }else{
            return 0;
        }
    }

    const muda = () => setI(zeroTo(i, adjLength-1));

    useInterval(() => {
        muda();
    }, delay);


    return(
        <>
            <HeroImage size={100} photoURL={'https://images.unsplash.com/photo-1428452932365-4e7e1c4b0987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'} />
            <Nav isOnlyHeader={true} />
            <div>
                <HeaderText>
                    Faça algo
                    <HeaderChange> {adjList[i]} </HeaderChange>
                </HeaderText>
                <ButtonWrapper>
                    <ButtonLink to={'/contato'}>Fale comigo!</ButtonLink>
                    <ButtonLink>Veja meus projetos...</ButtonLink>
                </ButtonWrapper>
            </div>
            <Icons />
        </>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

export default Landing