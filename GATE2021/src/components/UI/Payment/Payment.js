import React, { Component } from 'react';
import Notice from '../Notice/Notice';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

class Payment extends Component {

    state = {
        Payment: {

        },
        mode_of_payment: {
            1: {
                mode: "SBI Net Banking",
                rate: "NIL"
            },
            2: {
                mode: "Others Bank's INB",
                rate: "Rs. 6/- per Txn"
            },
            3: {
                mode: "SBI Debit Cards upto Rs. 2000/-",
                rate: "NIL"
            },
            4: {
                mode: "Other Bank's Debit Cards upto Rs. 2000/-	",
                rate: "NIL"
            },
            5: {
                mode: "Credit Cards	",
                rate: "0.70% of Txn Value"
            },
            6: {
                mode: "UPI - OnUs upto Rs. 2000/-",
                rate: "NIL"
            },
            7: {
                mode: "UPI - OffUs upto Rs. 2000/-",
                rate: "NIL"
            },
            8: {
                mode: "Foreign Cards",
                rate: "3.50% of Txn Value"
            }
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        let heading, subHeading, content, extraContent;
        heading = subHeading = content = extraContent = null;

        if (!this.props.context.isLocked) {
            heading = "Application Status";
            content = (<div class="panel-body">Application form filled partially/not
			submitted within the deadline and hence could not be processed.</div>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 1) {
            if (this.props.context.hasFailedOnlinePayments) {
                extraContent = (
                    <p class="alert alert-info">
                        <strong>IMPORTANT NOTE: </strong>If you are seeing this screen, it
                        implies that your payment has not yet been received by GATE.
                        In case you have made online payment earlier, it is not accounted
                        for and will be refunded by the concerned bank. You must make a
                        fresh payment in order to complete this application.
				</p>
                );
            }
            heading = "Payment";
            content = (
                <React.Fragment>
                    {extraContent}
                    <p>Application form has been submitted successfully. Please click
				    "Make Payment" to proceed to payment page.</p>
                    <Row>
                        <Col xs={6} md={6}><a class="btn btn-info" href="viewApplicationForm.html">View
				        Application Form</a></Col>
                        <Col xs={6} md={6}><a class="btn btn-primary" href="doPayment.html">Make
				        Payment</a></Col>
                    </Row>
                </React.Fragment>
            )
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 11) {
            heading = "Application Status";
            extraContent = (
                <table class="table">
                    <tr>
                        <td>Enrollment ID</td>
                        <td></td>
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
            );
            content = (
                <Row>
                    <Col xs={12}>{extraContent}</Col>
                    <Col xs={6} md={6} large={6}><a class="btn btn-info" href="viewApplicationForm.html">View
				Application Form</a></Col>
                    <Col xs={6} md={6} large={6}>
                        {this.props.context.bankId === 'SBI' ? <a class="btn btn-primary"
                            href="https://www.onlinesbi.com/merchant/merchantbranchpdf.htm?referenceNo="
                            target="_blank">Print Challan</a> : <a class="btn btn-primary" href="dlChallan.html" target="_blank">Print
					Challan</a>}
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && (this.props.context.applicationState === 12 || this.props.context.applicationState === 2 || this.props.context.applicationState === 3)) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td></td>
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
                        <div class="panel-footer text-left">
                            {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-primary" href="dlApplicationForm.html"
                                target="_blank">Download Application Form</a>
                        </div>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 5) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col>
                        <div class="panel-body">
                            <p>Application form found to be defective! Please click "Rectify
				                Defects" to take action against defect(s) found.</p>
                        </div>
                        <div class="panel-footer text-left">
                            {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-info" href="viewApplicationForm.html">View
				                Application Form</a> <a class="btn btn-primary"
                                href="rectifyDefects.html">Rectify Defects</a>
                        </div>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 9) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td></td>
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
                        <div class="text-left">
                            {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-info" href="viewApplicationForm.html">View
				                Application Form</a>
                        </div>
                    </Col>
                </Row>
            );
        }
        else if (this.props.context.isLocked && this.props.context.applicationState === 4) {
            heading = "Application Status";
            content = (
                <Row>
                    <Col>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td></td>
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
                        <div class="text-left">
                            {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-info" href="viewApplicationForm.html">View
				                Application Form</a>
                        </div>
                    </Col>
                </Row>
            );
        }
        else {
            heading = "Application Status";
            content = (
                <Row>
                    <Col>
                        <table class="table">
                            <tr>
                                <td>Enrollment ID</td>
                                <td></td>
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
                        <div class="text-left">
                            {/* <jsp: include page="/WEB-INF/jsp/OTP.jsp"/> */}
                            <a class="btn btn-primary" href="dlApplicationForm.html"
                                target="_blank">Download Application Form</a>
                        </div>
                    </Col>
                </Row>
            );
        }

        const paymentArray = [];
        for (let key in this.state.mode_of_payment) {
            paymentArray.push({
                id: key,
                config: this.state.mode_of_payment[key]
            });
        }

        // return (
        //     < React.Fragment >
        //         <h3>Payment</h3>

        //         <Notice heading="Important Notice">
        //             <p>
        //                 Please do not press the browser back button
        //                  while going for the Payment.
        //             </p>
        //             <p>
        //                 For the candidate's own benefit and security,
        //                 it is strongly recommended to use his/her own
        //                 credit card or those of a very trusted person only.
        //                 From previous experiences, frauds are known to have
        //                  happened if a candidate uses relatively lesser known
        //                  person's credit card for fee payment.
        //             </p>
        //         </Notice>

        //         <table className="table table-bordered table-striped">
        //             <thead>
        //                 <tr>
        //                     <th>Sr.No.</th>
        //                     <th>Mode of Payment</th>
        //                     <th>Proposed Rates + GST</th>
        //                 </tr>
        //             </thead>

        //             <tbody>
        //                 {paymentArray.map(paymentElement => (
        //                     <tr>
        //                         <td>{paymentElement.id}</td>
        //                         <td>{paymentElement.config.mode}</td>
        //                         <td>{paymentElement.config.rate}</td>
        //                     </tr>
        //                 ))
        //                 }
        //             </tbody>
        //         </table>

        //         <p>
        //             Terms of Payment:
        //             * GST and other tax / taxes if any applicable, will be charged in addition.
        //         </p>
        //     </React.Fragment >
        // )

        return <Notice heading={heading}>
            {content}
        </Notice>
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment);