import styled from "styled-components";

export const StyledAboutContainer = styled.div`
    --color-light:  rgba(255, 255, 255, 0.6);
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
   
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`
export const StyledAboutContent = styled.div`
     p{
        margin: 2rem 0 2.6rem;
        color: var(--color-light);
    }
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
        p{
            margin: 1rem 0 1.5rem;
        }
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
       text-align: center;
       p{
        margin: 1.5rem 0;
       }
    }
    
`
export const StyledImageContainer = styled.div`
        --color-bg: #1f2f38;
        --color-bg-varient: #2c2c6c;
        --color-primary: #4db5ff;
        --color-primary-varient: rgba(77,181, 255, 0.4);
        --color-white: #fff;
        --color-light:  rgba(255, 255, 255, 0.6);

        --transition: all 400ms ease;

        --container-width-lg: 75%;
        --container-width-md: 86%;
        --container-width-sm: 90%;

    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, 
        transparent, 
        var(--color-primary),
        transparent);
    display: grid;
    place-items: center;
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
        width: 50%;
        margin: 2rem auto 4rem;
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        width: 65%;
        margin: 0 auto 3rem;
    }

`
export const StyledImageDiv = styled.div`
    --transition: all 400ms ease;
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);

    :hover{
        transform: rotate(0deg);
    }
`
export const StyledCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`
export const Styledcard = styled.article`
    --color-bg-varient: #2c2c6c;
    --color-primary-varient: rgba(77,181, 255, 0.4);
    --transition: all 400ms ease;
    --color-primary: #4db5ff;
    --color-light:  rgba(255, 255, 255, 0.6);
    background: var(--color-primary-varient);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: var(--transition);
    :hover{
        background: transparent;
        border-color: var(--color-primary-varient);
        cursor: default;
    }

    .about__icon{
        color: var(--color-primary);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    h5{
        font-size: 0.95rem;
    }
    small{
        font-size: 0.7rem;
        color: var(--color-light);
    }
  
`