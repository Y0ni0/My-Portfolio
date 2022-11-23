import React from 'react'
import CV from '../../Assets/Yonathan Samuel Resume.pdf'
import { StayledCta } from './Header.styled'

function CTA() {
    return (
        <StayledCta>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </StayledCta>

    )
}

export default CTA
//
//
//