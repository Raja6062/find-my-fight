import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../Utils/styles.css';
import { LoginSchema } from '../../Components/validation';
import '../../Utils/styles.css';
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import ForgetPasswordModal from './ForgetpasswordModal';
import { userLogin } from '../../Utils/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyLoader from '../../Components/Comman/loader';
import '../../Utils/Customstyles.css';
import logo from '../../assets/images/logo.png';

toast.configure();

const LoginModal = ({ swichModal, onHide, show, setForgetModal, setModalShow }) => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);

  const onLoginSubmit = (values) => {
    setLoader(true);
    console.log('loginvalues', values);
    userLogin(values)
      .then((response) => {
        setLoader(false);
        console.log('login', response);
        if (response.status == true) {
          setLoader(false);
          console.log('res', response);
          toast.success(response.message);
          localStorage.setItem('user', response.result.id);
          localStorage.setItem('name', response.result.userName);
          localStorage.setItem('firstname', response.result.firstName);
          localStorage.setItem('lastname', response.result.lastName);
          localStorage.setItem('token', response.token);
          history.push('/HomePage');
          //  history.replace('/HomePage');
        } else {
          setLoader(false);
          toast.error(response.message);
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
            <img src={logo} />
          </div>
          <h2>Login</h2>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => onLoginSubmit(values)}
          >
            {({ values, handleChange, errors, handleSubmit, setFieldTouched, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" onChange={handleChange('email')} />
                  <span className="inputIcon">
                    <i class="fal fa-envelope"></i>
                  </span>
                  <p className="errorText"> {errors.email && touched.email && errors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" onChange={handleChange('password')} />
                  <span className="inputIcon">
                    <i class="fal fa-lock-open-alt"></i>
                  </span>
                  <p className="errorText"> {errors.password && touched.password && errors.password}</p>
                </Form.Group>
                {/* <ForgetPasswordModal className="loginModal"  show={forgetmodalShow} onHide={() => setModalShow(false)} swichModal={()=>setForgetModal(true)}/> */}
                {/* <ForgetPasswordModal className="loginModal"  show={true} onHide={() =>
                  {
                     setModalShow(false)
                  setForgetModal(false)
                  } }
                  
                  /> */}
                {/* <ForgetPasswordModal className="loginModal"  show={forgetmodalShow} 
                  /> */}

                {/* <p className="forgotPass"><a href="#" onClick={() =>{showForgotModal();onHide();}} >Forgot Password?</a></p> */}
                <p className="forgotPass">
                  <a
                    href="#"
                    onClick={async () => {
                      await setModalShow(false);

                      setForgetModal(true);
                    }}
                  >
                    Forgot Password?
                  </a>
                </p>
                {/* <p className="forgotPass"><a href="#" onClick={() => setForgetModal(true)} >Forgot Password?</a></p> */}
                {/* forgotPass = () => {onHide(); showForgotModel()} */}
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <p className="registerLink">
            Don’t have an account?{' '}
            <a
              href="#"
              onClick={() => {
                onHide();
                swichModal();
              }}
            >
              Register Now
            </a>{' '}
          </p>
        </MyLoader>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer> */}
    </Modal>
  );
};

export default LoginModal;
