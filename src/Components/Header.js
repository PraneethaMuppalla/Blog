import React from 'react'
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Container fluid className='main-header-flex'>
            <Row className='d-flex '>
                <Col xs={2} className='d-flex justify-content-start'>
                    
                        <div className='mr-auto p-2'>Logo</div>
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
