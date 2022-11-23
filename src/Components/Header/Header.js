import React from 'react'
import CTA from './CTA'
import { STHeader } from './Header.styled'
import ME from '../../Assets/My-picture1.jpg';
import HeaderSocials from './HeaderSocials';

function Header() {
    return (
        <>

            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Yonathan Samuel</h1>
                <h5 className='text-light'>FullStack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me' />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>

        </>
    )
}

export default Header
//
//
//