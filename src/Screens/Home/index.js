import React, { useState, useEffect } from 'react';
import SideMenuComponents from '../../Components/SideMenu/index';
import Rightpannel from '../../Components/SideMenu/Rightpannel';
import '../../Utils/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgetPasswordModal from './ForgetpasswordModal';

export default function Home() {
  //for login modal
  const [modalShow, setModalShow] = React.useState(false); ///login
  const [modalShowb, setModalShowB] = React.useState(false); ////register
  const [forgetmodalShow, setForgetModal] = React.useState(false);

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="mainWrap">
      {/* for login modal */}
      <LoginModal
        className="loginModal"
        show={modalShow}
        onHide={() => setModalShow(false)}
        swichModal={() => setModalShowB(true)}
        setForgetModal={setForgetModal}
        setModalShow={setModalShow}
      ></LoginModal>
      <ForgetPasswordModal
        className="loginModal"
        show={forgetmodalShow}
        onHide={() => {
          setModalShow(false);
          setForgetModal(false);
        }}
      />

      {/* for register modal */}
      <RegisterModal className="loginModal" swichModal={() => setModalShow(true)} show={modalShowb} onHide={() => setModalShowB(false)} />

      {/* <ForgetPasswordModal className="loginModal" swichModal={()=>setForgetModal(true)} show={forgetmodalShow} onHide={() => setForgetModal(false)} /> */}

      <div className={scroll ? 'mainScroll scrolled' : 'mainScroll'}>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12 headMain">
                <div className="logobg">
                  <a href="#">
                    <img src="../images/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="middleHead"></div>
                <div className="rightHead">
                  <div className="loginSignup">
                    <a href="#" className="headLogin" onClick={() => setModalShow(true)}>
                      Login
                    </a>
                    <a href="#" className="headSignup" onClick={() => setModalShowB(true)}>
                      Signup
                    </a>
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
              <div className="contentMidHdn">
                <h6>Popular posts across Find My Fight</h6>

                <div className="sortDrop">
                  <span>Sort by:</span>
                  <select>
                    <option>Top post</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>

              <div className="postSection">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg">
                      <img src="../images/usr.jpg" />
                    </span>
                    <div>
                      <h6>
                        Petania Rox . <img src="../images/gr.png" />
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
                    <img src="../images/bnr1.jpg" />
                  </div>
                  <div className="mainThumb">
                    <img src="../images/thumb1.jpg" />
                    <img src="../images/thumb2.jpg" />
                    <img src="../images/thumb3.jpg" />
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
                      <img src="../images/usr.jpg" />
                    </span>
                    <div>
                      <h6>
                        Petania Rox . <img src="../images/gr.png" />
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
                    <img src="../images/bnr2.jpg" />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
