import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Notice from '../Notice/Notice';
import { connect } from 'react-redux';

class RectifyDefect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let heading, subHeading, content, extraContent, footer, temp;
        heading = subHeading = content = extraContent = footer = temp = null;

        if (!this.props.context.isLocked) {
            heading = "Application Status";
            content = (
                <div class="panel-body">Application form filled partially/not
			    submitted within the deadline and hence could not be processed.</div>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 1) {
            heading = "Application Status";
            content = (
                <div class="panel-body">Payment has not been made within the
                deadline and hence application could not be processed.</div>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 11) {
            heading = "Payment";
            extraContent = (
                <div class="bg-danger">
                    <h4 class="alert text-justify">
                        <strong>NOTE:</strong> Candidates, in case you have registered for
                    GATE and made payment of the application fees which has been
                    deducted but not showing in your GATE form, then please
                    immediately send your GATE Enrollment ID, bank transaction ID(s), bank
                    name(s) and date of payment(s) to the following email <a
                            href="mailto:gate2020@iitd.ac.in">gate2020@iitd.ac.in</a>
                    </h4>
                </div>
            );
            content = (
                < div >
                    {extraContent}
                    Payment has not been made within the
                    deadline and hence application could not be processed.
                </div >
            );
        }
        else if (this.props.context.isLocked && (this.props.context.applicationState === 12 ||
            this.props.context.applicationState === 2 || this.props.context.applicationState === 3)) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col xs={12} md={12}>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td>session.igEnrolmentId}</td>
                            </tr>
                            <tr>
                                <td>Applicant Name</td>
                                <td><span class="text-capitalize"></span></td>
                            </tr>
                            <tr>
                                <td class="col-xs-2">Status</td>
                                <td></td>
                            </tr>
                        </table>
                    </Col>
                    <Col xs={12} md={12}>
                        {/* <jsp:include page="/WEB-INF/jsp/OTP.jsp"/> */}
                        <a class="btn btn-primary" href="dlApplicationForm.html"
                            target="_blank">Download Application Form</a>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 5) {
            heading = "Application Status";
            switch (this.props.context.nameChangeReqStatus) {
                case 1:
                    temp = (
                        <p class="alert alert-success no-list">
                            Your request for name change is under process. You will be notified about status of request through email.
		</p>
                    );
                    break;

                case 2:
                    temp = (
                        <p class="alert alert-success no-list">
                            Your request for name change has been approved.
		</p>
                    );
                    break;

                case 3:
                    temp = (
                        <p class="alert alert-danger no-list">
                            Your request for name change has been rejected. Please click <strong>Change Applicant Details</strong> to request again.
		</p>
                    );
                    break;

                default:
                    break;
            }

            switch (this.props.context.dobChangeReqStatus) {
                case 1:
                    extraContent = (
                        <p class="alert alert-success no-list">
                            Your request for Date of Birth change is under process. You will be notified about status of request through email.
		</p>
                    );
                    break;

                case 2:
                    extraContent = (
                        <p class="alert alert-success no-list">
                            Your request for Date of Birth change has been approved.
                    </p>
                    );
                    break;

                case 3:
                    extraContent = (
                        <p class="alert alert-danger no-list">
                            Your request for Date of Birth change has been rejected. Please click <strong>Change Applicant Details</strong> to request again.
		</p>
                    );
                    break;

                default:
                    break;
            }
            content = (
                <div>
                    {temp}
                    {extraContent}
                    <Row>
                        <Col xs={12} md={12}>
                            <p>Application form found to be defective! Please click "Rectify
				        Defects" to take action against defect(s) found.</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <Row>
                                {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                                <Col xs={4} md={4}>
                                    <div class="text-left">
                                        <a class="btn btn-info" href="viewApplicationForm.html">View
				            Application Form</a>
                                    </div>
                                </Col>
                                <Col xs={4} md={4}>
                                    <div class="text-left">
                                        <a class="btn btn-primary"
                                            href="rectifyDefects.html">Rectify Defects</a>
                                    </div>
                                </Col>
                                <Col xs={4} md={4}>
                                    <div class="text-left">
                                        <a class="btn btn-primary" href="changeAppDetails.html">Change
				                    Applicant Details</a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 9) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col xs={12} md={12}>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td>session.igEnrolmentId}</td>
                            </tr>
                            <tr>
                                <td>Applicant Name</td>
                                <td><span class="text-capitalize"></span></td>
                            </tr>
                            <tr>
                                <td class="col-xs-2">Status</td>
                                <td></td>
                            </tr>
                        </table>
                    </Col>
                    <Col xs={12} md={12}>
                        <div class="text-right">
                            {/* <jsp:include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-info" href="viewApplicationForm.html">View
				                Application Form</a>
                        </div>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 4) {
            heading = "Application Status";
            switch (this.props.context.nameChangeReqStatus) {
                case 1:
                    temp = (
                        <p class="alert alert-success no-list">
                            Your request for name change is under process. You will be notified about status of request through email.
		</p>
                    );
                    break;

                case 2:
                    temp = (
                        <p class="alert alert-success no-list">
                            Your request for name change has been approved.
		</p>
                    );
                    break;

                case 3:
                    temp = (
                        <p class="alert alert-danger no-list">
                            Your request for name change has been rejected. Please click <strong>Change Applicant Details</strong> to request again.
		</p>
                    );
                    break;

                default:
                    break;
            }

            switch (this.props.context.dobChangeReqStatus) {
                case 1:
                    extraContent = (
                        <p class="alert alert-success no-list">
                            Your request for Date of Birth change is under process. You will be notified about status of request through email.
		</p>
                    );
                    break;

                case 2:
                    extraContent = (
                        <p class="alert alert-success no-list">
                            Your request for Date of Birth change has been approved.
                    </p>
                    );
                    break;

                case 3:
                    extraContent = (
                        <p class="alert alert-danger no-list">
                            Your request for Date of Birth change has been rejected. Please click <strong>Change Applicant Details</strong> to request again.
		</p>
                    );
                    break;

                default:
                    break;
            }
            content = (
                <div>
                    {temp}
                    {extraContent}
                    <Row>
                        <Col xs={12} md={12}>
                            <p>Application form found to be defective! Please click "Rectify
				        Defects" to take action against defect(s) found.</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <Row>
                                {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                                <Col xs={6} md={6} large={6}>
                                    <div class="text-left">
                                        <a class="btn btn-primary" href="dlApplicationForm.html"
                                            target="_blank">Download Application Form</a>
                                    </div>
                                </Col>
                                <Col xs={6} md={6} large={6}>
                                    <div class="text-left">
                                        <a class="btn btn-primary" href="changeAppDetails.html">Change
				                    Applicant Details</a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            );
        }
        else {
            heading = "Application Status";
            content = (
                <Row>
                    <Col xs={12} md={12}>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td>session.igEnrolmentId}</td>
                            </tr>
                            <tr>
                                <td>Applicant Name</td>
                                <td><span class="text-capitalize"></span></td>
                            </tr>
                            <tr>
                                <td class="col-xs-2">Status</td>
                                <td></td>
                            </tr>
                        </table>
                    </Col>
                    <Col xs={12} md={12}>
                        <div class="text-right">
                            {/* <jsp:include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-info" href="viewApplicationForm.html">View
				                Application Form</a>
                        </div>
                    </Col>
                </Row>
            );
        }

        return (
            <React.Fragment>
                <Notice heading={heading} subHeading={subHeading}>
                    {content}
                </Notice>
            </React.Fragment>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(RectifyDefect);