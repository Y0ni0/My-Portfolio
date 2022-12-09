import styled from "styled-components";
import { v } from '../variables'

export const StyledTestemonialContainer = styled.div`
    width: 40%;
    //margin-left: 300px;
    //padding-bottom: 8rem;
    /* ===== MEDIA QUERIES (Medium Devices) ======*/
    @media screen and (max-width: 1024px) {
        width: 60%;
        //margin-left: 120px;
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        width: ${v.__container_width_sm};
        //margin-left: 20px;
    } 
`

export const StyledClientAvatar = styled.div`
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid ${v.__color_primary_varient};
`
export const StyledTesimonial = styled.article`
    background: ${v.__color_primary_varient};
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
    margin: 0;
    
    small{
        color: ${v.__color_light};
        font-weight: 300;
        display: block;
        width: 80%;
        margin: 0.8rem auto 0;
        /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        width: ${v.__container_width_sm};
    }
    }
`

export const AnotherConatiner = styled.div`
    width: 40%;
    margin: auto;
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
        width: 60%;
        //margin-left: 120px;
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
        width: ${v.__container_width_sm};
        //margin-left: 20px;
    } 
`