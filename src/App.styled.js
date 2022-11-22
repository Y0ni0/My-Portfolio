import { createGlobalStyle } from "styled-components";


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
    @font-face {
       font-family: "Poppins", sans-serif;
       src: url('./assets/fonts/Poppins-Light') format('ttf');
       font-family: 'Poppins-Regular';
       src: url('./assets/fonts/Poppins-Regular') format('ttf');
       font-family: 'Poppins-Medium';
       src: url('./assets/fonts/Poppins-Medium') format('ttf');
       font-family: 'Poppins-SemiBold';
       src: url('./assets/fonts/Poppins-SemiBold') format('ttf');
    }
    body{

    }
   
`



export default GlobalStyle