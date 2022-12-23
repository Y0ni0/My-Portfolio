import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MainContainer } from '../Header/Header.styled'

import { StyledExperienceCards, StyledExperienceContainer, StyledExperienceContent, StyledExperienceDetails } from './Experience.styled'


function Experience() {
    return (
        <MainContainer>
            <section id='experience'>
                <h5>The Skills I have</h5>
                <h2>My Experience</h2>


                <StyledExperienceContainer>
                    <StyledExperienceCards>
                        <h3>Frontend Development</h3>
                        <StyledExperienceContent>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>HTML</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>CSS</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>JavaScript</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>React / Redux</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>StyledComponents</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>Typescript</h4>
                            </StyledExperienceDetails>
                        </StyledExperienceContent>
                    </StyledExperienceCards>

                    {/* End of Frontend */}
                    <StyledExperienceCards>
                        <h3>Backend Development</h3>
                        <StyledExperienceContent>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>Node JS</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>Express</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>MongoDB</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>MySQL</h4>
                            </StyledExperienceDetails>
                            <StyledExperienceDetails>
                                <BsPatchCheckFill className='icons' />
                                <h4>Java</h4>
                            </StyledExperienceDetails>

                        </StyledExperienceContent>
                    </StyledExperienceCards>
                </StyledExperienceContainer>

            </section>
        </MainContainer>
    )
}

export default Experience