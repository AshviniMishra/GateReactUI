import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/Logo';

import './Header.css'
import '../../bootstrap/bootstrap-grid.css';
import '../../bootstrap/bootstrap.css';
import CdacLogo from '../../assests/Images/c_logo.png';
import IITLogo from '../../assests/Images/IIt_kanpur.jpg';

const header = () => (
    <Row className="Header">
        <Col xs={12} sm={12} md={3} lg={3} xl={3} className="text-center"><Logo path={CdacLogo}
            alternate="CDAC_LOGO" /></Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="text-center">
            <h2>
                GATE Online Application Processing
                System (GOAPS)
                     </h2>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3} xl={3} className="text-center"><Logo path={IITLogo} alternate="IIT_Logo" /></Col>
    </Row>
);

export default header;