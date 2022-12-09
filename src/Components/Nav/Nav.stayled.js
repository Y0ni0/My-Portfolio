import styled from "styled-components";

export const StyledNav = styled.nav`
        --color-bg: #1f2f38;
        --color-bg-varient: #2c2c6c;
        --color-primary: #4db5ff ;
        --color-primary-varient: rgba(77,181, 255, 0.4);
        --color-white: #fff;
        --color-light:  rgba(255, 255, 255, 0.6);

        --transition: all 400ms ease;

        --container-width-lg: 75%;
        --container-width-md: 86%;
        --container-width-sm: 90%; 

    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.5rem 2rem;
    margin-bottom: 0.8rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
    a{
        background: transparent;
        padding: 0.9rem;
        border-radius: 50%;
        display: flex;
        color: var(--color-light);
        font-size: 1.1rem;
    }
    a:hover{
        background: rgba(0, 0, 0, 0.3);
    }
    a.active{
        background: var(--color-primary);
        color: var(--color-bg);
    }
`