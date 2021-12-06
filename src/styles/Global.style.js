import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color : inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-size : 14px;
    }
`;

export const headerHeight = '7vh';
export const footerHeight = '4vh';

export const width = '90vw';

export const headerColor = "#7F00FF";

const size = {
    mobile: '768px',
    desktop: '1024px',
};

export const device = {
    comFontSize: '',
    backgroundColor: '',
    mobile: `(max-width:${size.mobile})`,
    tablet: `(max-width:${size.desktop})`,
    desktop: `(min-width:${size.desktop})`,
};

export const Layout = styled.div`
    display : flex;
    flex-direction : column;
    height : 100vh;


`;
export const MainContainer = styled.div`
    flex:1;
    padding :0.5rem 5rem 0 5rem; 
`


