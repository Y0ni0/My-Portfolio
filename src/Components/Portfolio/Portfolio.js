import React from 'react'
import { MainContainer } from '../Header/Header.styled'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'
import { StyledPortfolioContainer, StyledPortfolioCTA, StyledPortfolioImage, StyledPortfolioItems } from './Portfolio.styled'

export default function Portfolio() {
    return (
        <MainContainer>
            <section id='portfolio'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>

                <StyledPortfolioContainer>
                    <StyledPortfolioItems>
                        <StyledPortfolioImage>
                            <img src={IMG1} alt="" />
                        </StyledPortfolioImage>
                        <h3>This is a Portfolio Item Title</h3>
                        <StyledPortfolioCTA>
                            <a href='https://github.com' className='btn'>Github</a>
                            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </StyledPortfolioCTA>
                    </StyledPortfolioItems>
                    <StyledPortfolioItems>
                        <StyledPortfolioImage>
                            <img src={IMG1} alt="" />
                        </StyledPortfolioImage>
                        <h3>This is a Portfolio Item Title</h3>
                        <StyledPortfolioCTA>
                            <a href='https://github.com' className='btn'>Github</a>
                            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </StyledPortfolioCTA>
                    </StyledPortfolioItems>
                    <StyledPortfolioItems>
                        <StyledPortfolioImage>
                            <img src={IMG1} alt="" />
                        </StyledPortfolioImage>
                        <h3>This is a Portfolio Item Title</h3>
                        <StyledPortfolioCTA>
                            <a href='https://github.com' className='btn'>Github</a>
                            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </StyledPortfolioCTA>
                    </StyledPortfolioItems>
                    <StyledPortfolioItems>
                        <StyledPortfolioImage>
                            <img src={IMG1} alt="" />
                        </StyledPortfolioImage>
                        <h3>This is a Portfolio Item Title</h3>
                        <StyledPortfolioCTA>
                            <a href='https://github.com' className='btn'>Github</a>
                            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </StyledPortfolioCTA>
                    </StyledPortfolioItems>
                    <StyledPortfolioItems>
                        <StyledPortfolioImage>
                            <img src={IMG1} alt="" />
                        </StyledPortfolioImage>
                        <h3>This is a Portfolio Item Title</h3>
                        <StyledPortfolioCTA>
                            <a href='https://github.com' className='btn'>Github</a>
                            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </StyledPortfolioCTA>
                    </StyledPortfolioItems>
                    <StyledPortfolioItems>
                        <StyledPortfolioImage>
                            <img src={IMG1} alt="" />
                        </StyledPortfolioImage>
                        <h3>This is a Portfolio Item Title</h3>
                        <StyledPortfolioCTA>
                            <a href='https://github.com' className='btn'>Github</a>
                            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </StyledPortfolioCTA>
                    </StyledPortfolioItems>

                </StyledPortfolioContainer>
            </section>
        </MainContainer>
    )
}
