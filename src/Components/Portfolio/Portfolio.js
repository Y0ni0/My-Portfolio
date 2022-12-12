import React from 'react'
import { MainContainer } from '../Header/Header.styled'
import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/portfolio2.png'
import IMG3 from '../../Assets/portfolio3.png'
import IMG4 from '../../Assets/portfolio4.png'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.png'
import IMG7 from '../../Assets/portfolio7.png'
import { StyledPortfolioContainer, StyledPortfolioCTA, StyledPortfolioImage, StyledPortfolioItems } from './Portfolio.styled'

const data = [
    {
        id: 1,
        image: IMG7,
        title: 'Employee Management App - MERN',
        github: 'https://github.com/Y0ni0/Employee-Management-App',
        demo: 'https://employee-management-app7.netlify.app/'
    },
    {
        id: 7,
        image: IMG1,
        title: 'Tele - Medicine Mobile App for mothers made with Kotlin',
        github: 'https://github.com/Y0ni0/Tena',
        demo: 'https://github.com/Y0ni0/Tena'
    },
    {
        id: 2,
        image: IMG2,
        title: 'CreativET Local Stock Photo Sharing Platform - next.js',
        github: 'https://github.com/Y0ni0/creativEt',
        demo: 'https://creativ-et.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Laptop Ordering E-Commerce backend made with Node Js ',
        github: 'https://github.com/Y0ni0/laptop-ordering-project',
        demo: 'https://github.com/Y0ni0/laptop-ordering-project'
    },
    {
        id: 4,
        image: IMG4,
        title: 'To - Do - List Web App made with React and a fake backend json server',
        github: 'https://github.com/Y0ni0/Todolist-with-traversary',
        demo: 'https://task-tracker-travers.herokuapp.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Inventory management Website made with JavaScript',
        github: 'https://github.com/Y0ni0/Inventory-Management-App',
        demo: 'https://elegant-heyrovsky-1419ef.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Roll a dice a two player game made with JavaScript',
        github: 'https://github.com/Y0ni0/Pig-Game-udemy-practice',
        demo: 'https://dazzling-goldberg-f0f4dd.netlify.app/'
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
