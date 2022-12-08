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
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon' />
                                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                            </li>
                        </StyledServiceList>
                    </StyledServices>

                </StyledServicesContainer>
            </section>
        </MainContainer>
    )
}

export default Services