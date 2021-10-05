import React, { useState, useEffect } from 'react';
import SideMenuComponents from '../../Components/SideMenu/index';
import Rightpannel from '../../Components/SideMenu/Rightpannel';
import FriendRequest from '../../Components/SideMenu/FriendRequest';
import FriendStatus from '../../Components/SideMenu/FriendStatus';
import '../../Utils/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import ScrollContainer from 'react-indiana-drag-scroll';
import FilterModal from '../Home/FilterModal';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/images/logo.png';
import usr from '../../assets/images/usr.jpg';

export default function EditProfile() {
  const [modalShowc, filterModalshow] = React.useState(false);

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="mainWrap">
      {/* for filter modal */}
      <FilterModal className="loginModal filter_modal" show={modalShowc} onHide={() => filterModalshow(false)} />
      <div className={scroll ? 'innerScroll scrolled' : 'innerScroll'}>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12 headMain headMainB">
                <div className="logobg">
                  <a href="#">
                    <img src={logo} />
                  </a>
                </div>
                <div className="middleHead">
                  <Nav activeKey="/">
                    <Nav.Item>
                      <Nav.Link href="/">
                        <i class="fas fa-home-lg-alt"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-1">
                        <i class="fal fa-calendar-star"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2">
                        <i class="fal fa-users"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2">
                        <i class="fal fa-store"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2">
                        <i class="fal fa-info-square"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2">
                        <i class="fal fa-bell"></i>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="rightHead">
                  <div className="homePageRight">
                    <div className="headSlide">
                      <span onClick={() => filterModalshow(true)}>
                        <i class="fal fa-sliders-h"></i>
                      </span>
                    </div>
                    <div className="headerSearch">
                      <Form className="d-flex">
                        <Button variant="outline-success">
                          <i class="fas fa-search"></i>
                        </Button>
                        <FormControl type="search" placeholder="Search..." className="mr-2" aria-label="Search" />
                      </Form>
                    </div>
                    <div className="hpUser">
                      <Dropdown>
                        <Dropdown.Toggle>
                          <img src={usr} />
                          <i class="fal fa-chevron-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <i class="fal fa-sign-out-alt"></i> Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">{/* <SideMenuComponents /> */}</div>
            <div className="col-lg-8">
              <div className="postSection edpForm">
                <div className="editPostTop">
                  <img src={usr} />
                  <div>
                    <h5>roxx@petania</h5>
                    <h6>Change Profile Photo</h6>
                  </div>
                </div>

                <Form>
                  <div className="edpTop">
                    <Form.Group className="mb-3" controlId="formBasictext">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter User Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Description</Form.Label>
                    <div className="edpCheck">
                      <Form.Check type="checkbox" label="Gym" />
                      <Form.Check type="checkbox" label="Trainer" />
                      <Form.Check type="checkbox" label="Athlete" />
                      <Form.Check type="checkbox" label="Business" />
                      <Form.Check type="checkbox" label="Promotions" />
                      <Form.Check type="checkbox" label="Community" />
                      <Form.Check type="checkbox" label="Officials" />
                    </div>
                  </Form.Group>
                </Form>
              </div>

              <div className="postSection edpForm">
                <h3>Simple Questions &amp; Answer</h3>

                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell me about where you grew up and what your family life was like.</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>How did you come up with the idea for your business?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What led you to your career?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe a scene of your vision for the future.</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            <div className="col-lg-2">
              {/* <Rightpannel />
              <FriendRequest />
              <FriendStatus/>  */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
