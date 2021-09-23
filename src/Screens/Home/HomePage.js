import React, { useState, useEffect } from 'react';
import SideMenuComponents from '../../Components/SideMenu/index';
import Rightpannel from '../../Components/SideMenu/Rightpannel';
import FriendRequest from '../../Components/SideMenu/FriendRequest';
import FriendStatus from '../../Components/SideMenu/FriendStatus';
import '../../Utils/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import ScrollContainer from 'react-indiana-drag-scroll';
import FilterModal from './FilterModal';
import { useHistory } from 'react-router-dom';
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

export default function Home() {
  const [modalShowc, filterModalshow] = React.useState(false);
  const history = useHistory();

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  const userLocal = localStorage.getItem('user');
  const userName = localStorage.getItem('name');
  const firstName = localStorage.getItem('firstname');
  const lastName = localStorage.getItem('lastname');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    history.push('/#');
  };

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
                          <Dropdown.Item href="#/action-1" onClick={handleLogout}>
                            <i class="fal fa-sign-out-alt"></i>
                            Logout
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
              <ScrollContainer className="scroll-container">
                <div className="homeTopDragger">
                  <div className="profSecInn">
                    <div className="profSec">
                      <div className="profCircle">
                        <img src={usr} />
                      </div>
                      <img src={drag1} />
                      <div className="createStory">
                        <img src={page} />
                        <p>Create a Story</p>
                      </div>
                      <div className="profName">William Rayen</div>
                      <div className="profShadow"></div>
                    </div>
                  </div>

                  <div className="profSecInn">
                    <div className="profSec">
                      <div className="profCircle">
                        <img src={usr} />
                      </div>
                      <img src={drag1} />
                      <div className="profName">William Rayen</div>
                      <div className="profShadow"></div>
                    </div>
                  </div>

                  <div className="profSecInn">
                    <div className="profSec">
                      <div className="profCircle">
                        <img src={usr} />
                      </div>
                      <img src={drag1} />
                      <div className="profName">William Rayen</div>
                      <div className="profShadow"></div>
                    </div>
                  </div>

                  <div className="profSecInn">
                    <div className="profSec">
                      <div className="profCircle">
                        <img src={usr} />
                      </div>
                      <img src={drag1} />
                      <div className="profName">William Rayen</div>
                      <div className="profShadow"></div>
                    </div>
                  </div>

                  <div className="profSecInn">
                    <div className="profSec">
                      <div className="profCircle">
                        <img src={usr} />
                      </div>
                      <img src={drag1} />
                      <div className="profName">William Rayen</div>
                      <div className="profShadow"></div>
                    </div>
                  </div>
                </div>
              </ScrollContainer>

              <div className="postSection">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>
                        @{userName} ({firstName} {lastName}) <img src={gr} />
                      </h6>
                      {/* <h6>
                        Petania Rox . <img src="../images/gr.png" />
                      </h6> */}
                      <p>
                        2h ago . <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
                        <a href="">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="postComment">
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows={3} placeholder="What’s on your mind?" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="postCommentFooter">
                  <a href="#" className="postCom1">
                    <i class="fas fa-video"></i> Live Video
                  </a>
                  <a href="#" className="postCom2">
                    <i class="fas fa-image"></i> Photo/Video
                  </a>
                  <a href="#" className="postCom3">
                    <i class="fas fa-smile"></i> Feeling/Activity
                  </a>
                </div>
              </div>

              <div className="postSection">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>
                        @{userName} ({firstName} {lastName}) <img src={gr} />
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
                  layout Content here, content here', making it look like readable...
                </p>
                <div className="postBnr" onClick={() => history.push('./PostDetails')}>
                  <div className="mainpostBnr">
                    <img src={bnr1} />
                  </div>
                  <div className="mainThumb">
                    <img src={thumb1} />
                    <img src={thumb2} />
                    <img src={thumb3} />
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
              </div>

              <div className="postSection">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>
                        @{userName} ({firstName} {lastName}) <img src={gr} />
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
                  layout Content here, content here', making it look like readable...
                </p>
                <div className="postBnr">
                  <div className="mainpostBnr">
                    <img src={bnr2} />
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
