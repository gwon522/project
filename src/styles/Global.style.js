import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color : inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-size : 14px;
    }
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default { GlobalStyle};
