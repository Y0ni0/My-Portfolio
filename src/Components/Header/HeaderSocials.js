import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com' target="__blank"><BsLinkedin /></a>
            <a href='https://github.com' target="__blank"><BsGithub /></a>

        </div>
    )
}

export default HeaderSocials