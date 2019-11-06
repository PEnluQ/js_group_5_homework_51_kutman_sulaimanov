import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
} from "reactstrap";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar className='fon' light expand="md">
                    <NavbarBrand href="/">PetShop</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">О нас</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Магазины</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">История</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;