import React, { Component } from 'react';
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Input from '../../Input/Input';

class ChangeApplicantDetails extends Component {

    state = {
        applicationForm: {
            Current_Information: {
                enrollmentId: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Enrollment ID',
                        readOnly: 'readOnly',
                        id: 'enrollmentId'
                    },
                    label: 'Enrollment ID',
                    value: 'C449E82'
                },

                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Name of the Candidate',
                        id: 'name'
                    },
                    label: 'Name of the Candidate',
                    value: ''
                },
            },

            Applicant_Personal_Details: {
                first_name: {
                    elementType: 'Sinput',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'First Name',
                        id: 'fname',
                    },
                    label: 'First Name',
                    css: {
                        style: {
                            width: '33.33%',
                            float: 'left',
                            position: 'relative',
                            backgroundColor: 'white',
                            font: 'inherit',
                            borderRadius: '5px'
                        }
                    },
                    value: ''
                },
                middle_name: {
                    elementType: 'Sinput',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Middle Name',
                        id: 'Mname',
                    },
                    css: {
                        style: {
                            width: '33.33%',
                            float: 'left',
                            position: 'relative',
                            backgroundColor: 'white',
                            font: 'inherit',
                            borderRadius: '5px'
                        }
                    },
                    label: 'Middle Name',
                    value: ''
                },
                last_name: {
                    elementType: 'Sinput',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Last Name',
                        id: 'lname',
                    },
                    css: {
                        style: {
                            width: '33.33%',
                            float: 'left',
                            position: 'relative',
                            backgroundColor: 'white',
                            font: 'inherit',
                            borderRadius: '5px'
                        }
                    },
                    label: 'Last Name',
                    value: ''
                },
                full_name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Full Name',
                        id: 'full_name',
                        readOnly: '{true}'
                    },
                    label: 'Full Name',
                    desc: 'Above name will appear in qualifying score card, so adjust accordingly',
                    value: ''
                },
                conf_button: {
                    elementType: 'button',
                    elementConfig: {
                        type: 'button',
                        val: 'Confirm',
                    }
                }
            }
        },
        fn: ''
    }

    applicationHandler = (event) => {
        event.preventDefault();
        const user = {};
        for (let key in this.state.applicationForm) {
            for (let formElementIdentifier in this.state.applicationForm[key]) {
                let x = this.state.applicationForm[key];
                user[formElementIdentifier] = x[formElementIdentifier].value;
            }
        }
        console.log("The form data is ", JSON.stringify(user, null, 5));
    }

    inputChangedHandler = (event, inputIdentifier, key) => {
        event.preventDefault();
        const updatedApplicationForm = {
            ...this.state.applicationForm
        }
        let subSection = {
            ...updatedApplicationForm[key]
        };
        const updatedApplicationFormElement = {
            ...subSection[inputIdentifier]
        };
        updatedApplicationFormElement.value = event.target.value;
        subSection[inputIdentifier] = updatedApplicationFormElement;
        updatedApplicationForm[key] = {
            ...subSection
        };
        if (inputIdentifier === 'first_name' || inputIdentifier === 'middle_name' || inputIdentifier === 'last_name') {
            const fne = {
                ...subSection['full_name']
            }

            subSection['full_name'].value = subSection['first_name'].value + subSection['middle_name'].value + subSection['last_name'].value;
        }
        this.setState({ applicationForm: updatedApplicationForm });
    }

    confirmName = (event) => {
        event.preventDefault();
        alert('Name is confirmed');
        const newAppForm = {
            ...this.state.applicationForm,

            DOB_Change: {
                dob: {
                    elementType: 'input',
                    elementConfig: {

                    },
                    value: 'asdf'
                }
            }
        }
        console.log('New FOrm -> ' + JSON.stringify(newAppForm, null, 5));
        this.setState({ applicationForm: newAppForm });
    }

    render() {

        const headElementAray = [];
        for (let key in this.state.applicationForm) {
            let conf = this.state.applicationForm[key];
            const formElementsArray = [];
            for (let k in conf) {
                formElementsArray.push(
                    {
                        id: k,
                        config: conf[k],
                    }
                )
            }
            headElementAray.push(
                {
                    id: key,
                    config: conf,
                    arr: formElementsArray
                }
            )
        }

        return (
            <React.Fragment>

                <Row>
                    <Col>
                        <h2 className="text-center"><Badge variant='light'>Applicant's Correction Request for GATE</Badge></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form onSubmit={this.applicationHandler}>
                            {
                                headElementAray.map(hE => (
                                    <Accordion defaultActiveKey={hE.id} key={hE.id}>
                                        <Card style={{ marginBottom: '15px' }}>
                                            <Accordion.Toggle as={Card.Header} eventKey={hE.id}>
                                                <h3>
                                                    <Badge variant="light" style={{ width: '100%' }}>{hE.id}</Badge>
                                                </h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey={hE.id}>
                                                <Card.Body>
                                                    {
                                                        hE.arr.map(formElement => (
                                                            <Input
                                                                key={formElement.id}
                                                                elementType={formElement.config.elementType}
                                                                elementConfig={formElement.config.elementConfig}
                                                                label={formElement.config.label}
                                                                value={formElement.config.value}
                                                                desc={formElement.config.desc}
                                                                css={formElement.config.css}
                                                                confirmName={(event) => this.confirmName(event)}
                                                                changed={(event) => this.inputChangedHandler(event, formElement.id, hE.id)} />
                                                        ))
                                                    }
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                ))
                            }
                            <button type="submit" className="btn btn-primary">submit</button>
                        </form>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default ChangeApplicantDetails;