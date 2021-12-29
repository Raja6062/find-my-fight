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

const ChangePassword = ({ swichModal, onHide, show, setForgetModal, setModalShow }) => {
    const history = useHistory();


   


    return (
        <Modal className="loginModal" show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <MyLoader >
                    <div className="loginLogo">
                        <img src={logo} />
                    </div>
                    <h2>Change Password</h2>

                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Enter old password" />
                            <span className="inputIcon">
                            <i class="fal fa-lock-open-alt"></i>
                            </span>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Enter new password" />
                            <span className="inputIcon">
                                <i class="fal fa-lock-open-alt"></i>
                            </span>

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>


                </MyLoader>
            </Modal.Body>

        </Modal>
    );
};

export default ChangePassword;
