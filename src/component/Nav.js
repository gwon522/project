import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 5rem;
`

const Logo = styled.div`
    width: 15rem;
    height: 7vh;
    justify-content: center;
    align-items: center;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    margin: 1rem 0;
    align-items: center;
    a{
        text-decoration: none;
    }
    
`
const Item = styled.li`
    margin: 0 1rem;
    text-decoration: none;
`


export const Nav = () => {
    return (
        <Container>
            <Logo>
                <Link to="/">로고</Link>
            </Logo>
            <div style={{ display: 'flex' }}>
                <List>
                    <Item>
                        <Link to="/Login">
                            로그인
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/Join">
                            회원가입
                        </Link>
                    </Item>
                </List>
                <List>
                    <Item>
                        메뉴 1
                    </Item>
                    <Item>
                        메뉴 2
                    </Item>
                    <Item>
                        메뉴 3
                    </Item>
                    <Item>
                        메뉴 4
                    </Item>
                </List>
            </div>
        </Container >
    );
};
