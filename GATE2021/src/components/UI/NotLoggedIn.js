import React from 'react';
import Card from 'react-bootstrap/Card';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';

const notLoggedIn = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>You are not Logged In</Card.Title>
                <Card.Text>
                    Kindly Log In
                </Card.Text>
                <NavigationItem to="/login">Login</NavigationItem>
            </Card.Body>
        </Card>
    )
}

export default notLoggedIn;