import React from 'react'
import { MainContainer } from '../Header/Header.styled'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'
import { StyledPortfolioContainer, StyledPortfolioCTA, StyledPortfolioImage, StyledPortfolioItems } from './Portfolio.styled'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://driblle.com/shots'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Charts templates & infographics in figma',
        github: 'https://github.com',
        demo: 'https://driblle.com/shots'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Charts templates & infographics in figma',
        github: 'https://github.com',
        demo: 'https://driblle.com/shots'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Charts templates & infographics in figma',
        github: 'https://github.com',
        demo: 'https://driblle.com/shots'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Charts templates & infographics in figma',
        github: 'https://github.com',
        demo: 'https://driblle.com/shots'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Charts templates & infographics in figma',
        github: 'https://github.com',
        demo: 'https://driblle.com/shots'
    },

]

export default function Portfolio() {
    return (
        <MainContainer>
            <section id='portfolio'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>

                <StyledPortfolioContainer>
                    {
                        data.map(({ id, image, title, github, demo }) => {
                            return (
                                <StyledPortfolioItems>
                                    <StyledPortfolioImage key={id}>
                                        <img src={image} alt={title} />
                                    </StyledPortfolioImage>
                                    <h3>{title}</h3>
                                    <StyledPortfolioCTA>
                                        <a href={github} className='btn'>Github</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </StyledPortfolioCTA>
                                </StyledPortfolioItems>
                            )
                        })
                    }

                </StyledPortfolioContainer>
            </section>
        </MainContainer>
    )
}
