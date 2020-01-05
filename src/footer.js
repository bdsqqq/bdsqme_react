// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { faLinkedinIn, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){

    const FooterWrapper = styled.div`
        position: absolute;
        left: 0;
        bottom: 15px;
        width: 100%;
        text-align: center;
    `

    const IconClass = css`
        transition-delay: 0s;
        transition-duration: 0.3s;
        transition-property: opacity;

        padding: 10px;

        text-decoration: none;
        color: #909090;
        &:hover{
            opacity: 0.7;
            cursor: pointer;
        }
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
            <FontAwesomeIcon 
                css={css`
                    ${IconClass}
                `}
                icon={faLinkedinIn} size="2x" />
            <FontAwesomeIcon 
                css={css`
                    ${IconClass}
                `}
                icon={faGithub} size="2x"/>
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