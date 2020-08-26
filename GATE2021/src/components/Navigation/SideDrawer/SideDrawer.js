import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Row, Col } from 'react-bootstrap';

import './SideDrawer.css';

const sideDrawer = (props) => {
    //...

    let attachedClasses = ["SideDrawer", "Close"]

    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }

    return (
        <Row>
            <Col>
                <Backdrop show={props.open} clicked={props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <div className="Logo-Sidedrawer">
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                        <NavigationItem to="/information_brochure" target="_blank">Information Brochure</NavigationItem>
                        <NavigationItem to="/applicationForm">Documents for Application</NavigationItem>
                        <NavigationItem to="/idates" target="_blank">Important Dates</NavigationItem>
                        <NavigationItem to="/documentrequirement" target="_blank">Eligibility</NavigationItem>
                        <NavigationItem to="/faq" target="_blank">FAQs</NavigationItem>
                        <NavigationItem to="/imp" target="_blank">Important Notice</NavigationItem>
                    </nav>
                </div>
            </Col>
        </Row>
    );
}

export default sideDrawer;