import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MainContainer } from '../Header/Header.styled'
import { StyledExperienceContainer } from './Experience.styled'


function Experience() {
    return (
        <MainContainer>
            <section id='experience'>
                <h5>The Skills I have</h5>
                <h2>My Experience</h2>


                <StyledExperienceContainer>
                    <div className='experience__frontend'>
                        <h3>Frontend Development</h3>
                        <div className='experience__content'>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>HTML</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>CSS</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>JavaScript</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>React</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>StyledComponents</h4>
                            </article>
                        </div>
                    </div>

                    {/* End of Frontend */}
                    <div className='experience__backend'>
                        <h3>Backend Development</h3>
                        <div className='experience__content'>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>Node JS</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>Express</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>MongoDB</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>MySQL</h4>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill />
                                <h4>Java</h4>
                            </article>
                        </div>
                    </div>
                </StyledExperienceContainer>

            </section>
        </MainContainer>
    )
}

export default Experience