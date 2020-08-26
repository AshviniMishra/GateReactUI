import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Notice from '../Notice/Notice';
import { connect } from 'react-redux';
import NotLoggedIn from '../NotLoggedIn';

class Profile extends Component {
    constructor(props) {
        super(props);
        let session = JSON.parse(localStorage.getItem('session'));
        if (session.userLoggerIn) {
            console.log("User logger in successfully");
        }
        if (!session.userLoggerIn) {
            console.log('Use is not logger in');
        }
    }

    componentWillUnmount = () => {
        let session = JSON.parse(localStorage.getItem('session'));
        localStorage.clear();
        console.log("User is being logged out");
    }

    render() {
        let profileElement;
        let session = JSON.parse(localStorage.getItem('session'));
        if (!session.isLocked) {
            if (session.declaration == null || session.declaration.length === 0) {
                profileElement = (<Notice>Before starting the GATE 2020
                application, please ensure that you have gone through the GATE 2020
                information brochure and have the documents/data required for
                    filling the application.</Notice>);
            }
            else {
                profileElement = (
                    <Notice>
                        Application form has been filled partially/not yet submitted. Please
                        click "Edit Application Form" to continue filling the application
                        form.
                    </Notice>
                );
            }
            if (session.applicationState === 1) {
                profileElement = (
                    <Container>
                        <Row>
                            <Col xs={8}>
                                <Notice heading="Payment" subHeading="Important Note">
                                    <p>
                                        Application form has been submitted successfully.
                                        Please click "Make Payment" to
                                        proceed to payment page.
                                </p>
                                    <br />
                                    <p>
                                        NOTE :
                                    <br />
                                        For the candidate's own benefit and security, it is strongly
                                        recommended that the candidate uses his/her own credit card/bank
                                        account/debit card or those of a very trusted person only. From previous
                                        experiences, frauds are known to have happened if a candidate uses a
                                        relatively lesser known person's credit card for fee payment.
                                    </p>
                                </Notice>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        }
        else if (session.isLocked && session.applicationState === 1) {
            profileElement = (
                <Notice heading="Payment">
                    <p>Application form has been submitted successfully. Please click
            "Make Payment" to proceed to payment page.</p>
                    <strong>NOTE :</strong><br /> <em>For the candidate's own
                    benefit and security, it is strongly recommended that the candidate
                    uses his/her own credit card/bank account/debit card or those of a
                    very trusted person only. From previous experiences, frauds are
                    known to have happened if a candidate uses a relatively lesser known
            person's credit card for fee payment.</em>

                    <Row>
                        <Col xs={6}><a className="btn btn-primary" href="doPayment.html">Make
                        Payment</a>
                        </Col>
                        <Col xs={6}><a className="btn btn-info" href="viewApplicationForm.html">View
				        Application Form</a>
                        </Col>
                    </Row>
                </Notice>
            );
        }
        else if (session.isLocked && session.applicationState === 11) {
            profileElement = (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4 className="panel-title">Application Status</h4>
                    </div>
                    <div className="panel-body"></div>
                    <table className="table">
                        <tr>
                            <td>Enrollment ID</td>
                            <td>{session.enrolmentId}</td>
                        </tr>
                        <tr>
                            <td>Applicant Name</td>
                            <td><span className="text-capitalize"></span></td>
                        </tr>
                        <tr>
                            <td className="col-xs-2">Status</td>
                            <td></td>
                        </tr>
                    </table>
                    <div className="panel-footer text-right">
                        <Row>
                            <Col xs={4} md={4}><a className="btn btn-info" href="viewApplicationForm.html">View
				            Application Form</a></Col>
                            <Col xs={4} md={4}><a className="btn btn-primary"
                                href="https://www.onlinesbi.com/merchant/merchantbranchpdf.htm?referenceNo=<s:property />"
                                target="_blank" rel="noopener noreferrer">Print Challan</a></Col>
                            <Col xs={4} md={4}><a className="btn btn-primary" href="dlChallan.html" target="_blank">Print
					        Challan</a></Col>
                        </Row>
                        {/* <s: if test="%{#session.igApplicant.bankId == 'SBI'}"> */}
                    </div >
                </div >);
        }
        else if (session.isLocked && (session.applicationState === 12 || session.applicationState === 2 || session.applicationState === 3)) {
            profileElement = (
                <Notice heading="Application Status">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h4 className="panel-title">Application HEading</h4>
                        </div>
                        <div className="panel-body">
                            <div className="alert alert-info">
                                <p>1) Your uploaded documents are under verification (scrutiny).
                                The scrutiny process will continue even after the application
                            portal is closed.</p>
                                <p>2) Only those candidates whose applications need to be
                                rectified in photo/signature/supporting documents, will be
                            contacted by email and SMS.</p>
                                <p>
                                    3) Please visit (<strong>gate.iitd.ac.in</strong>) regularly for
                                    all query related issues / updates.
                        </p>
                            </div>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td>{session.enrolmentId}</td>
                            </tr>
                            <tr>
                                <td>Applicant Name</td>
                                <td><span className="text-capitalize"></span></td>
                            </tr>
                            <tr>
                                <td className="col-xs-2">Status</td>
                                <td></td>
                            </tr>
                        </table>
                        <div className="panel-footer text-left">
                            {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp" /> */}
                            <a className="btn btn-primary" href="dlApplicationForm.html"
                                target="_blank">Download Application Form</a>

                        </div>
                    </div>
                </Notice>
            );
        }
        else if (session.isLocked && session.applicationState === 5) {
            let heading, subHeading, content, extraContent, footer, temp;
            heading = subHeading = content = extraContent = footer = temp = null;
            switch (session.nameChangeReqStatus) {
                case 1:
                    extraContent = <p className="alert alert-success no-list">Your request for name
                    change is under process. You will be notified about status of
                    request through email.</p>
                    break;

                case 2:
                    extraContent = <p className="alert alert-success no-list">Your request for name
                    change has been approved.</p>
                    break;

                case 3:
                    extraContent = <p className="alert alert-danger no-list">
                        Your request for name change has been rejected. Please click <strong>Change
                        Applicant Details</strong> to request again.</p>
                    break;

                default:
                    extraContent = null;
                    break;
            }

            switch (session.dobChangeReqStatus) {
                case 1:
                    temp = <p className="alert alert-success no-list">Your request for Date of
                    Birth change is under process. You will be notified about status of
                    request through email.</p>
                    break;

                case 2:
                    temp = <p className="alert alert-success no-list">Your request for Date of
                    Birth change has been approved.</p>
                    break;

                case 3:
                    temp = <p className="alert alert-danger no-list">
                        Your request for Date of Birth change has been rejected. Please
                            click <strong>Change Applicant Details</strong> to request again.
                            </p>
                    break;

                default:
                    temp = null;
                    break;
            }

            heading = "Application Status";
            content = (
                <React.Fragment>
                    <p>Application form found to be defective! Please click "Rectify
                    Defects" to take action against defect(s) found.</p>
                    <div className="panel-footer text-right">
                        {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp" /> */}

                        <a className="btn btn-info " href="viewApplicationForm.html">View
				Application Form</a> <a className="btn btn-primary "
                            href="rectifyDefects.html">Rectify Defects</a>
                    </div>
                </React.Fragment>
            );

            profileElement = (
                <React.Fragment>
                    {extraContent}
                    {temp}
                    <Notice heading={heading}>{content}</Notice>
                </React.Fragment>
            );
        }
        else if (session.isLocked && session.applicationState === 4) {
            let heading, subHeading, content, extraContent, footer, temp;
            heading = subHeading = content = extraContent = footer = temp = null;
            switch (session.nameChangeReqStatus) {
                case 1:
                    extraContent = <p className="alert alert-success no-list">Your request for name
                    change is under process. You will be notified about status of
                    request through email.</p>
                    break;

                case 2:
                    extraContent = <p className="alert alert-success no-list">Your request for name
                    change has been approved.</p>
                    break;

                case 3:
                    extraContent = <p className="alert alert-danger no-list">
                        Your request for name change has been rejected. Please click <strong>Change
                        Applicant Details</strong> to request again.</p>
                    break;

                default:
                    extraContent = null;
                    break;
            }

            switch (session.dobChangeReqStatus) {
                case 1:
                    temp = <p className="alert alert-success no-list">Your request for Date of
                    Birth change is under process. You will be notified about status of
                    request through email.</p>
                    break;

                case 2:
                    temp = <p className="alert alert-success no-list">Your request for Date of
                    Birth change has been approved.</p>
                    break;

                case 3:
                    temp = <p className="alert alert-danger no-list">
                        Your request for Date of Birth change has been rejected. Please
                            click <strong>Change Applicant Details</strong> to request again.
                            </p>
                    break;

                default:
                    temp = null;
                    break;
            }

            heading = "Application Status";
            content = (
                <React.Fragment>
                    <table class="table">
                        <tr>
                            <td>Enrollment ID</td>
                            <td>{session.enrolmentId}</td>
                        </tr>
                        <tr>
                            <td>Applicant Name</td>
                            <td><span class="text-capitalize">{session.applicantName}</span></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2">Status</td>
                            <td>Your application is found to be in order and has been accepted.</td>
                        </tr>
                    </table>
                    <div className="panel-footer text-right">
                        {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp" /> */}

                        <a className="btn btn-primary" href="viewApplicationForm.html">View
				        Form</a> <a className="btn btn-primary" href="dlApplicationForm.html"
                            target="_blank">Download Application Form</a>
                    </div>
                </React.Fragment>
            );

            profileElement = (
                <React.Fragment>
                    {extraContent}
                    {temp}
                    <Notice heading={heading}>{content}</Notice>
                </React.Fragment>
            );
        }
        else if (session.isLocked && session.applicationState === 9) {
            const heading = "Application State";
            const content = (
                <React.Fragment>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Enrollment ID</td>
                                <td>
                                    {session.enrolmentId}
                                </td>
                            </tr>
                            <tr>
                                <td>Applicant Name</td>
                                <td><span className="text-capitalize">
                                    {/* <s: property value="%{#session.igApplicant.applicantName.toLowerCase()}" /> */}
                                </span></td>
                            </tr>
                            <tr>
                                <td className="col-xs-2">Status</td>
                                <td>
                                    {/* <s: property value="%{#session.igApplicant.statusMessage}" /> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="panel-footer text-right">
                        {/* <jsp:include page="/WEB-INF/jsp/OTP.jsp" /> */}

                        <a className="btn btn-info" href="viewApplicationForm.html">View
                    Application Form</a>
                    </div>
                </React.Fragment>
            );
            profileElement = <Notice heading={heading}>{content}</Notice>
        }
        if (session.userLoggerIn)
            return profileElement
        else
            return <NotLoggedIn />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);