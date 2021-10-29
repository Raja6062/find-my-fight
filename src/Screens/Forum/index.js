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
import logoB from '../../assets/images/logoB.png';
import logo from '../../assets/images/logo.png';
import usr from '../../assets/images/usr.jpg';

export default function Forum() {
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
                {/* <div className="fightingTalk">
                  <a href="#">
                    <img src={logoB} />
                  </a>
                </div> */}
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
              {/* <div className="fightingTalk">Fighting Talk</div> */}
              <div className="fightingTalk">
                <a href="#">
                  <img src={logoB} />
                </a>
              </div>

              <div className="postSection forumBg">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>Sports Ending Letter Game #58</h6>
                      <p>
                        2h ago . <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
                        <a href="">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </p>
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
                    </div>
                  </div>
                  <div className="postTprgt">
                    <div className="likeCommentRight">
                      <span>156 Likes</span>
                      <span>56 Comments</span>
                      <span>32 Shares</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="postSection forumBg">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>Sports Ending Letter Game #58</h6>
                      <p>
                        2h ago . <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
                        <a href="">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </p>
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
                    </div>
                  </div>
                  <div className="postTprgt">
                    <div className="likeCommentRight">
                      <span>156 Likes</span>
                      <span>56 Comments</span>
                      <span>32 Shares</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="postSection forumBg">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src={usr} />
                    </span>
                    <div>
                      <h6>Sports Ending Letter Game #58</h6>
                      <p>
                        2h ago . <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
                        <a href="">
                          <i class="fas fa-globe-americas"></i>
                        </a>
                      </p>
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
                    </div>
                  </div>
                  <div className="postTprgt">
                    <div className="likeCommentRight">
                      <span>156 Likes</span>
                      <span>56 Comments</span>
                      <span>32 Shares</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
