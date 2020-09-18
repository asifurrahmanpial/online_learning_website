import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = (props) => {
	return (
		<header className="bg-dark">
			<Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className="main-nav">
						<Navbar.Brand href="#home">Online Class</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
					</div>
					<div className="cart-icon">
						<Navbar.Brand href="#cart"/><FontAwesomeIcon icon={faShoppingCart} />
						{props.cart.length ? <sup>{props.cart.length}</sup> : ""}
					</div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#home">Home</NavDropdown.Item>
                                <NavDropdown.Item href="#about">About</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
			</Container>
		</header>
	);
};

export default Header;





