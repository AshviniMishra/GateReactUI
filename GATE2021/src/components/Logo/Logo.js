import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from '../../assests/Images/c_logo.png';

import './Logo.css';

const logo = (props) => (
    <Row className="Logo">
        <Col style={{ height: props.height }}>
            <img src={props.path} alt={props.alternate} />
        </Col>
    </Row>
);

export default logo;