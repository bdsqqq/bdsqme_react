import React from 'react';
import styled from '@emotion/styled'
import Icons from './icons'

function Footer(){

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
        font-size: 14px;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: 400;
        font-style: normal;
        line-height: 1em;
        cursor: pointer;
        padding: 10px;
        `

    return(
        <FooterWrapper>
                <div>
                <span>IGOR BEDESQUI | 2020</span>
                </div>
            <FooterNav>
                <NavItem>Contato</NavItem>
                <NavItem>TCC</NavItem>
            </FooterNav>
            
        </FooterWrapper>
    );
}

export default Footer