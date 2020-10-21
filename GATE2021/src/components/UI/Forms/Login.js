import React, { Component } from 'react';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import axios from '../../../axiosConfig';
import Validate from '../../../globals/Validate';

class login extends Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = {
            registerForm: {
                enrolmentId: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
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
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Enter your password',
                        label: 'Password',
                        desc: 'Enter your GOAPS password. (Case Sensitive)'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                // captcha:{
                //     elementType: 'captcha',
                //     elementConfig:{
                //         placeholder:'Evaluate the expression and place the value below'
                //     },
                //     value:'',
                //     touched:false
                // }
            },
            formIsValid: false
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        event.preventDefault();
        const updatedRegisterForm = {
            ...this.state.registerForm
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

        this.setState({ registerForm: updatedRegisterForm, formIsValid: formIsValid });
    }

    loginHandler = (event) => {
        event.preventDefault();
        const formData = {};

        for (let formElementIdentifier in this.state.registerForm) {
            formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
        }
        let user = formData;
        axios.post('doLogin', user).then(
            response => {
                localStorage.setItem('isUserLoggedIn',true);
                let session = {
                    ...this.props.context,
                    ...response.data
                }
                session.userLoggerIn = true;
                localStorage.setItem('session', JSON.stringify(session, null, 5));
                this.props.history.push('/profile');
            }
        ).catch(
            error => {
                localStorage.setItem('isUserLoggedIn',false);
                let session = {
                    ...this.props.context,
                    ...error
                }
                alert('Some error ocurred, Please try again!', error);
                localStorage.setItem('session', JSON.stringify(session));
            }
        )
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.registerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
            });
        }

        let registerLink = null;

        if (this.props.context.appStage === 'REGISTRATION') {
            registerLink = (<NavLink to="/register">New User? Register Here</NavLink>);
        }

        let form = (
            <React.Fragment>
                <h1>LOGIN</h1>
                <form onSubmit={this.loginHandler}>
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
                    <Button variant="primary" disabled={!this.state.formIsValid}>Login</Button>
                    <NavLink to="/forgotCredential">Forgot Password?</NavLink>
                </form>
                {registerLink}
            </React.Fragment>
        );

        return form;
    };
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
export default connect(mapStateToProps, mapDispatchToProps)(login);