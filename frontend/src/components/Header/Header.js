import React from 'react';
import {Navbar, Container, Row, Col, Offcanvas, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-primary">
            <Navbar expand="false" bg="dark" variant="dark">
                <Container>
                    <Row className="w-100 m-auto">
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <Navbar.Brand href="#" className="text-center text-md-start w-100">Christian Ong</Navbar.Brand>
                        </Col>
                        <Col xs={12} md={6} className="d-flex align-items-center justify-content-between justify-content-md-end">
                            <Link to="cart">
                                <FontAwesomeIcon icon={solid('cart-shopping')} />
                            </Link>
                            <Link to="search">
                                <FontAwesomeIcon icon={solid('magnifying-glass')} />
                            </Link>
                            <Link to="wishlist">
                                <FontAwesomeIcon icon={solid('heart')} />
                            </Link>
                            <Link to="account">
                                <FontAwesomeIcon icon={solid('user')} />
                            </Link>
                            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" children={<FontAwesomeIcon icon={solid('bars')} />} />
                        </Col>
                    </Row>
                    <Navbar.Offcanvas id="offcanvasNavbar-expand-false" aria-labelledby="offcanvasNavbarLabel-expand-false" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                        Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id="offcanvasNavbarDropdown-expand-false"
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}
 
export default Header;