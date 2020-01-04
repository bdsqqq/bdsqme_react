import React from 'react';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'


function Nav(){

    const breakpoints = [576, 768, 992, 1200]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Header = styled.div`
        width: 75%;
        margin: auto;

        justify-content: space-evenly;
        display: flex;
        flex-flow: row wrap-reverse;

        ${mq[1]}{
            flex-flow: row nowrap;
        }
    `

    const Logo = styled.span`
        padding: 15px;
        margin: 15px;
        font-size: 24px;
        color: rgb(231, 208, 186);
        font-weight: 500;
        font-family: 'Abel';
        width: auto;
        order: 20;

        &:hover {
        color: white;
        }

        ${mq[1]}{
            order: 0;
        }
    `

    const NavItem = styled.span`
        padding: -10px -10px;
        font-size: 16px;

        ${mq[1]}{
            padding: 34px 10px;
        }
    `

    const Space = styled.span`
        color: rgba(255,255,255,0)
    `

    return (
        <Header>
            <NavItem>Fale<Space>_</Space>Comigo</NavItem>
            <NavItem>Fale<Space>_</Space>Comigo</NavItem>
            <Logo>IGORBEDESQUI.COM</Logo>
            <NavItem>Fale<Space>_</Space>Comigo</NavItem>
            <NavItem>Fale<Space>_</Space>Comigo</NavItem>
        </Header>
    )
}

export default Nav