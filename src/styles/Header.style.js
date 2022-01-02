import styled from "styled-components";
import { css } from "styled-components";

const Header = styled.div`
    display: block;
    position: relative;
    z-index: 100;
    height: 61px;

    @media screen and (min-width: 1100px){
        height:80px;
        border-bottom:1px solid #d4d4d4;
    }
    a{
        text-decoration: none;
        color:#222;
    }
`

export const Container = styled(Header)`
    position: relative;
    z-index: 100;
    height: inherit;
    min-height: 80px;

    @media screen and (min-width:1100px){
        height:80px;
        border-bottom: 1px solid #d4d4d4;;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    padding-top: 60px;
    box-sizing: border-box;

    @media screen and (min-width:1100px){
        padding: 0 20px;
    }
`
export const HeaerWrapper = styled(Wrapper)`
    position: relative;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
    padding-top: 60px;
    box-sizing: border-box;

    @media screen and (min-width:1100px){
        padding: 0 20px;
    }
`
export const Logo = styled.h1`
    position: absolute;
    top: 16px;
    left: 20px;
    margin:0;

    a {
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 444px 666px;
        background-position: -6.66px -7.4px;
        display: block;
        width: 72px;
        height: 27px;
        text-indent: -9999px;
        
        @media screen and (min-width:1100px){
            background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
            background-size: 600px 900px;
            background-position: -9px -10px;
            width: 94px;
            height: 40px;
        }
    }
    em{
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: calc(100% + 2px);
        display: inline-block;
        width: 44px;
        height: 18px;
        font-size: 0;
        line-height: 0;
        text-indent: -999em;
        background-color: #da3238;
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 480px 720px;
        background-position: -89.6px -22.4px;

        @media screen and (min-width:1100px){
            bottom: 4px;
            left: calc(100% + 7px);
            background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
            background-size: 600px 900px;
            background-position: -112px -28px;
            width: 54px;
            height: 22px;
        }
    }

    @media screen and (min-width:1100px){
        top: 22px;
    }
`;
export const Nav = styled.nav`
    display:block;  
    border-top: 1px solid #dfe1e4;
    @media screen and (min-width: 1100px){
        position: absolute;
        top: 16px;
        left: 206px;
        right: 0;
        height: 80px;
        padding-left: 0;
        border: none;
        overflow: hidden;
        width: auto;
    }
`;
export const NavMask = styled.div`
    margin: 0 10px;
    overflow: hidden;
    @media screen and (min-width: 1100px){
        margin: 0;
    }
`
export const NavTab = styled.div`
    backface-visibility: hidden;
    margin: 0 10px;
    @media screen and (min-width: 1100px){
        margin: 0 15px 0 10px;
    }
`
export const ItemList = styled.ul`
    margin:0;
    padding:0;
    list-style: none;   
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transform: translate3d(0,0,0);
    box-sizing: content-box;
`;
export const Item = styled.div`
    position: relative;
    cursor: pointer;
    width: auto;
    height: 60px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.26em;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222;
    margin-right: 20px;
    text-transform: uppercase;
    flex-shrink: 0;
    transition-property: transform;
    
    @media screen and (min-width: 1100px){
        padding-top: 0;
        font-size: 20px;
        font-weight: 400;
        margin-right: 30px;
    }
`;
export const Wrap = styled.div`
    display:flex;
`
export const SearchBox = styled.input`
    font-size: 0.925rem;
    border:1px solid #d4d4d4;
    border-radius: 30px;
    width: 20vw;
    height: 2.5rem;
    padding-left: 2rem;
    margin-right: 2rem;
    display :none;
`
export const SearchWrap = styled.section`
    display:flex;
    flex-direction: row;
    margin: 1.5rem 0;
    justify-content: center;
    align-items: center;
`
export const ActionWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`
export const ItemButton = styled.button`
    border:none;
    font-weight: bold;
    font-size:0.825rem;
    cursor:pointer;
    padding:0.5rem 0.825rem;
    margin-right: 10px;
    
    ${(props) =>
        props.bgColor === 'white' && css`
        border: 1px solid #d4d4d4;
    `}
    
    color : ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
`