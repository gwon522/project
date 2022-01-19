import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const NameColor = { color: "#37acc9" };

export const GlobalStyle = createGlobalStyle`
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Roboto","Noto Sans KR", AppleSDGothicNeo-Regular,"Malgun Gothic","맑은 고딕",dotum,"돋움",sans-serif;
    font-size : 14px;
`;

export const headerHeight = '7vh';
export const footerHeight = '4vh';

export const width = '90vw';

export const headerColor = "#7F00FF";

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
export const WrapInfo = styled.div`
    position: relative;
    margin-top: ${props => props.func ? '16px' : '8px'};
    font-size: 12px;

    @media screen and (min-width : 1100px){
        margin-top: 15px;
        width:${props => props.func && "100%"};
        font-size:${props => props.func && "14px"};
    }
    ${StyledLink}{
        margin-right: 14px;
        color:#94969b;
        vertical-align: top;

        &:before{
            display: inline-block;
            width: 16px;
            height: 16px;
            margin:-1px 3px 1px 0;
            vertical-align: middle;
            content: "";
        }
    }
`
export const InfoFnc = styled.div`
position: absolute;
margin:0;
padding:0;
top: ${props => props.func && '-2px'}0;
right: 0;
font-size: 14px;

    @media screen and (min-width:1100px){
        top:${props => props.func && '0'};
    }
`
export const Layout = styled.div`
    display : flex;
    flex-direction : column;
    height : 100vh;

`;
export const MainContainer = styled.div`
    display:block;
`


