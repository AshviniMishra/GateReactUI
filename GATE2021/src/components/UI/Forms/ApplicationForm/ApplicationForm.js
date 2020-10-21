import React, { Component } from "react";
import Button from "../../Button/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import Input from "../../Input/Input";
import NotLoggedIn from "../../NotLoggedIn";
import axios from "../../../../axiosConfig";
import { connect } from "react-redux";

class applicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationForm: {
        gatePaperDetails: {
          gatePaper: {
            elementType: "select",
            elementConfig: {
              options: [
                {
                  value: "Aerospace Engineering(AE)",
                  displayValue: "Aerospace Engineering(AE)",
                },
                {
                  value: "Agricultural Engineering(AG)",
                  displayValue: "Agricultural Engineering(AG)",
                },
                {
                  value: "Architechture And Planning(AR)",
                  displayValue: "Architechture And Planning(AR)",
                },
                {
                  value: "Biomedical Engineering(BM)",
                  displayValue: "Biomedical Engineering(BM)",
                },
              ],
              id: "gatePaper",
            },
            label: "Please choose the paper you wish to appear in GATE 2021",
            value: "",
          },
          examCountry: {
            elementType: "select",
            elementConfig: {
              options: [
                { value: "1", displayValue: "India" },
                { value: "2", displayValue: "Bangladesh" },
                { value: "3", displayValue: "Ethiopia" },
                { value: "4", displayValue: "Nepal" },
                { value: "5", displayValue: "Singapore" },
                { value: "6", displayValue: "Sri Lanka" },
                { value: "7", displayValue: "United Arab Emirates" },
              ],
              id: "examCountry",
              select: true,
            },
            label: "Choice of Examination Country",
            value: "India",
          },

          examCity1: {
            elementType: "select",
            elementConfig: {
              options: [],
              id: "examCity1",
            },
            label: "Choice of Exam City 1",
            value: "",
          },

          examCity2: {
            elementType: "select",
            elementConfig: {
              options: [],
              id: "examCity2",
            },
            label: "Choice of Exam City 2",
            value: "",
          },

          examCity3: {
            elementType: "select",
            elementConfig: {
              options: [],
              id: "examCity3",
            },
            label: "Choice of Exam City 3",
            value: "",
          },
        },

        ApplicantPersonalDetails: {
          enrollmentId: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Enrollment ID",
              readOnly: "readOnly",
              id: "enrollmentId",
            },
            label: "Enrollment ID",
            value: "C449E82",
          },
          firstName: {
            elementType: "Sinput",
            elementConfig: {
              type: "text",
              placeholder: "First Name",
              id: "fname",
              maxLength: "10",
            },
            label: "First Name",
            css: {
              style: {
                width: "30%",
                float: "left",
                //position: 'relative',
                backgroundColor: "white",
                font: "inherit",
                borderRadius: "5px",
                margin: "5px",
              },
            },
            validation: {
              required: true,
              charactersOnly: true,
            },
            valid: false,
            touched: false,
            value: "",
          },
          middleName: {
            elementType: "Sinput",
            elementConfig: {
              type: "text",
              placeholder: "Middle Name",
              id: "Mname",
              maxLength: "10",
            },
            css: {
              style: {
                width: "30%",
                float: "left",
                //position: 'relative',
                backgroundColor: "white",
                font: "inherit",
                borderRadius: "5px",
                margin: "5px",
              },
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
            elementType: "Sinput",
            elementConfig: {
              type: "text",
              placeholder: "Last Name",
              id: "lname",
              maxLength: "10",
            },
            css: {
              style: {
                width: "30%",
                float: "left",
                //position: 'relative',
                backgroundColor: "white",
                font: "inherit",
                borderRadius: "5px",
                margin: "5px",
              },
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

          name: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Name of the Candidate",
              id: "name",
              readOnly: true,
            },
            label: "Name of the Candidate",
            err: "* Can" + "t be epmty",
            value: "",
          },

          email: {
            elementType: "para",
            elementConfig: {
              para: "sreepriya1995@gmail.com",
              verify: "Verify Email Addresss",
            },
            label: "Email Address",
          },

          mobileNo: {
            elementType: "para",
            elementConfig: {
              para: "8004487946",
              verify: "Verify Mobile Number",
            },
            label: "Mobile Number",
          },

          dob: {
            elementType: "input",
            elementConfig: {
              type: "date",
              id: "dob",
            },
            label: "Date of Birth",
            value: "",
          },

          gender: {
            elementType: "radio",
            elementConfig: {
              type: "radio",
              options: [
                { value: "Male" },
                { value: "Female" },
                { value: "Transgender" },
              ],
              id: "gender",
            },
            label: "Gender",
            value: "",
          },

          nationality: {
            elementType: "radio",
            elementConfig: {
              type: "radio",
              options: [{ value: "Indian" }, { value: "Other" }],
              id: "nationality",
            },
            label: "Nationality",
            value: "",
          },

          dyslexiaDisability: {
            elementType: "radio",
            elementConfig: {
              type: "radio",
              options: [{ value: "Yes" }, { value: "No" }],
              id: "dyslexiaDisability",
            },
            label: "Candidate with Dyslexia / similar learning disabilities",
            value: "",
          },

          permanentResidence: {
            elementType: "select",
            elementConfig: {
              options: [
                {
                  value: "India",
                  displayValue: "India",
                },
              ],
              id: "permanentResidence",
            },
            label: "Country of Permanent Residence",
            value: "",
          },

          stateUnionTerritory: {
            elementType: "select",
            elementConfig: {
              options: [
                {
                  value: "India",
                  displayValue: "India",
                },
              ],
              id: "stateUnionTerritory",
            },
            label: "State/Union Territory of Permanent Residence",
            value: "",
          },

          idProof: {
            elementType: "select",
            elementConfig: {
              options: [
                {
                  value: "India",
                  displayValue: "India",
                },
              ],
              id: "idProof",
            },
            label: "ID Proof",
            value: "",
          },

          guradianName: {
            elementType: "input",
            elementConfig: {
              type: "text",
              id: "guradianName",
              placeholder: "Name of Parent/Guardian",
            },
            label: "Name of Parent/Guardian",
            desc:
              "Parent/Guardian name can be maximum of length 50 characters and can not contain special characters except dot (.), hyphen (-) and blank space",
            value: "",
          },

          parentResidence: {
            elementType: "radio",
            elementConfig: {
              type: "radio",
              options: [{ value: "India" }, { value: "Other" }],
              id: "parentResidence",
            },
            label: "Country of Residence of Parent/Guardian",
            value: "",
          },

          parentMobileNo: {
            elementType: "input",
            elementConfig: {
              type: "text",
              id: "parentMobileNo",
              placeholder: "Mobile number of Parent/Guardian",
            },
            label: "Mobile number of Parent/Guardian",
            value: "",
          },
        },

        CorrespondenceDetails: {
          pincode: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "PIN Code",
              maxLength: "6",
              id: "pincode",
            },
            label: "PIN Code",
            value: "",
          },
          country: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Country",
              id: "country",
            },
            label: "Country",
            value: "",
          },

          stateUt: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "State/ Union Territory",
              id: "stateUt",
            },
            label: "State / Union Territory",
            desc:
              'If the country is other than India, the State/Union Territory will appear as "Other".',
            value: "",
          },

          addressLine1: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Address Line 1",
              id: "addressLine1",
            },
            label: "Address Line 1",
            value: "",
          },
          addressLine2: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Address Line 2 (Optional)",
              id: "addressLine2",
            },
            label: "Address Line 2 (Optional)",
            value: "",
          },
          addressLine3: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Address Line 3 (Optional)",
              id: "addressLine3",
            },
            label: "Address Line 3 (Optional)",
            value: "",
          },
          cityTown: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "City / Town",
              id: "cityTown",
            },
            label: "City / Town",
            value: "",
          },
        },

        Qualifying_Degree_Details: {
          CollegePinCode: {
            elementType: "input",
            elementConfig: {
              type: "text",
              maxLength: "6",
              placeholder: "College Pin code",
              id: "Qualifying_Degree_Details",
            },
            label: "College Pin Code",
            desc:
              "Enter PIN code of college. Please enter 999999 if it is not in India",
            value: "",
          },
          CountryOfCollege: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Country of College / University",
              id: "ContryOfCollege",
            },
            label: "Coutry of College/ University",
            value: "",
          },
          State_Ut: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "State/Union Territory",
              id: "State_Ut",
            },
            label: "State/Union Territory",
            desc:
              'If the country is other than India, the State/Union Territory will appear as "Other".',
            value: "",
          },
          cityTown: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "City/Town",
              id: "cityTown",
            },
            label: "City/Town",
            value: "",
          },
          rollNo: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Institute Registration / Roll No",
              id: "rollNo",
            },
            label: "Institute Registration / Roll No",
            desc:
              "Please ensure that you fill Institute Registration Number / Roll No as per your eligibility certificate and not the GATE 2020 enrollment ID.",
            value: "",
          },

          qualifyingDegree: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Qualifying Degree",
              id: "qualifyingDegree",
            },
            label: "Qualifying Degree",
            desc: "Choose qualifying degree or the degree pursuing.",
            value: "",
          },

          discipline: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Discipline of Qualifying Degree",
              id: "discipline",
            },
            label: "Discipline of Qualifying Degree",
            value: "",
          },

          graduated: {
            elementType: "radio",
            elementConfig: {
              type: "radio",
              options: [{ value: "Yes" }, { value: "No" }],
              id: "graduated",
            },
            label: "Have you Graduated in the above Degree?",
            value: "",
          },

          yearOfQual: {
            elementType: "select",
            elementConfig: {
              options: [
                { value: "2023", displayValue: "2023" },
                { value: "2022", displayValue: "2022" },
                { value: "2021", displayValue: "2021" },
                { value: "2020", displayValue: "2020" },
              ],
              placeholder: "Select Year of Qualifying Degree",
              id: "yearOfQual",
            },
            label: "Year of Qualifying Degree",
            value: "2023",
          },

          degreeUniv: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Degree Awarding University / Institute Name",
              id: "degreeUniv",
            },
            label: "Degree Awarding University / Institute Name",
            desc:
              "As you start typing the university name, you will see a list of universities. Please select your university if it appears in the list. Otherwise, type the university name completely without any special characters (Note: Length should not exceed 100 characters).apostrophe(" +
              ") not allowed.",
            value: "",
          },

          collegeName: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Name of College",
              id: "collegeName",
            },
            label: "College Name",
            desc:
              "As you start typing the college name, you will see a list of colleges. Please select your college if it appears in the list. Otherwise, type the college name completely without any special characters (Note: Length should not exceed 100 characters).apostrophe(" +
              ") not allowed.",
            value: "",
          },
        },

        Upload_Documents: {
          uploadPhoto: {
            elementType: "file",
            elementConfig: {
              type: "file",
              accept: "image/jpeg",
              id: "Upload_Documents",
            },
            label: "Upload Photograph",
            desc:
              "Upload a JPEG/JPG/PNG file of your photograph of maximum pixel resolution 480 x 640 and minimum pixel resolution 240 x 320. Aspect ratio (width : height) has to be between 0.6603 and 0.8933, Size of an image should be in a range of 5KB to 200KB. " +
              <a href="#">Guidelines for uploading the Photograph</a>,
            value: "",
          },

          uploadSign: {
            elementType: "file",
            elementConfig: {
              type: "file",
              accept: "image/jpeg",
              id: "uploadSign",
            },
            label: "Upload Signature",
            desc:
              "Upload a JPEG/JPG file of your signature of maximum pixel resolution 160 x 560 and minimum pixel resolution 80 x 280. Aspect ratio (height : width) has to be between 3.1586 and 4.0360, Size of an image should be in a range of 5KB to 150KB. Guidelines for uploading the Signature",
            value: "",
          },

          eligibilityDoc: {
            elementType: "file",
            elementConfig: {
              type: "file",
              accept: "image/jpeg",
              id: "eligibilityDoc",
            },
            label: "Upload Eligibility Document / Certificate",
            desc:
              "Please upload any one of the following valid Documents (File size should between 10 KB and 500 KB , pdf format)" +
              "1. Degree certificate / Provisional passing certificate." +
              "2. Course completion certificate." +
              "3. Consolidated mark sheet / Final year marksheet." +
              "4. Those who have not completed undergraduated studies. Upload Eligibility certificate in prescribed format." +
              "5. Section A or B completion certificate from a professional society .",
            value: "",
          },
        },

        Declaration: {
          souceOfInf: {
            elementType: "select",
            elementConfig: {
              options: [
                { value: "GATE Poster", displayValue: "GATE Poster" },
                { value: "Internet Search", displayValue: "Internet Search" },
                { value: "Social Media", displayValue: "Social Media" },
                { value: "Employment News", displayValue: "Employment News" },
                { value: "University News", displayValue: "University News" },
                { value: "Newspaper", displayValue: "Newspaper" },
                { value: "Job Website", displayValue: "Job Website" },
                { value: "Word of Mouth", displayValue: "Word of Mouth" },
                { value: "Other", displayValue: "Other" },
              ],
              id: "sourceOfInformation",
            },
            label: "Where did you first come to know about GATE 2020 ?",
            value: "GATE Poster",
          },

          dec: {
            elementType: "checkbox",
            elementConfig: {
              options: [
                {
                  value:
                    "I have verified the details filled in the application form." +
                    " I understand that the data once submitted cannot be modified at later point" +
                    ' of time and I am ready to "Submit and Proceed to Payment".',
                },
              ],
              id: "declaration",
            },
            label: "Declaration",
            value: "",
          },
          saveButton: {
            elementType: "button",
            elementConfig: {
              val: "Save",
              classname: {
                variant: "info",
              },
            },
          },
          savenViewButton: {
            elementType: "button",
            elementConfig: {
              val: "Save and View Application",
              classname: {
                variant: "info",
              },
            },
          },
          submit: {
            elementType: "button",
            elementConfig: {
              val: "Submit and Proceed to Payment",
              classname: {
                variant: "primary",
                type: "submit",
              },
            },
          },
        },
      },
      formIsValid: false,
    };
  }

  applicationHandler = (event) => {
    event.preventDefault();
    const user = {};
    for (let key in this.state.applicationForm) {
      for (let formElementIdentifier in this.state.applicationForm[key]) {
        let x = this.state.applicationForm[key];
        user[formElementIdentifier] = x[formElementIdentifier].value;
      }
    }
    console.log("The form data is ", JSON.stringify(user, null, 5));
  };

  populateData(event, inputIdentifier, key) {
    event.preventDefault();
    const updatedApplicationForm = {
      ...this.state.applicationForm,
    };
    let subSection = {
      ...updatedApplicationForm[key],
    };

    let country = subSection[inputIdentifier].value;
    console.log("Country is = " + country);

    axios
      .post("fetchExamCities1", country)
      .then((response) => {
        //localStorage.setItem('session', JSON.stringify(state));
        console.log(
          "[Reducer.js] Response -> " + JSON.stringify(response, null, 5)
        );
      })
      .catch((error) => {
        console.error(
          "[Reducer.js] Some error occured while loggin in " + error
        );
      });

    subSection["examCity1"].elementConfig.options = [
      { value: "UP", displayValue: "UP" },
      { value: "MP", displayValue: "MP" },
      { value: "BIHAR", displayValue: "BIHAR" },
      { value: "Nepal", displayValue: "Nepal" },
      { value: "Singapore", displayValue: "Singapore" },
      { value: "Sri Lanka", displayValue: "Sri Lanka" },
      { value: "United Arab Emirates", displayValue: "United Arab Emirates" },
    ].slice();
    updatedApplicationForm[key] = {
      ...subSection,
    };
    this.setState({ applicationForm: updatedApplicationForm });
  }

  componentDidUpdate() {}

  inputChangedHandler = (event, inputIdentifier, key) => {
    event.preventDefault();

    const updatedApplicationForm = {
      ...this.state.applicationForm,
    };
    let subSection = {
      ...updatedApplicationForm[key],
    };
    const updatedApplicationFormElement = {
      ...subSection[inputIdentifier],
    };
    updatedApplicationFormElement.value = event.target.value;
    subSection[inputIdentifier] = updatedApplicationFormElement;

    if (
      inputIdentifier === "firstName" ||
      inputIdentifier === "middleName" ||
      inputIdentifier === "lastName"
    ) {
      subSection["name"].value =
        subSection["firstName"].value.toUpperCase() +
        " " +
        subSection["middleName"].value.toUpperCase() +
        " " +
        subSection["lastName"].value.toUpperCase();

      if (subSection["name"].value !== "" && subSection["name"].value != null) {
        subSection["name"].valid = true;
      } else subSection["name"].valid = false;
    }
    updatedApplicationForm[key] = {
      ...subSection,
    };
    this.setState({ applicationForm: updatedApplicationForm });
  };

  render() {
    const headElementAray = [];
    for (let key in this.state.applicationForm) {
      let conf = this.state.applicationForm[key];
      const formElementsArray = [];
      for (let k in conf) {
        formElementsArray.push({
          id: k,
          config: conf[k],
        });
      }
      headElementAray.push({
        id: key,
        config: conf,
        arr: formElementsArray,
      });
    }

    let form = (
      <React.Fragment>
        <h1 className="text-center">
          <Badge variant="light" style={{ width: "100%" }}>
            Application Form
          </Badge>
        </h1>
        <form onSubmit={this.applicationHandler}>
          {headElementAray.map((hE) => (
            <Accordion defaultActiveKey={hE.id} key={hE.id}>
              <Card style={{ marginBottom: "15px" }}>
                <Accordion.Toggle as={Card.Header} eventKey={hE.id}>
                  <h3>
                    <Badge variant="light" style={{ width: "100%" }}>
                      {hE.id}
                    </Badge>
                  </h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={hE.id}>
                  <Card.Body>
                    {hE.arr.map((formElement) => (
                      <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        label={formElement.config.label}
                        value={formElement.config.value}
                        css={formElement.config.css}
                        desc={formElement.config.desc}
                        err={formElement.config.err}
                        selected={
                          formElement.config.elementConfig.select == true
                            ? (event) =>
                                this.populateData(event, formElement.id, hE.id)
                            : null
                        }
                        changed={(event) =>
                          this.inputChangedHandler(event, formElement.id, hE.id)
                        }
                      />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
          <Button>Submit</Button>
        </form>
      </React.Fragment>
    );
    if (this.props.context.userLoggerIn) return form;
    else return <NotLoggedIn />;
  }
}

const mapStateToProps = (state) => {
  return {
    context: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (constextV) => dispatch({ cont: constextV }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(applicationForm);
