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
const size = {
    mobile: '767px',
    desktop: '1023px',
};

const theme = {
    comFontSize: '',
    backgroundColor: '',
    mobile: `(max-width:${size.mobile})`,
    tablet: `(max-width:${size.desktop})`,
    // desktop: `(min-width:${size.desktop})`,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { GlobalStyle, theme };
