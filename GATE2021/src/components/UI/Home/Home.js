import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import Notice from '../Notice/Notice';
import Spinner from 'react-bootstrap/Spinner'

const Profile = React.lazy(() => import('../Profile/Profile'));
const Payment = React.lazy(() => import('../Payment/Payment'));
const RectifyDefect = React.lazy(() => import('../RectifyDefects/RectifyDefects'));
const ChangeExamCity = React.lazy(() => import('../ChangeExamCity/ChangeExamCity'));
const AdmitCard = React.lazy(() => import('../AdmitCard/AdmitCard'));
const ContestQuestions = React.lazy(() => import('../ContestQuestions/ContestQuestions'));
const ViewContestQuestions = React.lazy(() => import('../ViewContestQuestions/ViewContestQuestions'));
const Result = React.lazy(() => import('../Result/Result'));
const ScoreCard = React.lazy(() => import('../ScoreCard/ScoreCard'));

class Home extends Component {

    state = {
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('[Home.js] component did mount');
        console.log(this.props);
    }

    render() {

        let stageComponent;

        switch (this.props.context.appStage) {
            case ('REGISTRATION'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <Profile />
                </Suspense>
                break;

            case ('APPLICATION_FILING'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <Profile />
                </Suspense>
                break;

            case ('PAYMENT'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <Payment />
                </Suspense>
                break;

            case ('RECTIFY_DEFECTS'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <RectifyDefect />
                </Suspense>
                break;

            case ('CHANGE_EXAM_CITY'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <ChangeExamCity />
                </Suspense>
                break;

            case ('CHANGE_EXAM_CITY_ONLY'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <ChangeExamCity />
                </Suspense>
                break;

            case ('ADMIT_CARD'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <AdmitCard />
                </Suspense>
                break;

            case ('CONTEST_QUESTIONS'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <ContestQuestions />
                </Suspense>
                break;

            case ('VIEW_CONTEST_QUESTIONS'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <ViewContestQuestions />
                </Suspense>
                break;

            case ('RESULT'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <Result />
                </Suspense>
                break;

            case ('SCORECARD'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <ScoreCard />
                </Suspense>
                break;

            case ('FINAL_DEPLOYMENT'):
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <ScoreCard />
                </Suspense>
                break;

            default:
                stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                    <Profile />
                </Suspense>
                break;
        }
        if (!this.props.context.userLoggerIn) {
            stageComponent = <Suspense fallback={<Spinner animation="border" />}>
                <Profile />
            </Suspense>
        }
        if (this.props.context.isDuplicate) {
            stageComponent = (
                <Notice heading="Application Status">
                    <table class="table">
                        <tr>
                            <td>Enrollment ID</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Applicant Name</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2">Status</td>
                            <td>It is found that you have submitted more than one GATE
                                application.
								 However, as per GATE norms, a candidate can appear only for one GATE paper.
								 Accordingly, based on your declaration, this application has been marked as
                                 duplicate and is rejected.
 							</td>
                        </tr>
                    </table>
                </Notice>
            );
        }

        return (
            <React.Fragment>
                {stageComponent}
            </React.Fragment>
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);