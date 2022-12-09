import styled from "styled-components";
import { v } from '../variables'

export const StyledFooterContainer = styled.footer`
    background: ${v.__color_primary};
    padding: 1rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;
    a{
        color: ${v.__color_bg};
    }
    .footer_logo{
        font-size: 2rem;
        font-weight: 600;
        //margin-bottom: 1rem;
        display: inline-block;
    }
`
export const StyledUlPermalinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 0.5rem;
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
       
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`
export const StyledFooterSocials = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
    a{
        background: ${v.__color_bg};
        color: ${v.__color_white};
        padding: 0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;
        :hover{
            background: transparent;
            color: ${v.__color_bg};
            border-color: ${v.__color_bg};
        }
    }
  
`
export const FooterCopyright = styled.div`
    margin-top: 4.5rem;
    color: ${v.__color_bg};
    padding-bottom: 0;
    /* ===== MEDIA QUERIES (Medium Devices) ======*/
    @media screen and (max-width: 1024px) {
       margin-top: 4.5rem;
    }
     /* ===== MEDIA QUERIES (Small Devices) ======*/
     @media screen and (max-width: 600px) {
        margin-top: 4.5rem;
    }
    
`