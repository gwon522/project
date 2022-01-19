import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0;
    height: inherit;
`;

const Input = styled.input`
    position: relative;
    overflow: hidden;
    width: 100%;
    font-size: 1.5rem;
    height: 3rem;
    margin: 0 0 0.5rem;
    background: #fff;
    box-sizing: border-box;
    border: solid 1px #dadada;
`;

const Button = styled.div`
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    width: 100%;
    height: 4rem;
    cursor: pointer;
    background-color: #fff2af;
    text-align: center;
    border: none;
    justify-content: center;
    align-items: center;

    ${({ disabled }) =>
        disabled &&
        `
    background-color: #efefef;
    `}
`;
export { LoginWrapper, Input, Button };
