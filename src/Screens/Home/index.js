import React, { useState, useEffect } from 'react';
import SideMenuComponents from '../../Components/SideMenu/index';
import Rightpannel from '../../Components/SideMenu/Rightpannel';
import '../../Utils/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgetPasswordModal from './ForgetpasswordModal';
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
  const [token, setToken] = React.useState('');

  //for login modal
  const [modalShow, setModalShow] = React.useState(false); ///login
  const [modalShowb, setModalShowB] = React.useState(false); ////register
  const [forgetmodalShow, setForgetModal] = React.useState(false);

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const authtoken = localStorage.getItem('token');
    console.log('token', authtoken);
    setToken(authtoken);
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
                    <img src={logo} />
                  </a>
                </div>
                <div className="middleHead"></div>
                <div className="rightHead">
                  {(token === ' ' || token === null) && (
                    <div className="loginSignup">
                      <a href="#" className="headLogin" onClick={() => setModalShow(true)}>
                        Login
                      </a>
                      <a href="#" className="headSignup" onClick={() => setModalShowB(true)}>
                        Signup
                      </a>
                    </div>
                  )}
                  {/* <div className="loginSignup" >
                    <a href="#" className="headLogin" onClick={() => setModalShow(true)}>
                      Login
                    </a>
                    <a href="#" className="headSignup" onClick={() => setModalShowB(true)}>
                      Signup
                    </a>
                  </div> */}
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
                  layout Content here, content here', making it look like readable...
                </p>
                <div className="postBnr">
                  <div className="mainpostBnr">
                    <img src={bnr1} />
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
