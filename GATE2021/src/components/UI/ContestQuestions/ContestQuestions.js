import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Notice from '../Notice/Notice';

class ContestQuestion extends Component {
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
                                <div class="form-group text-justify">
                                    <div class="col-sm-12 bg bg-danger">
                                        <b>I have read and understood the procedure outlined on <a
                                            href="http://gate.iitd.ac.in/Contest" target="_blank">GATE
								Website</a> about how to contest questions of GATE
							</b>
                                        <input type="checkbox" id="accept_declaration" name="declared"
                                            label="I accept the declaration" />
                                    </div>
                                </div>
                                :
                                null
                        }

                        {
                            this.props.context.applicantResoponseURL != null
                                ?
                                <React.Fragment>
                                    <a class="btn btn-primary"
                                        href="#"
                                        target="_blank">View Response</a>
                                    <a cssClass="btn btn-primary" action="dlAdmitCard"
                                        id="dlAdmitCard">Download Admit Card</a>
                                    <submit name="contestQuestion" id="redirectContest"
                                        value="Contest Answer Key" cssClass="btn btn-primary" />
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
                                </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContestQuestion);