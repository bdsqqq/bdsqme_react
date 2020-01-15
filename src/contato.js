import React from 'react'
import Nav from './navbar';
import Footer from './footer'
import HeroText from './heroText'

function Contato(){

    return(
        <>
            <Nav isOnlyHeader={false} />
            <HeroText title='Contato' text='Before shows, I like to take pictures. It helps me relax and also I get to slink around the theater in a scarf scoffing at working class people.' />
            <Footer/>
        </>
    )
}

export default Contato