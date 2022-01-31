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
import '../../Utils/Customstyles.css';
import '../../Utils/styles.css';
import Picker from 'emoji-picker-react';
import MyLoader from '../../Components/Comman/loader';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { AllNewseed } from '../../Utils/services';
import ChangePassword from './Changepassword'
import {AllUserType} from '../../Utils/services'
toast.configure();

export default function Home() {
  const [modalShowc, filterModalshow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();
  const { state } = useHistory()

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  const userLocal = localStorage.getItem('user');
  const userName = localStorage.getItem('name');
  const firstName = localStorage.getItem('firstname');
  const lastName = localStorage.getItem('lastname');
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [show, setShow] = useState(false);
  const [file, Profile] = useState();
  const [emojiname, setEmojiname] = useState('Feeling/Activity');
  const [loader, setLoader] = useState(false);
  const [text, setText] = useState();
  const [icon, setEmojiicon] = useState();
  const [title, setTitle] = useState();
  const [item, setItems] = useState([]);
  const [flag,setFlag] =useState(true)
  const hour = new Date().getHours();

  const loginUserName=  localStorage.getItem('ufullname');

  console.log('hour', hour);
  const baseImageurl = 'https://nodeserver.mydevfactory.com:8009/uploads/newsfeed/';
  // const[text,setText]=useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
    allfeeds();

    
  }, []);
  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');
  };
  const onEmojiClick = (event, emojiObject) => {
    console.log('emojiicon', emojiObject.emoji);
    setChosenEmoji(emojiObject);
    setEmojiname(emojiObject.names);
    setEmojiicon(`${text}${emojiObject.emoji}`);
    console.log('concat', `${text}${emojiObject.emoji}`);
    setText(`${text}${emojiObject.emoji}`);
  };
  console.log('text', text);
  const showEmoji = () => {
    setShow(!show);
  };

  function handleUpload(event) {
    console.log('imagepath', URL.createObjectURL(event.target.files[0]));
    Profile(event.target.files[0]);
  }
  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };
 
  const handleSubmit = () => {
    console.log('gg');
    addNewseed();
   setFlag(false)
  };
  const textSet = (e) => {
    console.log('e', e.target.value);
    setText(e.target.value);
  };
  const addNewseed = () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', icon);
    //  formData.append('title', emojiname);
    formData.append('image', file);
    console.log('formData:', formData);
    setLoader(true);
    console.log('token:', token);
    axios({
      method: 'POST',
      url: 'https://nodeserver.mydevfactory.com:8009/feed/newsfeed',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setLoader(false);
        console.log('res:', res);
        if (res.data.status == true) {
          toast.success(res.data.message);
          Profile(null);
          setChosenEmoji(null);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log('error', error);
      });
  };
  const allfeeds = async () => {
    const token = await localStorage.getItem('token');
    console.log('token: ', token);

    // const data = {
    //   name: '',
    //   token,
    // };
    AllNewseed({ token })
      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res);

      .then((res) => {
        console.log('res: ', res);
        if (res.status == true) {
          console.log('if', res);
          setItems(res.result);
          console.log('gbb', title);
          // setLastName(res.result.lastName);
          // setDesc(res.result.bio);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

console.log("state",state)

  return (
    <div className="mainWrap">
      <ChangePassword
        className="loginModal"
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      ></ChangePassword>
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

                  <Nav.Item style={{marginTop:'5px',padding:"10px",border:"1px solid gray",backgroundColor:"orange",borderRadius:"10px",color:"blue"}}>
                     {loginUserName}
                    </Nav.Item>

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
                        <Dropdown.Item onClick={() => setModalShow(true)}>
                            <i class="fal fa-sign-out-alt"></i>
                            Change Password
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handleLogout}>
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
              <MyLoader active={loader}>
                <div className="postSection">
                  <div className="postTop">
                    <div className="postTplft">
                      <span className="postImg" onClick={() => history.push('./ViewProfile')}>
                        <img src={usr} />
                      </span>
                      <div>
                        <h6>
                          @{userName} ({firstName} {lastName}) <img src={gr} />
                        </h6>
                        {/* <h6>
                        Petania Rox . <img src="../images/gr.png" />
                      </h6> */}
                        {/* <p>
                          2h ago . <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
                          <a href="">
                            <i class="fas fa-globe-americas"></i>
                          </a>
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="postComment">
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        {icon ? (
                          <Form.Control as="textarea" rows={3} value={ flag? icon: "" } placeholder="What’s on your mind?" />
                        ) : (
                          <Form.Control as="textarea" rows={3} onChange={(e) => textSet(e)} placeholder="What’s on your mind?" />
                        )}
                        {/* <Form.Control as="textarea" rows={3} onChange={(e) => textSet(e)} placeholder="What’s on your mind?" /> */}
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="postCommentFooter">
                    <a href="#" className="postCom1">
                      <i class="fas fa-video"></i> Live Video
                    </a>
                    <div className="postCom2">
                      <div className="update-team-photo">
                        {/* <input type="file" name="img" onChange={(event) => handleImageChange(event)} /> */}
                        <input type="file" onChange={handleUpload} />
                        <span className="imagepreview">
                          {/* <i class="fas fa-image"></i> */}
                          {file == null ? <i class="fas fa-image"></i> : file && <ImageThumb image={file} /> }
                          {/* {file && <ImageThumb image={file} />} */}
                        </span>
                        Photo/Video
                      </div>
                    </div>
                    {/* <a href="" className="postCom3"> */}

                    <div className="postCom3" onClick={showEmoji}>
                      <span className="postCom3">
                        {chosenEmoji ? <span>{chosenEmoji.emoji}</span> : <i class="fas fa-smile"></i>}
                        {show ? <Picker onEmojiClick={onEmojiClick} /> : ''}
                      </span>
                      &nbsp;
                      <span className="emojiname"> {emojiname}</span>
                    </div>
                    {text ? (
                      <Button type="submit" className="postbttn" onClick={handleSubmit}>
                        Post
                      </Button>
                    ) : (
                      ''
                    )}

                    {/* </a> */}
                  </div>
                </div>
              </MyLoader>

              {item.map((name) => {
                return (
                  <>
                    <div className="postSection">
                      <div className="postTop">
                        <div className="postTplft">
                          <span className="postImg" onClick={() => history.push('./ViewProfile')}>
                            <img src={usr} />
                          </span>
                          <div>
                            <h6>
                              @{userName} ({firstName} {lastName}) <img src={gr} />
                            </h6>
                            <p>
                              {hour - new Date(name.createdAt).getHours() < 0
                                ? 12 + hour - new Date(name.createdAt).getHours()
                                : hour - new Date(name.createdAt).getHours()}
                              hour ago. <i class="fas fa-map-marker-alt"></i> Virginia, US . &nbsp;&nbsp;
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
                        {name.title}

                        {/* It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                  layout Content here, content here', making it look like readable... */}
                      </p>
                      <div className="postBnr" onClick={() => history.push('./PostDetails')}>
                        <div className="mainpostBnr">
                          <img src={bnr1} />
                        </div>
                        <div className="mainThumb">
                          <img src={`${baseImageurl}${name.image}`} />
                          {/* <img src={thumb1} /> */}
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
                  </>
                );
              })}

              <div className="postSection">
                <div className="postTop">
                  <div className="postTplft">
                    <span className="postImg" onClick={() => history.push('./ViewProfile')}>
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
