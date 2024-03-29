import styled from "styled-components";

export const MainContainer = styled.div`
    width: 75%;
    margin: 0 auto;
      /* ===== MEDIA QUERIES (Medium Devices) ======*/
      @media screen and (max-width: 1024px) {
        width: 86%; 
       
       section{
        margin-top: 6rem;
       }
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
       
        width: 90%;
       section >h2{
        margin-bottom: 2rem;
       }
    }
`

export const StyledHeader = styled.header`
    height: 100vh;
    padding-top: 3rem;
    padding-bottom: 20rem;
    overflow: hidden;

    // media query for midium screens 
    @media screen and (max-width: 1024px) {
        height: 68vh;
    }
    @media screen and (max-width: 600px) {
        height: 100vh;
        width: 100%;
    }
`
export const StyledHeaderContainer = styled.div`
    text-align: center;
    height: 100%;
    //position: relative;

`

// CTA Style
export const StayledCta = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
`
// HeaderSocials style
export const StyledHeaderSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 10rem;
    bottom: 3rem;
    ::after{
        content: '';
        width: 1px;
        height: 4rem;
        background: #4db5ff;
    } 
    @media screen and (max-width: 600px) {
        display: none;
    }

`
// image
export const StyledImage = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
        --color-bg: #4db5ff;
    background: linear-gradient(var(--color-bg), transparent);
    box-shadow: 0 0 20px black;
    width: 22rem;
    height: 20rem;
    position: absolute;
    left: calc(50% - 11rem);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 2rem 1.5rem 1rem 1rem; 
    //#4db5ff
    @media screen and (max-width: 600px) {
        border-radius: 15rem 15rem 0 0;
    }
    
`
export const StyledLink = styled.a`
    position: absolute;
    right: 8rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
    @media screen and (max-width: 600px) {
        display: none;
    } 
`