import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Roboto","Noto Sans KR",AppleSDGothicNeo-Regular,"Malgun Gothic","맑은 고딕",dotum,"돋움",sans-serif;
    font-size : 14px;
`;

export const headerHeight = '7vh';
export const footerHeight = '4vh';

export const width = '90vw';

export const headerColor = "#7F00FF";

const size = {
    mobile: '768px',
    tablet: '1100px',
    desktop: '1920px',
};

export const Device = {
    comFontSize: '',
    backgroundColor: '',
    mobile: `(min-width:${size.mobile})`,
    tablet: `(min-width:${size.tablet})`,
    desktop: `(min-width:${size.desktop})`,
};

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #222;
    cursor: pointer;
    touch-action: manipulation;

    &:hover, &:active, &:focus {
        text-decoration: none;
        color: #222;
    }
`

export const Layout = styled.div`
    display : flex;
    flex-direction : column;
    height : 100vh;
    /* background-color: gray; */
    /* @media ${Device.mobile}{ 
        margin: 0 0rem;
        width: 100%;
        overflow-x: hidden;
    } */

`;
export const MainContainer = styled.div`
    /* flex:1;
    padding :2rem 5rem; 
    margin-top: 8px;
    @media ${Device.tablet}{

    } */
    display:block;
`


