import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, history } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../Utils/styles.css';
import { RegisterSchema } from '../../Components/validation';
import { userRegister } from '../../Utils/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyLoader from '../../Components/Comman/loader';
import '../../Utils/Customstyles.css';
toast.configure();

const RegisterModal = ({ swichModal, onHide, show }) => {
  const [loader, setLoader] = useState(false);
  const showLoader = () => {
    toast('this is a toast alert', {
      position: 'bottom-center',
    });
  };

  const onSubmit = (values) => {
    console.log('res success register--->', values);
    setLoader(true);
    userRegister(values)
      .then((response) => {
        console.log('check', response);
        if (response.status == true) {
          setLoader(false);
          console.log('res', response);
          toast.success(response.message);
        } else {
          setLoader(false);
          toast.error(response.message, {});
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log('error', error);
      });
  };

  return (
    <Modal className="loginModal" show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <MyLoader active={loader}>
          <div className="loginLogo">
            <img src="../images/logo.png" />
          </div>
          <h2>Create an account</h2>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              userName: '',
              // memberType:''
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => onSubmit(values)}
          >
            {({ handleChange, errors, handleSubmit, values, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstname">
                  <Form.Control type="text" placeholder="First Name" onChange={handleChange('firstName')} />
                  <span className="inputIcon">
                    <i class="fal fa-user"></i>
                  </span>
                  <p className="errorText">{errors.firstName && touched.firstName && errors.firstName}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastname">
                  <Form.Control type="text" placeholder="Last Name" onChange={handleChange('lastName')} />
                  <span className="inputIcon">
                    <i class="fal fa-user"></i>
                  </span>
                  <p className="errorText">{errors.lastName && touched.lastName && errors.lastName}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email Address" onChange={handleChange('email')} />
                  <span className="inputIcon">
                    <i class="fal fa-envelope"></i>
                  </span>
                  <p className="errorText"> {errors.email && touched.email && errors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="User Name" onChange={handleChange('userName')} />
                  <span className="inputIcon">
                    <i class="fal fa-user"></i>
                  </span>
                  <p className="errorText">{errors.userName && touched.userName && errors.userName}</p>
                </Form.Group>

                {/* <Form.Group className="mb-3 dropDown" controlId="formBasicMembertype">
                <Form.Select aria-label="Default select example" onChange={handleChange('memberType')}>
                    <option>Member Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <span className="inputIcon"><i class="fal fa-chevron-down"></i></span>
                <p className="errorText">{errors.memberType && touched.memberType && errors.memberType}</p>
            </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" onChange={handleChange('password')} />
                  <span className="inputIcon">
                    <i class="fal fa-lock-open-alt"></i>
                  </span>
                  <p className="errorText">{errors.password && touched.password && errors.password}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <Form.Control type="password" placeholder="Confirm Password" onChange={handleChange('confirmPassword')} />
                  <span className="inputIcon">
                    <i class="fal fa-lock-open-alt"></i>
                  </span>
                  <p className="errorText">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <p className="registerLink">
            Already have an account?{' '}
            <a
              href="#"
              onClick={() => {
                onHide();
                swichModal();
              }}
            >
              Login
            </a>
          </p>
        </MyLoader>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
};

export default RegisterModal;
