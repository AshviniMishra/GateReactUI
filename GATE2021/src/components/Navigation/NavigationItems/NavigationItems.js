import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';

import './NavigationItems.css'

class navigationItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            session: localStorage.getItem('session')
        }
    }

    componentWillUpdate() {
        console.log('Session from NavigationItems ', this.state.session);
    }

    render() {
        console.log(localStorage.getItem('session'));
        let navElement1 = null;
        if (this.props.context.appStage === 'REGISTRATION') {
            navElement1 = (<NavigationItem to="/register">Register</NavigationItem>);
        }

        let navElement2 = null;

        // if (localStorage.getItem('session').userLoggerIn == false) {
        //     navElement2 = (<NavigationItem to="/login">Logout</NavigationItem>);
        // } else {
        //     navElement2 = (<NavigationItem to="/login">Login</NavigationItem>)
        // }

        return (
            <ul className="Navigation">
                <NavigationItem to="/" exact>Home</NavigationItem>
                {navElement1}
                {navElement2}
                <NavigationItem to="/faqs">FAQs</NavigationItem>

            </ul>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('[Naviagation Items ] should component update');
        return true;
    }

    componentDidUpdate(props) {
        if (props.connect.userLoggerIn)
            this.render();
    }
};

const mapStateToProps = state => {
    return {
        context: state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (constextV) => dispatch({ cont: constextV })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(navigationItems);