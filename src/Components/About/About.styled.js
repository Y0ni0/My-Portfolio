import styled from "styled-components";
import { v } from '../../Components/variables'

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
    /* ===== MEDIA QUERIES (Small Devices) ======*/
     @media screen and (max-width: 600px) {
       margin: 0;
    }

`
export const StyledAboutContent = styled.div`
     p{
        margin: 2rem 0 2.6rem;
        color: ${v.__color_light};
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
        --color-primary: #4db5ff;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
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
    transition: ${v.__transition};

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
    background: ${v.__color_primary_varient2};
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: ${v.__transition};
    :hover{
        background: transparent;
        border-color: ${v.__color_primary_varient2};
        cursor: default;
    }

    .about__icon{
        color: ${v.__color_primary};
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    h5{
        font-size: 0.95rem;
    }
    small{
        font-size: 0.7rem;
        color: ${v.__color_light};
    }
  
`