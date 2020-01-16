import React from 'react'
import styled from '@emotion/styled'


function HeroText(props){

    const breakpoints = [576, 663, 992, 1200]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Wrapper = styled.div`
        max-width: 401px;
        min-width: auto;
        text-align: center;
        margin: auto;

        ${mq[1]}{
            max-width: 504px;
        }
    `

    const Title = styled.h1`
        font-family: 'montserrat';
        font-size: 34px;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-align: center;
        color: white;
        margin: 56px 0 18px;
        line-height: 90px;

        ${mq[1]}{
            font-size: 72px;
            letter-spacing: 7px;
            margin: 144px 0 18px;
        }

        ${mq[2]}{
            font-size: 96px;
            letter-spacing: 9px;
        }
    `

    const Text = styled.p`
        font-size: 14px;
        letter-spacing: 2px;
        color: #E7D0BA;
    `

    return(
        <>
            <Title>{props.title}</Title>
            <Wrapper>
                <Text>{props.text}</Text>
            </Wrapper>
        </>
    )
}

export default HeroText