import React from 'react';
import HeroImage from './heroImage';
import Nav from './navbar';
import Footer from './footer'
import HeroText from './heroText'

function Tcc(){

    const texto = `Em 2018 eu produzi um TCC sobre privatização e seus impactos na ecônomia e foi uma das coisas mais difíceis que fiz na minha vida. Eu amo aprender e a experiência de tentar trabalhar em equipe foi incrível.
    Eu só tenho a agradecer a meus colégas e professores.`

    return(
        <>
            <HeroImage size={70} photoURL={'https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-15/e35/43725076_279790062674957_4255775464637571080_n.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=z0m2hwTPIRgAX9_QWGR&oh=b9f85a0856608a68135b442685d9b5ed&oe=5EC105AD'} />
            <Nav isOnlyHeader={false} />
            <HeroText title='TCC' text={texto} />
            <Footer/>
        </>
    )
}

export default Tcc