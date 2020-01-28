import React from 'react';
import HeroImage from './heroImage';
import Nav from './navbar';
import Footer from './footer'
import HeroText from './heroText'

function Contato(){

    return(
        <>
            <HeroImage size={70} photoURL={'https://images.unsplash.com/photo-1565207470645-0c3bff5d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'} />
            <Nav isOnlyHeader={false} />
            <HeroText title='Contato' text='Para contato profissional, por favor, mande um email para igorbedesqui@gmail.com' />
            <Footer/>
        </>
    )
}

export default Contato