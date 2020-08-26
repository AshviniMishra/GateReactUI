import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

class forgotCredential extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h2 className="content-h2">
                        <Badge variant="secondary">Forgot Login Credentials?</Badge>
                    </h2>
                    <div>
                        <table className="table">

                            {/* <s:if
				test="%{#application.appStage eq 'FINAL_DEPLOYMENT' || #application.appStage eq 'PAY_N_DOWNLOAD'}"> */}
                            <tr>
                                <td className="col-sm-8">If you remember Email Address but have
                                forgotten Enrollment ID and Registration ID, Click on 'Request for
						an OTP' to get One Time Password</td>
                                <td className="col-sm-3">
                                    {/* <a
                                        title="Get Enrollment/Registration ID via Email"
                                        href="forgotEnrolIDRegisterID.html" className="btn btn-default ">Request
							for an OTP</a> */}
                                    <NavLink to="/forgotEnrolIDRegisterID">Request For an OTP</NavLink>
                                </td>
                            </tr>
                            {/* </s:if> */}
                            {/* <s:else> */}

                            <tr>
                                <td style={{ verticalAlign: "top" }}>If you remember the
                                Email Address/Enrollment ID but you have forgotten Password, click on
						"Request for an OTP" to get One Time Password via SMS/Email.</td>
                                <td className="col-sm-3"><a
                                    title="Reset Password and send an OTP via SMS/Email"
                                    href="forgotPassword.html" className="btn btn-default col-sm-12"
                                    style={{ marginBottom: "10px" }}>Request for an OTP</a></td>
                            </tr>
                            <tr>
                                <td colspan="2"><br /></td>
                            </tr>
                            <tr>
                                <td style={{ verticalAlign: "top" }}>If you already have an OTP,
						click on "Already have an OTP?" to reset the password.</td>
                                <td className="col-sm-3">
                                    <NavLink to="/ResetPassword">Already Have an OTP?</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"><br /></td>
                            </tr>
                            {/* </s:else> */}
                            {/* <!-- <tr>
                <td>If you do not remember the Enrollment ID, click on "Forgot Enrollment ID" to get Enrollment ID via SMS.</td>
                <td className="col-sm-3"><a title="Get Enrolment ID via SMS" href="forgotEnrolmentId.html" className="btn btn-default col-sm-12">Forgot Enrollment ID</a></td>
            </tr>
            <tr>
                <td colspan="2"><br /><br /></td>
            </tr>
            <tr>
                <td></td>
                <td className="col-sm-3"><a title="Back to GOAPS login page" href="login.html" className="btn btn-default">Back</a></td>
            </tr> --> */}
                            <tr>
                                <td colspan="2"><br /></td>
                            </tr>
                        </table>
                    </div >
                </div >
            </React.Fragment >
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
export default connect(mapStateToProps, mapDispatchToProps)(forgotCredential);