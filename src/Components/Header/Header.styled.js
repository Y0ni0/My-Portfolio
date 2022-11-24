import styled from "styled-components";

export const MainContainer = styled.div`
    width: var(75%);
    margin: 0 auto;
      /* ===== MEDIA QUERIES (Medium Devices) ======*/
      @media screen and (max-width: 1024px) {
       .container{
        width: 86%;
       } 
       section{
        margin-top: 6rem;
       }
    }
    /* ===== MEDIA QUERIES (Small Devices) ======*/
    @media screen and (max-width: 600px) {
       .container{
        width: 90%;
       } 
       section >h2{
        margin-bottom: 2rem;
       }
    }
`

export const StyledHeader = styled.header`
    height: 100vh;
    padding-top: 7rem;
    overflow: hidden;
`
export const StyledHeaderContainer = styled.div`
    text-align: center;
    height: 100%;
    position: relative;
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
    left: 15rem;
    bottom: 3rem;
    ::after{
        content: '';
        width: 1px;
        height: 4rem;
        background: #4db5ff;
    } 
`
// image
export const StyledImage = styled.div`
    background: linear-gradient(#4db5ff), transparent;
    width: 22rem;
    height: 30rem;
    position: absolute;
    left: calc(50% - 11rem);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
   // padding: 5rem 1.5rem 1.5rem 1.5rem;
`