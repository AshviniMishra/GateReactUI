import React from 'react';
import Card from 'react-bootstrap/Card'
import '../../../bootstrap/bootstrap-grid.css';
import '../../../bootstrap/bootstrap.css';
import './Notice.css';

const Notice = (props) => {
    return (
        <React.Fragment>
            <div className="Notice">
                <Card>
                    <Card.Body>
                        <h3 className="text-center"><Card.Header >{props.heading}</Card.Header></h3>
                        <Card.Text>
                            <React.Fragment>
                                {(props.subHeading != null && props.subHeading !== '') ?
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                {props.subHeading}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> :
                                    null
                                }
                                {props.children}
                            </React.Fragment>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    )
}
export default Notice;