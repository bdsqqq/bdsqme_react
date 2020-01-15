import React from 'react';
import styled from '@emotion/styled'
import Icons from './icons'

function Footer(){

    const breakpoints = [576, 768, 992, 1200]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const FooterWrapper = styled.div`
        position: absolute;
        left: 0;
        bottom: 15px;
        width: 100%;
        text-align: center;
        color: #f1f1f1;
    `
    
    const FooterNav = styled.div`
        width: 75%;
        margin: auto;

        text-align: center;
    `

    const NavItem = styled.span`
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 3px;
        font-weight: 400;
        font-style: normal;
        line-height: 1em;
        cursor: pointer;
        padding: 10px;
        `

    return(
        <FooterWrapper>
            <FooterNav>
                <NavItem>Contato</NavItem>
                <NavItem>TCC</NavItem>
            </FooterNav>
            <div>
                <span>IGOR BEDESQUI | 2020</span>
            </div>  
        </FooterWrapper>
    );
}

export default Footer