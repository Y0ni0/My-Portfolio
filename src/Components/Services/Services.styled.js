import styled from "styled-components";
import { v } from '../../Components/variables'

export const StyledServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
     /* ===== MEDIA QUERIES (Medium Devices) ======*/
     @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
       grid-template-columns: 1fr;
       gap: 1.5rem;
    }
`
export const StyledServices = styled.div`
    background: ${v.__color_primary_varient};
    border-radius: 0 0 2rem 2rem;
    border: 1px solid ${v.__color_primary};
    height: fit-content;
    transition: ${v.__transition};
    :hover{
        background: transparent;
        border-color: ${v.__color_primary_varient};
        cursor: default;
    } 
    /* ===== MEDIA QUERIES (Medium Devices) ======*/
    @media screen and (max-width: 1024px) {
        height: auto;
    }
`

export const StyledServiceHead = styled.div`
    background: ${v.__color_primary_varient2};
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
    h3{
        color: ${v.__color_light};
        font-size: 1rem;
        text-align: center;
        font-weight: bolder;
    }
`
export const StyledServiceList = styled.ul`
    padding: 2rem;
    li{
        display: flex;
        gap: 1rem;
        margin-bottom: 0.8rem;
    }
    .service-list-icon{
        color: ${v.__color_primary};
        margin-top: 2px;
    }
    p{
        font-size: 0.9rem;
    }
`