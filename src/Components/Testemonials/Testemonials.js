import React from 'react'
import { MainContainer } from '../Header/Header.styled'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import { AnotherConatiner, StyledClientAvatar, StyledTesimonial, StyledTestemonialContainer } from './Testemonials.styled'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'St.Delassal School principal',
        review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis vel feugiat elit, sit amet suscipit ipsum. Nam sed lectus id metus ullamcorper eleifend eu ac turpis.Cras ut nisi tortor.'
    },
    {
        avatar: AVTR2,
        name: 'AASTU Capston Project examiners',
        review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis vel feugiat elit, sit amet suscipit ipsum. Nam sed lectus id metus ullamcorper eleifend eu ac turpis.Cras ut nisi tortor.'
    },
]

export default function Testemonials() {
    return (
        <MainContainer>
            <section id='testemonials'>
                <h5>Review from clients</h5>
                <h2>Testemonials</h2>
                <AnotherConatiner>
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{ clickable: true }}>
                        <StyledTestemonialContainer>
                            {
                                data.map(({ avatar, name, review }, index) => {
                                    return (
                                        <SwiperSlide>
                                            <StyledTesimonial>
                                                <StyledClientAvatar key={index}>
                                                    <img src={avatar} alt='avatar' />
                                                </StyledClientAvatar>
                                                <h5>{name}</h5>
                                                <small>
                                                    {review}
                                                </small>
                                            </StyledTesimonial>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </StyledTestemonialContainer>
                    </Swiper>
                </AnotherConatiner>
            </section>
        </MainContainer>
    )
}
