import React from 'react'
import CTA from './CTA'
import { StyledHeader, StyledHeaderContainer, MainContainer, StyledImage, StyledLink } from './Header.styled'
import ME from '../../Assets/My-picture1.jpg';
import HeaderSocials from './HeaderSocials';


function Header() {
    return (

        <StyledHeader>
            <StyledHeaderContainer >
                <MainContainer>
                    <h5>Hello I'm</h5>
                    <h1>Yonathan Samuel</h1>
                    <h5 className='text-light'>FullStack Developer</h5>
                    <CTA />

                    <HeaderSocials />

                    <StyledImage>
                        <img src={ME} alt='me' />
                    </StyledImage>
                    <StyledLink>
                        <a href='#contact' className='scroll__down'>Scroll Down</a>
                    </StyledLink>
                </MainContainer>
            </StyledHeaderContainer>
        </StyledHeader>


    )
}

export default Header
//
//
//