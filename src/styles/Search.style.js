import styled from "styled-components";

export const SearchSection = styled.section`
    position: relative;
    display:block;
   
`
export const Button = styled.button`
    overflow: visible;
    border : 0;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -46px;
    right: 157px;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
    @media screen and (min-width:1100px){
        top: 2px;
        right: auto;
        left: 10px;
        width: 56px;
        height: 56px;
        color: #fff;
    }
    &:before{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: block;
        width: 24px;
        height: 24px;
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position: -10px -350px;
        content: "";
    }
`;
export const SearchInput = styled.input`
    border-radius: 25px;
    border : solid black 2px;
    width : 100%;
    height: 50px;
    max-height: 60px;
    padding-left: 30px;
    display: none;

    @media screen and (min-width:1100px){
        display: block;
        width: 736px;
        height: 60px;
        padding: 0 10px 0 62px;
        border: 2px solid #222;
        border-radius: 30px;
        font-size: 18px;
        box-sizing: border-box;
    }
`;