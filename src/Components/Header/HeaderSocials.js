import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { StyledHeaderSocials } from './Header.styled'

function HeaderSocials() {
    return (
        <StyledHeaderSocials>
            <div>
                <a href='https://linkedin.com' target="__blank"><BsLinkedin /></a>
                <a href='https://github.com' target="__blank"><BsGithub /></a>
            </div>
        </StyledHeaderSocials>
    )
}

export default HeaderSocials