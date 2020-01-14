// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core'
import { faLinkedinIn, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function icons(){
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

    const FooterWrapper = css`
        position: absolute;
        left: 0;
        bottom: 15px;
        width: 100%;
        text-align: center;
    `

    return(
        <div css={css`${FooterWrapper}`}>
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
        </div>
    );
}

export default icons