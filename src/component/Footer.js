import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;
const Name = styled.p`
    margin-right: 1.2rem;
`;
const Github = styled(FaGithub)`
    font-size: 1.2rem;
`;

export const Footer = () => {
    return (
        <Container>
            <Name>Gwon522</Name>
            <a href="https://github.com/gwon522">
                <Github />
            </a>
        </Container>
    );
};
