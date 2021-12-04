import styled from "styled-components";
import { device } from "./Global.style";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    @media ${device.mobile}{
        margin: 0 0rem;
    }
`;
export const Logo = styled.div`
    display:flex;
    width: 15rem;
    height: 7vh;
    justify-content: center;
    align-items: center;
`;
export const ListBox = styled.div`
  display:flex;  
`;
export const WebList = styled.ul`
    list-style: none;
    display: flex;
    margin: 1rem 0;
    align-items: center;

    @media ${device.tablet}{
        display: none;
    }
    
`;
export const MobList = styled.ul`
    list-style: none;
    display: flex;
    margin: 1rem 0;
    align-items: center;
    flex-direction:column;
    @media ${device.desktop}{
        display: none;
    }
    
`;
export const Item = styled.div`
    margin: 0 2rem;
    &:hover{
        border-bottom: solid 2px ;
    }
`;
export const MenuBar = styled.a`
    display: flex;
    align-items: center;
    font-size: 2rem;
    position: absolute;
    right:2rem;
    height: 5rem;
    @media ${device.desktop}{
        display:none;
    }
`
