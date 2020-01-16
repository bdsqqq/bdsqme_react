import React from 'react'
import Nav from './navbar';
import Footer from './footer'
import HeroText from './heroText'

function Contato(){

    return(
        <>
            <Nav isOnlyHeader={false} />
            <HeroText title='Contato' text='Para contato profissional, por favor, mande um email para igorbedesqui@gmail.com' />
            <Footer/>
        </>
    )
}

export default Contato