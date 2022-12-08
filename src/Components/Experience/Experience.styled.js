import styled from "styled-components";
import { v } from '../../Components/variables'

export const StyledExperienceContainer = styled.div`  
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem; 
    /* ===== MEDIA QUERIES (Medium Devices) ======*/
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        gap: 1rem;
    }

`
export const StyledExperienceCards = styled.div`
        background: ${v.__color_primary_varient};
        padding: 2.4rem 5rem;
        border-radius: 2rem;
        border: 1px solid transparent;
        transition: ${v.__transition};
    :hover{
        background: transparent;
        border-color: ${v.__color_light};
        cursor: default;
    }
    h3{
        text-align: center;
        margin-bottom: 2rem;
        color: ${v.__color_primary};
        font-weight: bolder;
    } 
    /* ===== MEDIA QUERIES (Medium Devices) ======*/
    @media screen and (max-width: 1024px) {
            width: 80%;
            padding: 2rem;
            margin: 0 auto;
    } 
     /* ===== MEDIA QUERIES (Small Devices) ======*/
     @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem 1rem;
    }
`
export const StyledExperienceContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    /* ===== MEDIA QUERIES (Medium Devices) ======*/
    @media screen and (max-width: 1024px) {
        padding: 1rem;
    } 
`
export const StyledExperienceDetails = styled.article`
    display: flex;
    gap: 1rem;
    .icons{
        margin-top: 6px;
        color: ${v.__color_primary};
    }
`
