import styled from 'styled-components';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #d4d4d4;
    max-width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 50px 50px;
    
    @media screen and (min-width:1100px){
        flex-direction: row;
        border-top: none;
        padding: 50px 50px;
        padding-top: 32px;
    }
`;

const Input = styled.input`
    position: relative;
    overflow: hidden;
    width: 100%;
    font-size: 1.5rem;
    height: 3rem;
    margin: 0 0 0.25rem;
    background: #fff;
    box-sizing: border-box;
    border: solid 1px #dadada;
`;

const InputTop = styled(Input)`
    border-radius: 10px 10px 0 0;
    padding-left: 30px;
`;
const InputBottom = styled(Input)`
    border-radius: 0 0 10px 10px;
    padding-left: 30px;
`;


const Button = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
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
        disabled && `background-color: #efefef;`
    }
`;
export { LoginWrapper, Input, InputTop, InputBottom, Button };
