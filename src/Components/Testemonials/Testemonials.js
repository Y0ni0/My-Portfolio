import React from 'react'
import { MainContainer } from '../Header/Header.styled'
import AVTR1 from '../../Assets/avatar1.png'
import AVTR2 from '../../Assets/avatar2.png'
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
        review: 'The school fee reciept management web app developed by Yonathan and his team has been facilitating the school fee management system by automating the printing tasks that used to be tedius and time consuming.'
    },
    {
        avatar: AVTR2,
        name: 'AASTU Capston Project examiners',
        review: 'We are Glad that we have selected the creativET stock photo sharing platform as one of the top three senior year capston projects. Their execution and team work displayed is a quality that has been reflecting brightly.'
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
