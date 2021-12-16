import { Link } from 'react-router-dom';
import { FaBars, FaRegUser } from 'react-icons/fa'
import { Container, Logo, Item, ListBox, MenuBar, WebList, MobList } from "../styles/Header.style";
import { useSelector } from 'react-redux';

export const Header = () => {

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
                            <FaRegUser onClick={() => { }} />
                        </Item>
                        <Item>
                            <Link to="/Join">
                                회원가입
                            </Link>
                        </Item>
                    </WebList>
                    <MenuBar href="#">
                        <FaBars onClick={() => { console.log('clicked') }} />
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
