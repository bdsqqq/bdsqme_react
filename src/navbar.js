import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'


function Nav(props){

    const breakpoints = [440, 576, 663, 992, 1200]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Header = styled.div`
        width: 75%;
        margin: auto;

        justify-content: space-evenly;
        display: flex;
        flex-flow: row wrap-reverse;

        ${mq[2]}{
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
        transition-delay: 0s;
        transition-duration: 0.3s;
        transition-property: opacity;
        order: 20;

        &:hover {
        opacity: 0.8;

        cursor: pointer;
        }

        ${mq[2]}{
            order: 0;
        }
    `

    const NavItem = styled.span`
        display: none;

        ${mq[0]}{
            display: block;
            font-size: 11px;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 2px;
            font-weight: 400;
            font-style: normal;
            line-height: 1em;

            cursor: pointer;
        }

        ${mq[2]}{
            display: block;
            padding: 10px 10px;
            margin-top: 28px;

            font-size: 16px;
        }
    `

    const Space = styled.span`
        color: rgba(255,255,255,0)
    `

    const isOnlyHeader = props.isOnlyHeader;

    if (isOnlyHeader) {
        return(
            <Header>
                <Logo>IGORBEDESQUI.COM</Logo>
            </Header>
        );
    }
    return (
        <Header>
            <NavItem><Link>Sobre<Space>_</Space>mim</Link></NavItem>
            <NavItem><Link>Contato</Link></NavItem>
            <Logo><Link>IGORBEDESQUI.COM</Link></Logo>
            <NavItem><Link>Projetos</Link></NavItem>
            <NavItem><Link>Coisas</Link></NavItem>
        </Header>
    );
}

export default Nav