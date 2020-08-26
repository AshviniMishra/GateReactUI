import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Notice from '../Notice/Notice';

class ScoreCard extends Component {

    constructor(props) {
        super(props)
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
                <p>The deadline for the Application defect rectification has been
				closed.</p>
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
        else if (this.props.context.isLocked && this.props.context.applicationState === 6) {
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
                                <td> Dear Candidate,As your application for GATE examinations is provisional due
					            to one or more of the following reasons, your result has been
					            withheld.i) Photograph not clear, ii) Signature not
                                clear, iii) Eligibility certificate not complete, iv) Valid SC/ ST
                                category certificate not provided, v) Valid PwD certificate not
                                provided etc.
                            </td>
                            </tr>
                        </table>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 4) {
            heading = "GATE Result";
            if (this.props.context.isPresent) {
                content = (
                    <Row>
                        <Col xs={12} md={12} large={12}>
                            <table class="scTable">
                                <tr>
                                    <td class="scLabel" colspan="2">Name<br /></td>
                                    <td class="middle"
                                        rowspan="6"><span><img alt="Photograph"
                                            src=''
                                            width="120px" height="160px" /></span><br /> <br /> <span><img
                                                alt="Signature"
                                                src=''
                                                width="150px" height="50px" /></span></td>
                                </tr>
                                <tr>
                                    <td class="valueBox" colspan="2"></td>
                                </tr>
                                <tr>
                                    <td class="scLabel">Registration Number</td>
                                </tr>
                                <tr>
                                    <td class="valueBox"></td>
                                </tr>
                                <tr>
                                    <td class="scLabel">Gender</td>
                                </tr>
                                <tr>
                                    <td class="valueBox"></td>
                                </tr>
                                <tr>
                                    <td class="scLabel" colspan="2">Examination Paper</td>
                                </tr>
                                <tr>
                                    <td class="valueBox" colspan="2">
                                        {
                                            this.props.context.optionalSectionsExist
                                                ?
                                                (
                                                    <p>
                                                        {
                                                            this.props.context.paperCode === 'GG'
                                                                ?
                                                                <span>Section</span>
                                                                :
                                                                <span>Sections</span>
                                                        }
                                                    </p>
                                                )
                                                :
                                                <p>
                                                    <span>
                                                        <span></span></span>
                                                </p>
                                        }
                                    </td>
                                </tr >
                            </table >
                        </Col >

                        <Col xs={12} md={12} large={12}>
                            <table>
                                <tr>
                                    <td>Marks out of 100<sup>#</sup></td>

                                    <td>
                                        <span>
                                            {
                                                this.props.context.paperCode === 'CE' || this.props.context.paperCode === 'ME'
                                                    ?
                                                    <p>Marks go here</p>
                                                    :
                                                    <p>Raw Marks go here</p>
                                            }
                                        </span>
                                    </td>
                                    {
                                        this.props.context.qualified
                                            ?
                                            <React.Fragment>
                                                <td class="scRightLabel">All India Rank in this paper</td>
                                                <td class="middle">
                                                    {/* <span class="valueBox"><s: property value="%{#session.igResult.air}" /></span> */}
                                                </td>
                                            </React.Fragment>
                                            :
                                            null
                                    }
                                </tr>

                                <tr>
                                    <td>&nbsp;</td>
                                </tr>

                                <tr>
                                    <td class="scLabel" >Qualifying
							            Marks<sup>##</sup>
                                    </td>

                                    <td><span class="middle scQualMarks" ><span
                                        class="valueBox"></span>General</span>
                                        <span class="middle scQualMarks" ><span
                                            class="valueBox"></span>OBC
								            (NCL)</span> <span class="middle scQualMarks"><span
                                            class="valueBox"></span>SC/ST/PwD</span>
                                    </td>

                                    {
                                        this.props.context.qualified
                                            ?
                                            <React.Fragment>
                                                <td class="scRightLabel"
                                                    style={{ paddingTop: "7" }}>GATE Score</td>
                                                <td class="middle" style={{ paddingTop: "2" }}>
                                                    <span class="valueBox" >
                                                        {/* <s:property value="%{#session.igResult.score}" /> */}
                                                    </span>
                                                </td>
                                            </React.Fragment>
                                            :
                                            null
                                    }
                                </tr>

                                <tr>
                                    <td colspan="4" class="scLabel">&nbsp;</td>
                                </tr>

                                <tr>
                                    <td colspan="4" style={{ fontSize: "12px" }}><sup>#</sup>
                                        Normalized marks for multisession papers (CE and ME)<br /> <br />
                                        <sup>##</sup> A candidate is considered qualified if the marks
                                        secured are greater than or equal to the qualifying marks
                                        mentioned for the category for which a valid Category
                                        Certificate, if applicable, is produced along with this
							            scorecard.
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="4" class="scLabel">&nbsp;</td>
                                </tr>

                                <tr>
                                    <td colspan="4"><span style={{ fontWeight: "bold" }}>Note:
						</span>
                                        <ul style={{ fontSize: "14", lineHeight: "24" }}>
                                            <li>The marks
                                                {
                                                    this.props.context.qualified
                                                        ?
                                                        <p>provided here are for information only.</p>
                                                        :
                                                        null
                                                }
                                            </li>
                                            <li>An electronic or paper copy of this document is not
									        valid for admission.</li>
                                            <li>The official GATE
                                                {/* <s: property
                                                    value="getText('global.year')" />  */}
                                                Score Card can be
                                                downloaded from the GOAPS site between March 20,
                                    {/* <s: property value="getText('global.year')" />  */}
                                                and May 31, 2020 by the                                                                                                            qualified candidates only.
								            </li>
                                            <li>For the papers CE and ME, qualifying marks and score
									            are based on "Normalized Marks".
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </Col>

                    </Row >
                );
            }
            else if (this.props.context.isResultWithheld) {
                content = (
                    <table class="table">
                        <tr>
                            <td>Registration Number</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Name of the Candidate</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="col-xs-3">Status</td>

                            <td>Dear Candidate, You were found violating the instructions
                                and code of conduct during the GATE examination. Therefore your
                                results has been withheld.
						</td>
                        </tr>
                    </table>
                );
            }
            else {
                content = (
                    <table class="table">
                        <tr>
                            <td>Registration Number</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Name of the Candidate</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="col-xs-3">Status</td>
                            <td>You were absent for the exam</td>
                        </tr>
                    </table>
                );
            }

            if (this.props.context.applicantResoponseURL != null) {
                extraContent = (
                    <div class="text-right">
                        <a class="btn btn-primary"
                            href="">View Response</a>
                    </div>
                );
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);