import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import  Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom"

const NavBar = observer(() => {
    const {user}= useContext(Context)
    const navigate =useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
               <NavLink style={{color:'white'}}>Косметика</NavLink>
                <NavLink style={{color:'white'}}>Служба поддержки клиентов: 8 800 770 70 22</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(SHOP_ROUTE)}
                            className="ms-2"
                        >
                            Магазин
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(SHOP_ROUTE)} className="ms-2">Магазин</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar