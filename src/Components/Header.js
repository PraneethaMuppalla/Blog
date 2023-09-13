import React from 'react'
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';
import placeholder from "../Images/BlogLogo.png"

const Header = () => {
    return (
        <Container fluid className='main-header-flex'>
            <Row className='d-flex '>
                <Col xs={2} className='d-flex justify-content-start'>
                    <img  src={placeholder} alt="logo" className='h-75 w-50 rounded-circle'  />
                
                        </Col>
                        <Col  xs={10}>
                        <div>
                            <ul className='d-flex justify-content-end header-list-container'>
                                <li>About</li>
                                <li>Contact Me</li>
                                <li>Services</li>
                            </ul>
                        </div>
                    
                </Col>
            </Row>
        </Container>


    )
}

export default Header
