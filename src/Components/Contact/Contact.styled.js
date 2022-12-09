import styled from "styled-components";
import { v } from '../variables'

export const StyledContactContainer = styled.div`
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12rem;
    margin-left: 10rem;
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
       grid-template-columns: 1fr;
       gap: 2rem; 
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        width: ${v.__container_width_sm};
        margin: auto;
    } 
`
export const StyledContactOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
       margin: auto;
    }
`
export const StyledOption = styled.article`
    background: ${v.__color_primary_varient};
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: ${v.__transition};
    width: 15rem;
        :hover{
            background: transparent;
            border-color: ${v.__color_primary_varient2};
        }
    .contact-icon{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    a{
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.8rem;
    }
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    input, textarea{
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: transparent;
        border: 2px solid ${v.__color_light};
        resize: none;
        color: ${v.__color_white};
    }
    
    
`
