import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReCAPTCHA from 'react-google-recaptcha';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    let inputClass = ["InputElement"];

    if (props.inValid && props.shouldValidate && props.touched) {
        inputClass.push("InputElement-Invalid")
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6>
                    <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} {...props.css} />
                </React.Fragment>
            )
            break;

        case ('Sinput'):
            inputElement = (
                <div key={props.elementConfig.id} {...props.css} >
                    {props.label != null && props.label !== '' ? <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6> : null}
                    <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
                </div>
            )
            break;

        case ('SpecialInput'):
            inputElement = (
                <Row key={props.elementConfig.id} {...props.css} >
                    <Col><h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6></Col>]
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
                    </Col>
                </Row>
            )
            break;

        case ('textarea'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6>
                    <textarea onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
                </React.Fragment>
            )
            break;

        case ('file'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} />
                        </Col>

                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div id="photographPreview" className="thumbnail" style={{ boxSizing: 'border-box', padding: '5px', border: 'dark 1px', borderStyle: 'ridge', borderRadius: '5px', margin: '5px' }}>
                                <p id="photoAnalysis"> </p>
                                <div className="photoThumbnail text-center">
                                    <Image alt="Photograph" src="preview.html?photo=C115C62" style={{ width: '120px', height: '160px' }} />
                                </div>
                                <div className="caption">
                                    <p id="uploadPhotoStatus" className="text-center help-block alert-success">Photograph
											uploaded successfully.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </React.Fragment >
            )
            break;

        case ('select'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6>
                    <select onChange={props.changed} onClick={props.selected} className={inputClass.join(' ')} value={props.value} >
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        ))}
                    </select>
                </React.Fragment>
            );
            break;

        case ('radio'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6>
                    {
                        props.elementConfig.options.map(option => (
                            <Row key={option.value}>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <input onChange={props.changed} className={inputClass.join(' ')} checked={option.checked} type="radio" id={option.value} name={option.value} value={option.value} />
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <label htmlFor={option.value}>{option.value}</label>
                                </Col>
                            </Row>
                        ))
                    }
                </React.Fragment>
            )
            break;

        case ('checkbox'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    {/* <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6> */}
                    {
                        props.elementConfig.options.map(option => (
                            <Card style={{ border: 'solid aqua 0.5px' }} id={option.value}>
                                <Card.Body >
                                    <Card.Text>
                                        <input onChange={props.changed} className={inputClass.join(' ')} type="checkbox" name={option.value} value={option.value} />
                                        {option.value}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </React.Fragment>
            )
            break;

        case ('button'):
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <Button {...props.elementConfig.classname} onClick={props.clicked}>{props.elementConfig.val}</Button>
                </React.Fragment>
            )
            break;

        case ('para'):
            inputElement = (
                <React.Fragment>
                    <h6><label>{props.label}</label></h6>
                    <Row>
                        <Col md={4} lg={4} sm={4} xs={12}>
                            <p >
                                <em>{props.elementConfig.para}</em>
                            </p>
                        </Col>

                        <Col md={4} lg={4} sm={4} xs={12}>
                            <div id="emailOTP_ShowAfterSuccessfulOTPVerification" style={{ display: 'block' }}>
                                <p>✔ Verified</p>
                            </div>
                        </Col>

                        <Col md={4} lg={4} sm={4} xs={12}>
                            <div id="emailOTPLanding">
                                <button type="button" className="btn btn-primary  pull-left" id="verifyEmail" onClick={props.elementConfig.clicked}>{props.elementConfig.verify}</button>
                                <button type="button" className="btn btn-primary  pull-left" id="reSendEmailOTP" style={{ marginLeft: '10px', display: 'none' }}>Re-send OTP</button>
                                <p id="incorrectEmailOTP" style={{ color: 'red', display: 'none' }}>✘ Incorrect OTP</p>
                            </div>
                        </Col>
                    </Row>
                </React.Fragment>
            );
            break;

            case('captcha'):
                inputElement = (
                    <React.Fragment>
                        <ReCAPTCHA onChange = {props.changed} sitekey="Your client site key"/>
                        <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} {...props.css} />
                    </React.Fragment>
                );
                break;

        default:
            inputElement = (
                <React.Fragment key={props.elementConfig.id}>
                    <h6><label htmlFor={props.elementConfig.id}>{props.label}</label></h6>
                    <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
                </React.Fragment>
            )
    }

    return (
        <div className="Input" key={props.label}>
            {inputElement}
            {props.desc != null && props.desc !== '' ? <small> <span className="text-muted">{props.desc}</span></small> : null}
            {props.err != null && props.err !== '' ? <small className="text-danger">{props.err}</small> : null}
        </div>
    );
};

export default input;