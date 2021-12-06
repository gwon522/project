import { Link } from 'react-router-dom';
import { FaBars, FaRegUser } from 'react-icons/fa'
import { Container, Logo, Item, ListBox, MenuBar, WebList, MobList } from "../styles/Header.style";
import { Login } from 'pages';

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
                            <Link to="/">메뉴 3</Link>
                        </Item>
                        <Item>
                            <Link to="/">메뉴 4</Link>
                        </Item>
                    </WebList>
                    <WebList>
                        <Item>
                            <FaRegUser onClick={() => {
                                <Login visible />
                            }} />
                        </Item>
                        <Item>
                            <Link to="/Join">
                                회원가입
                            </Link>
                        </Item>
                    </WebList>
                    <MenuBar href="#">
                        <FaBars onClick={clickMenu} />
                    </MenuBar>
                </ListBox>
            </Container >
            <ListBox className="mobileMenu">
                <MobList>
                    <Item>
                        <Link to="/">메뉴 1</Link>
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
