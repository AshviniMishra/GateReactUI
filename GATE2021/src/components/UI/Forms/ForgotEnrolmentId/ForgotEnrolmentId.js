import React, { Component } from 'react';

class ForgotEnrolmentId extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <h2 class="content-h2">Forgot Enrollment ID?</h2>
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
                            {/* <s:form action="sendEnrolmentId.html" name="forgotEnrolmentId" id="forgotEnrolmentId" method="POST" theme="bootstrap" cssClass="form-vertical"> */}
                            <div class="row">
                                <div class="col-sm-3 controls alterRightPadd">
                                    {/* <s:select name="countryCode" cssClass="alterRightPadd"
							list="%{#application.internationalCodes}" value="%{countryCode}"
							tabindex="1" /> */}
                                </div>
                                <div class="col-sm-9 controls alterLeftPadd">
                                    {/* <s:textfield name="mobileNumber"
							helpText="Do not put Zero (0) before the number."
							size="50" maxlength="12" value="%{mobileNumber}"
							id="mobileNumber" tabindex="2" required="true" autocomplete="off" /> */}
                                </div>
                            </div>
                            {/* <%-- <s: {forgotEnrolmentIdBean.mobileNumber}" id="mobileNumber" maxLength="10"  helpText="Enter Mobile number as provided during registration" tabindex="1" required="true" autocomplete="off"/> --%>
				<s: {forgotEnrolmentIdBean.emailId}" id="emailId" maxlength="100" helpText="Enter email address as provided during registration" tabindex="3" required="true" autocomplete="off" />
				<s:submit cssClass="btn btn-primary" value="Send Enrollment ID" tabindex="4" /> */}
                            <a href="forgotCredentials.html" class="btn btn-default" title="Back to forgot GOAPS login credentials page" tabindex="5">Back</a>
                            {/* </s:form> */}
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}