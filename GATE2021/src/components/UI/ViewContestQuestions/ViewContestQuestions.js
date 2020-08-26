import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Notice from '../Notice/Notice';

class ViewContestQuestions extends Component {

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
                    application.
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
                            <tr>
                                <td>Status</td>
                                <td></td>
                            </tr>
                        </table>
                    </Col>

                    <Col xs={12} md={12} large={12}>
                        <Row>
                            {
                                this.props.context.applicantResoponseURL != null
                                    ?
                                    <React.Fragment>
                                        <Col xs={4} md={4} large={4}>
                                            <a class="btn btn-primary"
                                                href="#"
                                                target="_blank">View Response</a>
                                        </Col>
                                        <Col xs={4} md={4} large={4}>
                                            <a class="btn btn-primary" href="#" id="dlAdmitCard">Download Admit Card</a>
                                        </Col>
                                        <Col xs={4} md={4} large={4}>
                                            <div>
                                                {
                                                    this.props.context.hasContestedQuestions
                                                        ?
                                                        <a class="btn btn-success" href="viewSuccefulContests.html">View
							                    Submitted Contests</a>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </Col>
                                    </React.Fragment>
                                    :
                                    null
                            }
                        </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewContestQuestions);