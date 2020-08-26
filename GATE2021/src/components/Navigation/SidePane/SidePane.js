import React from 'react';
import NavigationItem from '..//NavigationItems/NavigationItem/NavigationItem';
import { Container, Row, Col } from 'react-bootstrap';
import './SidePane.css';

const sidePane = (props) => (
    <Container className="DesktopOnly" style={{ borderLeft: "solid grey 0.5px", }}>
        <Row>
            <Col>
                <NavigationItem to="/information_brochure" target="_blank">Information Brochure</NavigationItem>
                <NavigationItem to="/ChangeCandidateDetails">Documents for Application</NavigationItem>
                <NavigationItem to="/idates" target="_blank">Important Dates</NavigationItem>
                <NavigationItem to="/documentrequirement" target="_blank">Eligibility</NavigationItem>
                <NavigationItem to="/faq" target="_blank">FAQs</NavigationItem>
                <NavigationItem to="/imp" target="_blank">Important Notice</NavigationItem>
            </Col>
        </Row>
    </Container>
);

export default sidePane;