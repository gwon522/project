import styled from "styled-components";

export const headerHeight = '7vh';

export const headerColor = "#7F00FF";

const size ={
    mobile: '768px',
    desktop: '1024px',
};

export const device = {
    comFontSize: '',
    backgroundColor: '',
    mobile: `(max-width:${size.mobile})`,
    tablet: `(max-width:${size.desktop})`,
    desktop: `(min-width:${size.desktop})`,
};

export const Layout = styled.div`
    display : flex;
    flex-direction : column;
    height : 100vh;

    mainContainer{
        padding-top : ${headerHeight};
        flex:1;
    }
`;

