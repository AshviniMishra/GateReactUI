import React, { Component } from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Validate from '../../../../globals/Validate';

class ResetPassword extends Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = {
            resetPasswordForm: {
                enrolmentId: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'E-mail',
                        label: 'Enrollment ID/ Email Address',
                        desc: 'Enter Enrollment ID sent during registration / Email ID'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                otp: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: '',
                        label: 'One Time Password',
                        desc: 'Enter the One Time Password sent to your Mobile number/Email address',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                NewPassword: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: '',
                        label: 'New Password',
                        desc: 'Enter a password as per the specification given.'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                ConfirmNewPassword: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: '',
                        label: 'Confirm New Password',
                        desc: 'Entered value should be same as that of New Password field'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
            },
            formIsValid: false
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        event.preventDefault();
        const updatedRegisterForm = {
            ...this.state.resetPasswordForm
        }
        const updatedRegisterFormElement = {
            ...updatedRegisterForm[inputIdentifier]
        }
        updatedRegisterFormElement.value = event.target.value;
        updatedRegisterFormElement.valid = Validate.checkValidity(updatedRegisterFormElement.value,
            updatedRegisterFormElement.validation);
        updatedRegisterFormElement.touched = true;
        updatedRegisterForm[inputIdentifier] = updatedRegisterFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterForm) {
            formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ resetPasswordForm: updatedRegisterForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.resetPasswordForm) {
            formElementsArray.push({
                id: key,
                config: this.state.resetPasswordForm[key]
            });
        }

        let registerLink = null;

        // if (this.props.context.appStage === 'REGISTRATION') {
        //     registerLink = (<NavLink to="/register">New User? Register Here</NavLink>);
        // }

        let form = (
            <React.Fragment>
                <h1>LOGIN</h1>
                <form onSubmit={this.registerHandler}>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            label={formElement.config.elementConfig.label}
                            inValid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            desc={formElement.config.elementConfig.desc} />
                    ))}
                    <Button variant="primary" disabled={!this.state.formIsValid}>Submit</Button>
                </form>
                {registerLink}
            </React.Fragment>
        );

        return form;
    };
}

export default ResetPassword;