import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Login from '../components/UI/Forms/Login';
import Spinner from 'react-bootstrap/Spinner';
import ChangeApplicantDetails from '../components/UI/Forms/ChangeApplicantDetails/ChangeApplicantDetails'
// import NotFound from '../components/UI/UI/PageNotFound/NotFound';
// import InternalServer from '../components/UI/UI/InternalServerError/InternalServerError';

import './App.css';
import ForgotCredentials from '../components/UI/Forms/ForgotCredentials/ForgotCredentials';
import ForgotEnrolIDRegisterID from '../components/UI/Forms/ForgotEnrolIDRegisterID/ForgotEnrolIDRegisterID';
import ResetPassword from '../components/UI/Forms/ResetPassword/ResetPassword';

const ApplicationForm = React.lazy(() => import('../components/UI/Forms/ApplicationForm/ApplicationForm'));
const Form = React.lazy(() => import('../components/UI/RegisterForm'));
const Home = React.lazy(() => import('../components/UI/Home/Home'));
const Faqs = React.lazy(() => import('../components/FAQs/Faqs'));
const ChangeGatePaper = React.lazy(() => import('../components/UI/Forms/ChangeGatePaper/ChangeGatePaper'));

function App() {

  return (
    <BrowserRouter basename="/gate2021/">
      <Layout>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact render={() => <Suspense fallback={<Spinner animation="border" />}><Form /></Suspense>} />
          <Route path="/faqs" exact render={() => <Suspense fallback={<Spinner animation="border" />}><Faqs /></Suspense>} />
          <Route path="/profile" exact render={() => <Suspense fallback={<Spinner animation="border" />}><Home /></Suspense>} />
          <Route path="/applicationForm" exact render={() => <Suspense fallback={<Spinner animation="border" />}><ApplicationForm /></Suspense>} />
          <Route path="/ChangeCandidateDetails" exact render={() => <Suspense fallback={<Spinner animation="border" />}><ChangeApplicantDetails /></Suspense>} />
          <Route path="/forgotCredential" exact render={() => <Suspense fallback={<Spinner animation="border" />}><ForgotCredentials /></Suspense>} />
          <Route path="/forgotEnrolIDRegisterID" exact render={() => <Suspense fallback={<Spinner animation="border" />}><ForgotEnrolIDRegisterID /></Suspense>} />
          <Route path="/ResetPassword" exact render={() => <Suspense fallback={<Spinner animation="border" />}><ResetPassword /></Suspense>} />
          <Route path="/ChangeGatePaper" exact render={() => <Suspense fallback={<Spinner animation="border" />}><ChangeGatePaper /></Suspense>} />
          {/* <Route path="/500" component={InternalServer} /> */}
        </div>
        <Route path="/information_brochure" component={() => {
          window.location.href = 'http://gate.iitd.ac.in/brochure.php';
          return null;
        }} />

        <Route path="/idates" component={() => {
          window.location.href = 'http://gate.iitd.ac.in/idates.php';
          return null;
        }} />

        <Route path="/documentrequirement" component={() => {
          window.location.href = 'http://gate.iitd.ac.in/documentrequirement.php';
          return null;
        }} />

        <Route path="/faq" component={() => {
          window.location.href = 'http://gate.iitd.ac.in/faq.php';
          return null;
        }} />

        <Route path="/imp" component={() => {
          window.location.href = ' http://gate.iitd.ac.in/';
          return null;
        }} />
      </Layout>
    </BrowserRouter>
  );
}
export default App;
