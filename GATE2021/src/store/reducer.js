import axios from 'axios';

const initialState = {
    appStage: 'APPLICATION_FILING',
    userLoggerIn: true,
    applicationState: 1,
    declaration: null,
    isDuplicate: false,
    hasFailedOnlinePayments: false,
    bankId: '',
    nameChangeReqStatus: 0,
    dobChangeReqStatus: 0,
    examCountry: 1,
    isAdmitcardValid: false,
    applicantResoponseURL: null,
    hasContestedQuestions: true,
    isPresent: true,
    isResultWithheld: false,
    optionalSectionsExist: true,
    paperCode: 'GG',
    qualified: true,
    error: '',
    success: ''
};

const reducer = (state = initialState) => {
    axios.post('http://localhost:8080/gate2021/getInitialContext', "statMap").then(
        response => {
            console.log('[Reducer.js] Response -> ' + JSON.stringify(response.data, null, 5));
        }
    ).catch(
        error => {
            console.log('[Reducer.js] Some error occured while loggin in ' + error.data);
        }
    )

    return {
        ...state,
        appStage: 'REGISTRATION',
        isDuplicate: false,
        declaration: 'Yes',
        isLocked: true,
        hasFailedOnlinePayments: true,
        bankId: 'SBI',
        nameChangeReqStatus: 0,
        dobChangeReqStatus: 0,
        examCountry: 0,
        isAdmitcardValid: true,
        applicantResoponseURL: 'null',
        hasContestedQuestions: true,
        isPresent: true,
        isResultWithheld: true,
        optionalSectionsExist: true,
        paperCode: 'GB',
        qualified: true,
        error: '',
        success: ''
    }
};

export default reducer;