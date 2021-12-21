import styled from "styled-components";
import { css } from "styled-components";
import { device } from "./Global.style";

export const Container = styled.div`
    display: flex;
    padding: 0 5%;
    border-bottom: 1px solid #d4d4d4;
    align-items: center;
    @media ${device.mobile}{
        margin: 0 0rem;
    }
    a{
        color: black;
        text-decoration: none;
    }
`;
export const Logo = styled.h1`
    font-family: 'Roboto', sans-serif;
    display:flex;
    width: 15rem;
    height: 6.5vh;
    align-items: center;
    font-size: 2.75rem;
    font-weight: bold;
    letter-spacing: -1px;
    a {
        text-decoration: none;
        color: black;
    }
    em{
        font-family: Noto Sans KR;
        font-size: 1rem;
        font-style: normal;
        color: red;
        border: red solid 2px;
        letter-spacing: 1px;
        padding: 0 0.25rem
    }
    a+em{
        margin-left: 8px;
    }
`;
export const ListBox = styled.div`
  display:flex;  
  width: 100%;
  justify-content: space-between;
`;
export const ItemList = styled.ul`
    display: flex;
    margin: 1rem 0;
    padding:0;
    align-items: center;
    
`;
export const Item = styled.div`
    margin: 0 1.25rem;
    font-size: 1.25rem;
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
`
export const ItemButton = styled.button`
    border:none;
    font-weight: bold;
    font-size:1rem;
    cursor:pointer;
    padding:0.75rem 1.5rem;
    margin-right: 10px;
    
    ${(props) =>
        props.bgColor === 'white' && css`
        border: 1px solid #d4d4d4;
    `}
    
    color : ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
`