import styled from "styled-components";
import { v } from '../variables'

export const StyledPortfolioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
       grid-template-columns: 1fr;
       gap: 1rem;
    }
`

export const StyledPortfolioItems = styled.article`
    background: ${v.__color_primary_varient};
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${v.__transition};
    :hover{
        border-color: ${v.__color_primary_varient2};
        background: transparent;
    }
    h3{
        margin: 1rem 0 1rem;

    }
`
export const StyledPortfolioImage = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;
`
export const StyledPortfolioCTA = styled.div`
    display: flex;
    gap: 1rem;
    //margin-bottom: 1rem;
`