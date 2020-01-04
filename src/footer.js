// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, {useState} from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { faLinkedinIn, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){

    const IconsWrapper = styled.div`
        position: absolute;
        left: 0;
        bottom: 30px;
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

    return(
        <IconsWrapper>
            <FontAwesomeIcon 
                css={css`
                    ${IconClass}
                `}
                icon={faLinkedinIn} size="2x"/>
            <FontAwesomeIcon 
                css={css`
                    ${IconClass}
                `}
                icon={faGithub} size="2x"/>
        </IconsWrapper>
    );
}

export default Footer