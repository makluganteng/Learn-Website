import React from "react";
import {FaBars} from 'react-icons/fa'
import Image from '../../images/sial.png'
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn, Logo} from'./NavbarElements';

const Navbar = ({toggle}) =>{
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'><Logo src={Image} alt="" />Coursery</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='learn'>Learn</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='founder'>Founder</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;

