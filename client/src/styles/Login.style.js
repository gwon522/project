import styled from 'styled-components';

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #d4d4d4;
    max-width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;
    justify-content: center;
    padding: 50px 50px;
    
    @media screen and (min-width:1100px){
        flex-direction: row;
        border-top: none;
        padding: 50px 50px;
        padding-top: 32px;
    }
`;
export const LoginTitle = styled.div`
    border: 1px solid #dadada;
    margin-top:50px;
    font-size:35px;
    font-weight:700;
    text-align: center;
    border-radius: 10px;
    padding-top:20px;

`
export const LoginContainer = styled.div`
    display:block;
    border:1px solid #dadada;
    border-bottom:none;
    border-left:none;
    border-right:none;
    margin:0 auto;
    margin-top:15px;
    border-radius: 10px;
    padding:30px 20px 30px 20px;

    @media screen and (min-width:1100px){
        min-height: 150px;
    }
`
export const FuncUl = styled.ul`
    padding:0;
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top:25px;
`
export const FuncList = styled.li`
    position: relative;
    display: inline-block;
    font-size: 17px;

    &+&{
        padding-left: 28px;
        &:before{
            content: '';
            position: absolute;
            top: 3px;
            left: 12px;
            width: 1px;
            height: 13px;
            border-radius: 0.5px;
            background-color: #dadada;
        }
    }

`


export const Input = styled.input`
    position: relative;
    overflow: hidden;
    margin:0;
    width: 100%;
    font-size: 1.5rem;
    height: 3rem;
    background: #fff;
    box-sizing: border-box;
    border: solid 1px #dadada;
`;

export const InputTop = styled(Input)`
    border-radius: 10px 10px 0 0;
    padding-left: 30px;
`;
export const InputBottom = styled(Input)`
    border-radius: 0 0 10px 10px;
    padding-left: 30px;
`;


export const Button = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    width: 100%;
    height: 4rem;
    cursor: pointer;
    background-color: #da3238;
    color:#fff;
    text-align: center;
    border: 1px solid #da3238;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top:15px;

    ${({ disabled }) =>
        disabled && `background-color: #dadada;`
    }
`;
