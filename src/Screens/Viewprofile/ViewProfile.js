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
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import usr from '../../assets/images/usr.jpg';
import redicon from '../../assets/images/redicon.png';
import wbc from '../../assets/images/wbc.png';
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import photo4 from '../../assets/images/photo4.jpg';
import bnr1 from '../../assets/images/bnr1.jpg';
import thumb1 from '../../assets/images/thumb1.jpg';
import thumb2 from '../../assets/images/thumb2.jpg';
import thumb3 from '../../assets/images/thumb3.jpg';
import bnr3 from '../../assets/images/bnr3.jpg';
import { userProfile } from '../../Utils/services';

export default function ViewProfile() {
  const [modalShowc, filterModalshow] = React.useState(false);
  const history = useHistory();

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
    console.log('TEST', '123');
    profileDetails();
  }, []);

  const profileDetails = async () => {
    const token = await localStorage.getItem('token');

    // const data = {
    //   name: '',
    //   token,
    // };

    userProfile({ token })
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <div className="postSection postViewprof">
                <div className="postTop">
                  <div className="postTplft viewPostBase">
                    <span className="postImg" onClick={() => history.push('./EditProfile')}>
                      <img src={usr} />
                    </span>
                    <div className="viewProfshort">
                      <h6>
                        Petania Rox .
                        <span className="viewprofAddress">
                          <i class="fas fa-map-marker-alt"></i> Virginia, US .
                        </span>
                      </h6>
                      <div className="viewprofInfo">
                        <div className="viewPreofinfotxt">
                          <strong>259</strong>
                          <span>Posts</span>
                        </div>

                        <div className="viewPreofinfotxt">
                          <strong>1.3k</strong>
                          <span>Followers</span>
                        </div>

                        <div className="viewPreofinfotxt">
                          <strong>259</strong>
                          <span>Following</span>
                        </div>

                        <a href="#" class="followBtn">
                          Message
                        </a>
                      </div>

                      <div className="viewProfNames">
                        <strong>Petania Rox</strong> . <span>Trainer</span>
                      </div>

                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                        layout Content here, content here', making it look like readable..{' '}
                        <a href="#" className="readMore">
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="postTprgt">
                    <a href="#" className="followBtn">
                      Following
                    </a>
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
              </div>

              <div className="viewProfPagebg">
                <div className="vppLft">
                  <h3>Athlete Profile</h3>
                  <div className="boxer">
                    <h4>Pro Lighweight Boxer</h4>
                    <h5>Professional Record</h5>
                    <div className="recordBg">
                      <span>
                        <strong>17</strong>Win
                      </span>
                      <span>
                        <strong>-</strong>
                      </span>
                      <span>
                        <strong>1</strong>Loss
                      </span>
                      <span>
                        <strong>-</strong>
                      </span>
                      <span>
                        <strong>2</strong>Draw
                      </span>
                    </div>
                    <div className="boxerDetails">
                      <div>
                        <h6>Stance</h6>
                        <p>Orthadox</p>
                      </div>
                    </div>
                    <div className="boxerDetails">
                      <div>
                        <h6>Location</h6>
                        <p>London, United Kingdom</p>
                      </div>
                    </div>
                    <div className="boxerDetails">
                      <div>
                        <h6>Promotion</h6>
                        <p>Fight Nights Global</p>
                      </div>
                      <img src={redicon} />
                    </div>
                    <div className="boxerDetails">
                      <div>
                        <h6>Affilation</h6>
                        <p>WBC</p>
                      </div>
                      <img src={wbc} />
                    </div>
                  </div>

                  <div className="sectionHdn">
                    <h3>Photo &amp; Video</h3> <a href="#">See All</a>
                  </div>
                  <div className="photoVideoBg">
                    <img src={photo1} />
                    <img src={photo2} />
                    <img src={photo3} />
                    <img src={photo4} />
                    <img src={photo1} />
                    <img src={photo2} />
                    <img src={photo3} />
                    <img src={photo4} />
                  </div>
                </div>
                <div className="vppRgt">
                  <div className="viewPrighthdn">
                    <h3>Post</h3>
                    <div>
                      <Form className="d-flex">
                        <div className="vptHdninput">
                          <FormControl type="text" placeholder="Search..." className="mr-2" aria-label="Search" />
                          <Button variant="outline-success">
                            <i class="fas fa-search"></i>
                          </Button>
                        </div>
                        <Form.Select aria-label="Default select example">
                          <option>Newest</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form>
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
                            Petania Rox . <span className="trn">Trainer</span>
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
                            Petania Rox . <span className="trn">Trainer</span>
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
                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    <div className="postBnr">
                      <div className="mainpostBnr">
                        <img src={bnr3} />
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
