import React from 'react'
import CTA from './CTA'
import { StyledHeader, StyledHeaderContainer, MainContainer, StyledImage, StyledLink } from './Header.styled'
import ME2 from '../../Assets/file1.png';
import HeaderSocials from './HeaderSocials';


function Header() {
    return (
        <MainContainer>
            <StyledHeader>
                <StyledHeaderContainer >

                    <h5>Hello I'm</h5>
                    <h1>Yonathan Samuel</h1>
                    <h5 className='text-light'>FullStack Developer</h5>
                    <CTA />

                    <HeaderSocials />

                    <StyledImage>
                        <img src={ME2} alt='me' />
                    </StyledImage>
                    <StyledLink>
                        <a href='#contact' className='scroll__down'>Scroll Down</a>
                    </StyledLink>

                </StyledHeaderContainer>
            </StyledHeader>
        </MainContainer>


    )
}

export default Header
//
//
//