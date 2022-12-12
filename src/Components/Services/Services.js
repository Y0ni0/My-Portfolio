import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { MainContainer } from '../Header/Header.styled'
import { StyledServiceHead, StyledServiceList, StyledServices, StyledServicesContainer } from './Services.styled'
function Services() {
    return (
        <MainContainer>
            <section id='services'>
                <h5>What I Offer</h5>
                <h2>Services</h2>

                <StyledServicesContainer>
                    <StyledServices>
                        <StyledServiceHead>
                            <h3>UI / UX Design</h3>

                        </StyledServiceHead>
                        <StyledServiceList>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Illustrating design ideas using storyboards, process flows and sitemaps</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Designing graphic user interface elements, like menus, tabs and widgets</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Build page navigation buttons and search fields</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Create original graphic designs like images, sketches and tables</p>
                            </li>
                        </StyledServiceList>
                    </StyledServices>
                    {/* End of UI / UX */}
                    <StyledServices>
                        <StyledServiceHead>
                            <h3>Frontend Web Development</h3>

                        </StyledServiceHead>
                        <StyledServiceList>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Determining the structure and design of web pages.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Striking a balance between functional and aesthetic design.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Ensuring web design is optimized for smartphones.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Building reusable code for future use.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Optimizing web pages for maximum speed and scalability.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Developing features to enhance the user experience.</p>
                            </li>
                        </StyledServiceList>
                    </StyledServices>
                    {/* End of Frontend Web Development */}
                    <StyledServices>
                        <StyledServiceHead>
                            <h3>Backend Web Development</h3>

                        </StyledServiceHead>
                        <StyledServiceList>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Collaborating with the front-end developers and other team members to establish objectives and design more functional,
                                    cohesive codes to enhance the user experience.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Developing ideas for new programs, products, or features by monitoring industry developments and trends.</p>
                            </li>

                        </StyledServiceList>
                    </StyledServices>

                </StyledServicesContainer>
            </section>
        </MainContainer>
    )
}

export default Services