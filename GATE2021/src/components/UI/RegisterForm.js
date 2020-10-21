import React, { Component } from "react";
import Input from "./Input/Input";
import Button from "../UI/Button/Button";
import Badge from "react-bootstrap/Badge";
import axios from "../../axiosConfig";
import Validate from "../../globals/Validate";
import Modal from "react-bootstrap/Modal";

class registerForm extends Component {
  state = {
    // registerForm: {
    //   firstName: {
    //     elementType: "Sinput",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "First Name",
    //       id: "fname",
    //       maxLength: "10",
    //     },
    //     label: "First Name",
    //     css: {
    //       style: {
    //         width: "33.33%",
    //         float: "left",
    //         position: "relative",
    //         backgroundColor: "white",
    //         font: "inherit",
    //         borderRadius: "5px",
    //       },
    //     },
    //     validation: {
    //       required: true,
    //       charactersOnly: true,
    //     },
    //     valid: false,
    //     touched: false,
    //     value: "",
    //   },
    //   middleName: {
    //     elementType: "Sinput",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "Middle Name",
    //       id: "Mname",
    //       maxLength: "10",
    //     },
    //     css: {
    //       style: {
    //         width: "33.33%",
    //         float: "left",
    //         position: "relative",
    //         backgroundColor: "white",
    //         font: "inherit",
    //         borderRadius: "5px",
    //       },
    //     },
    //     label: "Middle Name",
    //     validation: {
    //       required: true,
    //       charactersOnly: true,
    //     },
    //     valid: false,
    //     touched: false,
    //     value: "",
    //   },
    //   lastName: {
    //     elementType: "Sinput",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "Last Name",
    //       id: "lname",
    //       maxLength: "10",
    //     },
    //     css: {
    //       style: {
    //         width: "33.33%",
    //         float: "left",
    //         position: "relative",
    //         backgroundColor: "white",
    //         font: "inherit",
    //         borderRadius: "5px",
    //       },
    //     },
    //     label: "Last Name",
    //     validation: {
    //       required: true,
    //       charactersOnly: true,
    //     },
    //     valid: false,
    //     touched: false,
    //     value: "",
    //   },
    //   fullName: {
    //     elementType: "input",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "Full Name",
    //       id: "full_name",
    //       readOnly: "{true}",
    //     },
    //     label: "Name of Candidate",
    //     desc:
    //       "Above name will appear in qualifying score card, so adjust accordingly",
    //     value: "",
    //     valid: false,
    //   },
    //   conf_button: {
    //     elementType: "button",
    //     elementConfig: {
    //       type: "button",
    //       val: "Confirm",
    //     },
    //     valid: true,
    //   },
    // },
    registerForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
          id: "fname",
          maxLength: "10",
        },
        label: "First Name",
        validation: {
          required: true,
          charactersOnly: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      middleName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Middle Name",
          id: "Mname",
          maxLength: "10",
        },
        label: "Middle Name",
        validation: {
          required: true,
          charactersOnly: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name",
          id: "lname",
          maxLength: "10",
        },
        label: "Last Name",
        validation: {
          required: true,
          charactersOnly: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      fullName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name",
          id: "full_name",
          readOnly: "{true}",
        },
        label: "Name of Candidate",
        desc:
          "Above name will appear in qualifying score card, so adjust accordingly",
        value: "",
        valid: false,
      },
      conf_button: {
        elementType: "button",
        elementConfig: {
          type: "button",
          val: "Confirm",
        },
        valid: true,
      },
    },
    formIsValid: false,
    nameConfirmed: false,
  };

  confirmName = (event) => {
    event.preventDefault();
    let fullName = this.state.registerForm.fullName.value;
    alert(
      "The entered name will appear on GATE admit card. Do you wish to continue?"
    );
    let valid = this.state.registerForm.fullName.valid;
    if (valid === false) {
      alert("Enter the name correctly");
    } else {
      const newAppForm = {
        ...this.state.registerForm,
        emailId: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Your E-mail id",
            id: "email_id",
          },
          label: "Email Address",
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        confirmEmailId: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Confirm Email Address",
            id: "confirm_email_id",
          },
          label: "Confirm Email Address",
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Create a password",
            id: "password",
          },
          label: "Password",
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        confirmPassword: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Confirm Password",
            id: "confirm_password",
          },
          label: "Confirm Password",
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        countryCode: {
          elementType: "radio",
          elementConfig: {
            type: "radio",
            id: "country_of_residence",
            options: [{ value: "India" }, { value: "Other" }],
          },
          label: "Country of Residence",
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
        },
        mobileNumber: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Enter your mobile number",
            id: "mobile_no",
            maxLength: "10",
          },
          label: "Mobile Number",
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        captcha: {
          elementType: "captcha",
          elementConfig: {
            placeholder: "Evaluate the expression and place the value below",
          },
          value: "",
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
        },
      };
      delete newAppForm.conf_button;
      delete newAppForm.firstName;
      delete newAppForm.middleName;
      delete newAppForm.lastName;
      this.setState({ registerForm: newAppForm, nameConfirmed: true });
    }
  };

  inputChangedHandler = (event, inputIdentifier) => {
    event.preventDefault();
    const updatedRegisterForm = {
      ...this.state.registerForm,
    };
    const updatedRegisterFormElement = {
      ...updatedRegisterForm[inputIdentifier],
    };
    updatedRegisterFormElement.value = event.target.value;
    updatedRegisterForm[inputIdentifier] = updatedRegisterFormElement;

    updatedRegisterFormElement.valid = Validate.checkValidity(
      updatedRegisterFormElement.value,
      updatedRegisterFormElement.validation
    );
    updatedRegisterFormElement.touched = true;

    if (
      inputIdentifier === "firstName" ||
      inputIdentifier === "middleName" ||
      inputIdentifier === "lastName"
    ) {
      updatedRegisterForm["fullName"].value =
        updatedRegisterForm["firstName"].value.toUpperCase() +
        " " +
        updatedRegisterForm["middleName"].value.toUpperCase() +
        " " +
        updatedRegisterForm["lastName"].value.toUpperCase();

      if (
        updatedRegisterForm["fullName"].value !== "" &&
        updatedRegisterForm["fullName"].value != null
      ) {
        updatedRegisterForm["fullName"].valid = true;
      } else updatedRegisterForm["fullName"].valid = false;
    }
    let formIsValid = true;
    for (let inputIdentifier in updatedRegisterForm) {
      formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
    }
    // console.log(
    //   "Mobile Number Validity => " + updatedRegisterForm[inputIdentifier].valid
    // );
    this.setState({
      registerForm: updatedRegisterForm,
      formIsValid: formIsValid,
    });
  };

  registerHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[
        formElementIdentifier
      ].value;
    }
    let regVal = formData;
    console.log("The form data is ", regVal);
    axios
      .post("doRegister", regVal)
      .then((response) => {
        console.log(JSON.stringify(response.data, null, 5));
      })
      .catch((error) => {
        console.log(JSON.stringify(error, null, 5));
      });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.registerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.registerForm[key],
      });
    }

    let form = (
      <React.Fragment>
        <h1>
          <Badge variant="light">Registration</Badge>
        </h1>
        <form onSubmit={this.registerHandler}>
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              label={formElement.config.label}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
              inValid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              clicked={(event) => this.confirmName(event)}
              css={formElement.config.css}
              touched={formElement.config.touched}
              desc={formElement.config.desc}
            />
          ))}
          {this.state.nameConfirmed && this.state.formIsValid ? (
            <Button>Submit</Button>
          ) : null}
        </form>
      </React.Fragment>
    );
    return form;
  }
}
export default registerForm;
