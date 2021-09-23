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
import FilterModal from './FilterModal';
import Carousel from 'react-bootstrap/Carousel';
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

export default function PostDetails() {
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
            <div className="col-lg-2">
              <SideMenuComponents />
            </div>
            <div className="col-lg-7">
              <div className="postSection">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>
                        Petania Rox . <img src={gr} />
                      </h6>
                      <p>
                        2h ago . <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
                        <a href="">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="postTprgt">
                    <Dropdown>
                      <Dropdown.Toggle>
                        <i class="fas fa-ellipsis-v"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                  layout Content here, content here', making it look like readable. It is a long established fact that a reader will be
                  distracted by the readable content of a page when
                </p>
                <div className="postBnr">
                  <div className="postSlider">
                    <Carousel>
                      <Carousel.Item>
                        <img className="d-block w-100" src={bnr1} alt="First slide" />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={bnr1} alt="Second slide" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={bnr1} alt="Third slide" />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
                <div className="bnrBottom">
                  <div className="likeCommentLeft">
                    <span>
                      <i class="fal fa-mitten"></i> Like
                    </span>
                    <span>
                      <i class="fal fa-comment-alt"></i> Comment
                    </span>
                    <span>
                      <i class="fal fa-share"></i> Share
                    </span>
                  </div>
                  <div className="likeCommentRight">
                    <span>156 Likes</span>
                    <span>56 Comments</span>
                    <span>32 Shares</span>
                  </div>
                </div>
                <div className="dividr"></div>
                <div className="postComment">
                  <img src={usr} />
                  <div className="postComInn">
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Write a comment..." />
                      </Form.Group>
                    </Form>
                  </div>
                </div>

                <div className="postComntBase">
                  <div className="postComment">
                    <img src={usr} />
                    <div className="postComInn">
                      <h5>John Betania</h5>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                        layout Content here, content here', making it look like readable.{' '}
                      </p>
                    </div>
                  </div>

                  <div className="postComment">
                    <img src={require('../../assets/images/usr.jpg')} />
                    <div className="postComInn">
                      <h5>William Rayen</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <Rightpannel />
              <FriendRequest />
              <FriendStatus />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
