import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { StyledHeaderSocials } from './Header.styled'

function HeaderSocials() {
    return (
        <StyledHeaderSocials>

            <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com' target="_blank"><BsGithub /></a>

        </StyledHeaderSocials>
    )
}

export default HeaderSocials