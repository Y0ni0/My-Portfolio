import { createGlobalStyle } from "styled-components";
import img from './Assets/bg-texture.png';
import fontsUrl from './Assets/fonts/Poppins-Regular.ttf';


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: 0;
        list-style: none;
        text-decoration: none;
    }
    :root {
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

    }
    html{
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    
    body{
      
    font-family: "Poppins", sans-serif;
    //src: url('./assets/fonts/Poppins-Light') format('ttf');
    //font-family: 'Poppins-Regular';
    //src: url(${fontsUrl}) format('ttf');
    //font-family: 'Poppins-Medium';
    //src: url('./assets/fonts/Poppins-Medium') format('ttf');
    //font-family: 'Poppins-SemiBold'; */
    //src: url('./assets/fonts/Poppins-SemiBold') format('ttf');
    background : var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image: url(${img});
    }
   
   /* General Styles */
    
    h1, h2, h3, h4, h5{
        font-weight: 500;
    }
    h1{
        font-size: 2.5rem;
    }
    section{
        margin-top: 4rem;
        
    }
    section > h2, section > h5{
        text-align: center;
        color: var(--color-light);
    }
    section > h2{
        color: var(--color-primary);
        margin-bottom: 3rem;
    }
    .text-light{
        color: var(--color-light);
    }
    a{
        color: var(--color-primary);
        transition: var(--transition);
    }
    a:hover{
        color: var(--color-white);
    }
    .btn{
        width: max-content;
        display: inline-block;
        color: var(--color-primary);
        padding: 0.75rem 1.2rem;
        border-radius: 0.4rem;
        cursor: pointer ;
        border: 1px solid var(--color-primary);
        transition: var(--transition);
    }
    .btn:hover{
        background: var(--color-white);
        color: var(--color-bg);
        border-color: transparent;
    }
    .btn-primary{
        background: var(--color-primary);
        color: var(--color-bg);
    }
    img{
       display: block;
       width: 100%;
       object-fit: cover;
    }


`

export default GlobalStyle