import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Header from '../Header/Header';
import SidePane from '../Navigation/SidePane/SidePane';
import Footer from '../Footer/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import MessageBoard from '../UI/MessageBoard/MessageBoard';

import '../../bootstrap/bootstrap.css';
import '../../bootstrap/bootstrap-grid.css';

import './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    componentDidMount() {
        console.log('[Layout.js] component did mount');
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        let layout = (
            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                    </Col>
                </Row>

                <Row >
                    <Col md={4} lg={4} ><SidePane /></Col>
                    <Col xs={12} sm={12} md={8} lg={8} style={{ borderLeft: "solid grey 0.5px", }}>
                        <Row>
                            <Col>
                                <MessageBoard />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col><Footer /></Col>
                </Row>
            </Container>
        );

        return layout;
    }
}
export default Layout;