import React, { Component } from 'react';

class                                   ForgotEnrolIDRegisterID extends Component {

    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        console.log('INdisdofjodjfoajspfasjapd');
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <h2 class="content-h2">Forgot Enrollment ID/Registration ID?</h2>
                    <div class="row">
                        <div class="col-xs-12">
                            <div>
                                <h4>
                                    {/* <s:actionmessage cssClass="alert alert-success no-list" theme="simple" /> */}
                                </h4>
                                <h4>
                                    {/* <s:actionerror cssClass="alert alert-danger no-list" theme="simple" /> */}
                                </h4>
                            </div>
                            {/* <s:form action="sendIDsOTP.html" name="forgotIDsBean" id="forgotIDsBean" method="POST" theme="bootstrap" cssClass="form-vertical"> */}

                            {/* <s: {forgotIDsBean.emailId}" id="emailId" maxLength="100"  tabindex="3" required="true" autocomplete="off" /> */}
                            {/* <%-- <s: {forgotPasswordBean.enrolmentId}" id="enrolmentId" maxLength="7" helpText="Enter Enrollment ID sent during registration" tabindex="4" required="true" autocomplete="off" /> --%> */}
                            {/* <s:submit cssClass="btn btn-primary" value="Send OTP" title="send the OTP via mail" tabindex="4" /> */}

                            <a href="forgotCredentials.html" class="btn btn-default" title="Back to forgot GOAPS login credentials page" tabindex="6">Back</a>
                            {/* </s:form> */}
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}

export default ForgotEnrolIDRegisterID;