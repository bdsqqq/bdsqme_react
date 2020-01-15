import React from 'react'
import styled from '@emotion/styled'


function HeroText(props){

    const Title = styled.h1`
        font-family: 'montserrat';
        font-size: 96px;
        letter-spacing: 9px;
        text-transform: uppercase;
        text-align: center;
        color: white;
    `

    const Text = styled.p`
        font-size: 14px;
        text-align: center;
    `

    return(
        <>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </>
    )
}

export default HeroText