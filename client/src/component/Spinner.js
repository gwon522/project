import React from "react";
import styled from "styled-components";


const SpinnerImg = styled.div`
    display: inline-block;
    width:150px;
    height:150px;
    position:fixed;
    top:50%;
    left:50%;
    &::after{
        content: "";
        display: block;
        width:130px;
        height:130px;  
        border-radius:50% ;
        border : 4px solid #e5dada;
        border-color: #e5dada transparent #e5dada transparent ;
        animation: Spinner 1,2s linear infinite ;
    }

    @keyframes Spinner{
        0%{
            transform:  rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

const Spinner = () => {
    return (
        <SpinnerImg />
    )
}

export default Spinner;