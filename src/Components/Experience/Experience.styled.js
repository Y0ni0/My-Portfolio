import styled from "styled-components";

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
        --color-bg: #1f2f38;
        --color-bg-varient: #2c2c6c;
        --color-primary: #4db5ff;
        --color-primary-varient: rgba(31, 69, 99, 0.664);
        --color-white: #fff;
        --color-light:  rgba(255, 255, 255, 0.6);

        --transition: all 400ms ease;

        --container-width-lg: 75%;
        --container-width-md: 86%;
        --container-width-sm: 90%;
        background: var(--color-primary-varient);
        padding: 2.4rem 5rem;
        border-radius: 2rem;
        border: 1px solid transparent;
        transition: var(--transition);
    :hover{
        background: transparent;
        border-color: var(--color-light);
        cursor: default;
    }
    h3{
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-primary);
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
    --color-primary: #4db5ff;
    display: flex;
    gap: 1rem;
    .icons{
        margin-top: 6px;
        color: var(--color-primary);
    }
`
