import React from 'react'
import ME from '../../Assets/me22.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { StyledAboutContainer, StyledAboutContent, Styledcard, StyledCards, StyledImageContainer, StyledImageDiv } from './About.styled'
import { MainContainer } from '../Header/Header.styled'
import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
    return (
        <MainContainer>
            <section id='about'>
                <h5>Get To Know Me</h5>
                <h2>About Me</h2>


                <StyledAboutContainer>
                    <StyledImageContainer>
                        <StyledImageDiv>
                            {/* <img src={ME} alt='about' /> */}
                            <LazyLoadImage src={ME} alt='about' effect='blur' placeholderSrc={ME} />
                        </StyledImageDiv>
                    </StyledImageContainer>
                    <StyledAboutContent>
                        <StyledCards>
                            <Styledcard>
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <small>1+ Year in Web Development</small>
                            </Styledcard>

                            <Styledcard>
                                <FiUsers className='about__icon' />
                                <h5>Programming Languages</h5>
                                <small>12+ languages</small>
                            </Styledcard>

                            <Styledcard>
                                <VscFolderLibrary className='about__icon' />
                                <h5>Projects</h5>
                                <small>10+ completed</small>
                            </Styledcard>
                        </StyledCards>
                        <p> Motivated software engineering graduate from Addis Ababa Science and Technology University with a passion for developing innovative software programs that can make a real impact.
                            Focused and quick-learner with an eagerness to advance and expand overall computer related skill set through targeted mentorship and challenging projects.
                            Enjoys working collaboratively but also can run with projects independently.
                            Passionate about the prospect of finding tech related solutions to real world problems and currently on the look out for opportunities to make a real impact.
                        </p>
                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                    </StyledAboutContent>
                </StyledAboutContainer>

            </section>
        </MainContainer>
    )
}

export default About