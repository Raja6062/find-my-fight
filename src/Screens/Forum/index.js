import React, { useState, useEffect } from 'react';
import SideMenuComponents from '../../Components/SideMenu/index';
import Rightpannel from '../../Components/SideMenu/Rightpannel';
import FriendRequest from '../../Components/SideMenu/FriendRequest';
import FriendStatus from '../../Components/SideMenu/FriendStatus';
import '../../Utils/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, ErrorMessage } from 'formik';
import { RegisterSchema } from '../../Components/validation';
import { Link } from 'react-router-dom';

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
import { useHistory } from 'react-router-dom';
import MyLoader from '../../Components/Comman/loader';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { AddForum, AllForum } from '../../Utils/services'
import { ForumSchema } from '../../Components/validation';

toast.configure();

export default function Forum(props) {
  const history = useHistory();
  const [modalShowc, filterModalshow] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [topic, setTopic] = useState()
  const [content, setContent] = useState()
  const [allForum, setAllForum] = useState([])

  const [token, setToken] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const authtoken = localStorage.getItem('token');
    console.log('token', authtoken);
    setToken(authtoken);
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
    getAllForum()
  }, []);

  const UserId = localStorage.getItem('user');
  console.log('user id',UserId)


  const validation = () => {
    console.log("save click")
    console.log("topic", JSON.stringify(topic))

    if (topic && content) {
      const token = localStorage.getItem('token');
      console.log("topic", topic, content)
      axios('https://nodeserver.mydevfactory.com:8009/forum/addforum',{
        method:"POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data:JSON.stringify({
          'topic': topic,
          'content': content
        })
      }
      )
        .then((res) => {
          setLoader(false);
          console.log('forum res:', res);
          if (res.data.status == true) {
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          setLoader(false);
          console.log('error', error);
        });
      handleClose()
    } else {
      toast.error("please fill all field")
    }


  }
  const getAllForum = () => {
    const token = localStorage.getItem('token');
    axios('https://nodeserver.mydevfactory.com:8009/forum/allforum', {
      method: "GET",
      headers:
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`

      }
    }).then(res => {
      console.log("allforum", res.data.result)
      setAllForum(res.data.result)
    })
  }

  const deleteData = (id) => {
    console.log("delete click")
    const token = localStorage.getItem('token');
    axios('https://nodeserver.mydevfactory.com:8009/forum/deleteForum', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: JSON.stringify({
        "forum_id": id
      })
    })
      .then(res => {
        console.log("deteled forum", res)
        if (res.data.status == true) {
          toast.success(res.data.message);
          getAllForum()
        } else {
          toast.error(res.data.message);
        }

      })


  }


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
             

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
               
                 <h1 style={{textAlign:"center",fontWeight:"bold"}}> ADD FORUM</h1>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Topic</Form.Label>
                      <Form.Control type="text" placeholder="Enter title" required onChange={(e) => setTopic(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Content</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder="Enter Something here ..." required onChange={(e) => setContent(e.target.value)} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={validation}>Save</Button>
                </Modal.Footer>
              </Modal>

              {allForum.map(data => {
                return (
                  <div className="postSection forumBg" >
                    <div className="postTop">
                      <div className="postTplft">
                        <span className="postImg">
                          <Link to={{pathname:"/ForumInfo",state:data.id}}>
                          <img src={usr}  />
                          </Link>
                         
                        </span>
                        <div>
                          <h6>{data.topic}</h6>
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
                            {data.userId.id === UserId ? <span onClick={() => deleteData(data.id)}>
                              <i class="fa fa-trash" aria-hidden="true" ></i> Delete
                            </span> : ""}

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
                )

              })}


            </div>
            <div className="col-lg-1">
            
              {/* <Rightpannel />
              <FriendRequest />
              <FriendStatus/>  */}
            </div>
            <div className="col-lg-2" >
            <Button variant="primary" onClick={handleShow} style={{marginLeft:"44%"}}>
                Add Forum
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
