
import styled from 'styled-components';

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`;

export const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 999;
`;

export const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    top: 40%;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
    background-color: #fff;
    border-radius: 10px;
    transform: translateY(-50%);
    margin: 0 auto;
    width: 40vw;
    height: 40vh;
    padding: 50px 50px;
`

