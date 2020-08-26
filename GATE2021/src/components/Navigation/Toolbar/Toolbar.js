import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Row, Col } from 'react-bootstrap';

import './Toolbar.css';
const toolbar = (props) => (
    <Row className="Toolbar">
        <Col>
            <header>
                <DrawerToggle clicked={props.drawerToggleClicked} />

                <nav className="DesktopOnly">
                    <NavigationItems />
                </nav>
            </header>
        </Col>
    </Row>
);

export default React.memo(toolbar);