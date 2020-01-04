import React from 'react';
import styled from '@emotion/styled'


function Header(){
    
    const breakpoints = [576, 768, 992, 1200]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Header = styled.div`
    width: 100%;
    margin: auto;
    padding: 30px 0;
    `

    const LogoWrapper = styled.div`
        z-index: 1001;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        text-align: center;
        vertical-align: middle;

        width: 255px;
    `

    const Logo = styled.span`
        padding: 30px;
        font-size: 30px;
        color: rgb(231, 208, 186);
        font-weight: 500;
        font-family: 'Abel';

        &:hover {
            color: white;
        }
        
    `

    const HeaderNav = styled.div`
        margin-left: o;
        margin-top: 10;
        margin-bottom: 0;
        box-sizing: border-box;
        display: block;
        vertical-align: middle;

        ${mq[0]}{
            margin-left: 9px;
            margin-top: -26px;
            margin-bottom: -3px;
        }
    `
    const MainNavWrapper = styled.div`
        text-align: center;
        position: relative;
        display: block;
    `

    const NavItem = styled.span`
        padding: 30px 10px;
        font-size: 14px;
        margin-right: 0px;

        &:nth-of-type(2) {
            margin-right: 0px;
            margin-left: 0px;
        }

        ${mq[0]}{
            margin-right: 157.5px;

        &:nth-of-type(2) {
            margin-right: 0px;
            margin-left: 157.5px;
        }
        }
    `

    return (
        <Header>

            <LogoWrapper>
                <Logo>IGORBEDESQUI.COM</Logo>
            </LogoWrapper>
            
            
            <HeaderNav>
                <MainNavWrapper>
                    <NavItem>Fale Comigo</NavItem>
                    <NavItem>Projetos</NavItem>
                </MainNavWrapper>
            </HeaderNav>
        </Header>
    )
}

export default Header