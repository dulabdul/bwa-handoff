import React, { useState, useLayoutEffect, useRef } from 'react';
import logoSVG from '../assets/images/design/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburgerMenu from '../assets/images/design/menu-hamburger.svg';
import { ReactComponent as CartSVG } from '../assets/images/design/cart.svg';
import Button from '../components/Button';
import { useGlobalContext } from '../helpers/hooks/useGlobalContext';
// Hamburger

//End of Hamburger
export default function Header({ pages }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const [isCartChanged, setCartChanged] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});
  useLayoutEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChanged(true);
      setTimeout(() => {
        setCartChanged(false);
      }, 1000);
    }
  }, [state.cart]);
  return (
    <>
      <Navbar
        bg='light'
        expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown
                title='Dropdown'
                id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
                <div
                  className={`items-center transition-all justify-center absolute z-50 top-[9px] right-[3px] bg-pink-400 rounded-full w-7 h-7 text-center ${
                    Object.keys(state.cart).length === 0 ? 'hidden' : 'flex '
                  } ${isCartChanged ? 'animate-bounce ' : ''}`}>
                  <span className='text-white text-sm'>
                    {Object.keys(state.cart).length}
                  </span>
                </div>
                <Button
                  type='link'
                  href='/cart'
                  className={`cart ${
                    isCartChanged ? 'animate-bounce block' : ''
                  }`}>
                  <CartSVG />
                </Button>
              </div> */}
    </>
  );
}
