import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Notice from '../Notice/Notice';
import { connect } from 'react-redux';

class AdmitCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let heading, subHeading, content, extraContent, footer, temp;
        heading = subHeading = content = extraContent = footer = temp = null;

        if (!this.props.context.isLocked) {
            heading = "Application Status";
            content = (
                <div>Application form filled partially/not
			    submitted within the deadline and hence could not be processed.</div>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 1) {
            heading = "Payment";
            content = (
                <Row>
                    <Col xs={12} md={12} large={12}>
                        <div>Payment has not been made within the
                           deadline and hence application could not be processed.</div>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 11) {
            heading = "Payment";
            content = (
                <Row>
                    <Col xs={12} md={12} large={12}>
                        <div>Payment has not been made within the
                           deadline and hence application could not be processed.</div>
                    </Col>
                </Row>
            )
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
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 5) {
            heading = "Application Status";
            content = (
                <p>
                    Your application to appear for GATE
				{/* <s:property value="getText('global.year')" /> */}
                    has been rejected because you have failed to rectify defects in your
                    applica tion.
			</p>
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
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 4 || this.props.context.applicationState === 6) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col xs={12} md={12}>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td>session.igEnrolmentId</td>
                            </tr>
                            <tr>
                                <td>Applicant Name</td>
                                <td><span class="text-capitalize"></span></td>
                            </tr>
                            {!this.props.context.isAdmitcardValid ?
                                <tr>
                                    <td class="col-xs-2">Status</td>
                                    <td>GATE has not received the required fee. Please contact the
                                    Organising institute IIT Madras at gate2020@iitd.ac.in</td>
                                </tr>
                                :
                                <div>
                                    {this.props.context.isLocked && this.props.context.applicationState === 6
                                        ?
                                        <tr>
                                            <td class="col-xs-2">Status</td>
                                            <td></td>
                                        </tr>
                                        :
                                        null
                                    }
                                </div>
                            }
                        </table>
                    </Col>

                    <Col xs={12} md={12} large={12}>
                        {
                            this.props.context.applicantResoponseURL != null
                                ?
                                <a class="btn btn-primary"
                                    href="#"
                                    target="_blank">View Response</a>
                                :
                                null
                        }

                        {
                            this.props.context.isAdmitcardValid
                                ?
                                <a class="btn btn-primary" href="dlApplicationForm.html" target="_blank">Download Application Form</a>
                                :
                                null
                        }
                    </Col>
                </Row>
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
                </Row>
            );
        }

        return (
            <Notice heading={heading} subHeading={subHeading}>
                {content}
            </Notice>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdmitCard);