import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go'
import { Container, Logo, List, Item, ListBox, MenuBar, WebList, MobList } from "../styles/Header.style";

export const Header = () => {

    const clickMenu = () => {
        console.log('메뉴 클릭')
    }

    return (
        <>
            <Container>
                <Logo>
                    <Link to="/">로고</Link>
                </Logo>
                <ListBox>
                    <WebList>
                        <Item>
                            <Link to="/">메뉴 1</Link>
                        </Item>
                        <Item>
                            <Link to="/Login">메뉴 2</Link>
                        </Item>
                        <Item>
                            <Link to="/">메뉴 3</Link>
                        </Item>
                        <Item>
                            <Link to="/">메뉴 4</Link>
                        </Item>
                    </WebList>
                    <WebList>
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
                    </WebList>
                    <MenuBar href="#">
                        <GoThreeBars onClick={clickMenu} />
                    </MenuBar>
                </ListBox>
            </Container >
            <ListBox className="mobileMenu">
                <MobList>
                    <Item>
                        <Link to="/">메뉴 1</Link>
                    </Item>
                    <Item>
                        <Link to="/Login">메뉴 2</Link>
                    </Item>
                    <Item>
                        <Link to="/">메뉴 3</Link>
                    </Item>
                    <Item>
                        <Link to="/">메뉴 4</Link>
                    </Item>
                </MobList>
            </ListBox>
        </>
    );
};
