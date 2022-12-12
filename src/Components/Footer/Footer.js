import React from 'react'
import { ImLinkedin } from 'react-icons/im'
import { BsGithub } from 'react-icons/bs'
import { FooterCopyright, StyledFooterContainer, StyledFooterSocials, StyledUlPermalinks } from './Footer.styled'

function Footer() {
    return (
        <StyledFooterContainer>
            <a href='#' className='footer_logo'>Yonathan</a>
            <StyledUlPermalinks>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testemonials'>Testemonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </StyledUlPermalinks>
            <StyledFooterSocials>
                <a href='https://www.linkedin.com/in/yonathan-samuel-60731a21a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrNgHsxUORWmVOJbObBoaPA%3D%3D'>
                    <ImLinkedin />
                </a>
                <a href='https://github.com/Y0ni0'><BsGithub /></a>
            </StyledFooterSocials>
            <FooterCopyright>
                <small>&copy; Yonathan </small>
            </FooterCopyright>
        </StyledFooterContainer>

    )
}

export default Footer