import styled from "styled-components";

export const SearchSection = styled.section`
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    position:absolute;
    left:8px;
    top:12px;
    color: black;
`;
export const SearchInput = styled.input`
    border-radius: 25px;
    border : solid black 2px;
    width : 100%;
    height: 50px;
    max-height: 60px;
    padding-left: 30px;
`;