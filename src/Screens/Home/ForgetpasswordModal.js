import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../Utils/styles.css';
import { ForgotSchema } from '../../Components/validation';
import '../../Utils/styles.css';
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, useRouteMatch, history } from 'react-router-dom';
import { forgetPass } from '../../Utils/services';
import MyLoader from '../../Components/Comman/loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Utils/Customstyles.css';
import logo from '../../assets/images/logo.png';
import usr from '../../assets/images/usr.jpg';
import drag1 from '../../assets/images/drag1.jpg';
import page from '../../assets/images/page.png';
import gr from '../../assets/images/gr.png';
import bnr1 from '../../assets/images/bnr1.jpg';
import bnr2 from '../../assets/images/bnr2.jpg';
import thumb1 from '../../assets/images/thumb1.jpg';
import thumb2 from '../../assets/images/thumb2.jpg';
import thumb3 from '../../assets/images/thumb3.jpg';

toast.configure();
const ForgetPasswordModal = ({ show, onHide, className }) => {
  const [loader, setLoader] = useState(false);
  const forgotSubmit = (values) => {
    setLoader(true);
    console.log('values', values);
    forgetPass(values)
      .then((response) => {
        console.log('beforeif', response);
        setLoader(false);
        if (response.status == true) {
          console.log('res', response);
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log('error');
      });
  };
  return (
    <Modal show={show} onHide={onHide} className={className} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <MyLoader active={loader}>
          <div className="loginLogo">
            <img src={logo} />
          </div>

          <h2 className="forgetText">Reset Password</h2>
          <p className="forgetText2">Enter your email address to reset your password.</p>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={ForgotSchema}
            onSubmit={(values) => forgotSubmit(values)}
          >
            {({ values, handleChange, errors, handleSubmit, setFieldTouched, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 emailinput" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" onChange={handleChange('email')} />
                  <span className="inputIcon">
                    <i class="fal fa-envelope"></i>
                  </span>
                  <p className="errorText"> {errors.email && touched.email && errors.email}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </MyLoader>
      </Modal.Body>
    </Modal>
  );
};

export default ForgetPasswordModal;
