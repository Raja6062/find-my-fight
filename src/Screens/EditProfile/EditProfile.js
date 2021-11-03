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
import { useHistory } from 'react-router-dom';
import '../../Utils/Customstyles.css';
import { updateProfile } from '../../Utils/services';
import { Network } from '../../Utils/network';
import axios from 'axios';
import MyLoader from '../../Components/Comman/loader';
import { ToastContainer, toast } from 'react-toastify';
import { userProfile } from '../../Utils/services';
toast.configure();

export default function EditProfile() {
  const [modalShowc, filterModalshow] = React.useState(false);
  const history = useHistory();
  const [errors, setError] = useState('');
  const [errorsuser, setErroruser] = useState('');
  const [errorEmail, emailError] = useState('');
  const [firstName, setName] = useState();
  const [email, setEmail] = useState();
  const [lastName, setUsername] = useState();
  const [bio, setDescription] = useState();
  const [error, descError] = useState('');
  const [description_1, setDescription1] = useState();
  const [description_2, setDescription2] = useState();
  const [description_3, setDescription3] = useState();
  const [description_4, setDescription4] = useState();
  const [file, setFile] = useState();
  const [selectcheckbox, setSelectbox] = useState([]);
  const [loader, setLoader] = useState(false);
  const [name, setFirstname] = React.useState();
  const [surname, setSurname] = React.useState();
  const [getEmail, setEaddress] = React.useState();
  const [getDesc, setDecs] = React.useState();
  // const [desc1, setDecs1] = React.useState();
  // const [desc2, setDecs2] = React.useState();
  // const [desc3, setDecs3] = React.useState();
  // const [desc4, setDecs4] = React.useState();

  //for add or remove class in header when window scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    console.log('useeffect');
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
    profileDetails();
  }, []);
  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');
  };

  const handleSubmit = () => {
    console.log('gg');

    // if (!firstName) {
    //   setError('Please enter your name.');
    //   return;
    // }
    // if (!lastName) {
    //   setErroruser('Please enter user name.');
    //   return;
    // }
    // if (!email) {
    //   emailError('Please enter your email address.');
    //   return;
    // }
    // if (!bio) {
    //   descError('Please enter description.');
    //   return;
    // }
    //getProfileDetails();
    profileUpdate();
  };
  const profileDetails = async () => {
    const token = await localStorage.getItem('token');
    console.log('token: ', token);

    // const data = {
    //   name: '',
    //   token,
    // };
    userProfile({ token })
      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res);

      .then((res) => {
        console.log('res: ', res);
        if (res.status == true) {
          console.log('if', res);
          setFirstname(res.result.firstName);
          setSurname(res.result.userName);
          setEaddress(res.result.email);
          setDecs(res.result.bio);
          // setDecs1(res.result.description_1);
          // setDecs2(res.result.description_2);
          // setDecs3(res.result.description_3);
          // setDecs4(res.result.description_4);

          //  console.log("name",)
          // setLastName(res.result.lastName);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const profileUpdate = () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    // formData.append('firstName ', firstName);
    // formData.append('lastName', lastName);
    formData.append('bio', bio);
    formData.append('description_1', description_1);
    formData.append('description_2', description_2);
    formData.append('description_3', description_3);
    formData.append('description_4', description_4);
    formData.append('image', file);
    console.log('formData:', formData);
    setLoader(true);
    console.log('token:', token);
    axios({
      method: 'POST',
      url: 'https://nodeserver.mydevfactory.com:8009/user/updateProfile',
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
          // setError('');
          // setErroruser('');
          // emailError('');
          // descError('');
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log('error', error);
      });
  };

  const handleImageChange = (event) => {
    console.log('URL.createObjectURL(event.target.files[0])---->', URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
    // image(event.target.files[0]);
  };
  function handleUpload(event) {
    console.log('file upload', event.target.files[0]);
    setFile(event.target.files[0]);
  }
  const ImageThumb = ({ image }) => {
    console.log('image', image);
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
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
                          <Dropdown.Item onClick={handleLogout}>
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
        <MyLoader active={loader}>
          <div className="container">
            <div className="row">
              <div className="col-lg-2">{/* <SideMenuComponents /> */}</div>

              <div className="col-lg-8">
                <div className="postSection edpForm">
                  <div className="editPostTop">
                    {/* <img src={usr} /> */}
                    {file == null ? <img src={usr} /> : file && <ImageThumb image={file} />}
                    {/* {image == null ? <img src={usr} /> : file && <ImageThumb image={file} />} */}

                    <div>
                      <h5>roxx@petania</h5>
                      <div className="update-team-photo">
                        <div>
                          <input type="file" onChange={handleUpload} />
                          <h6>Change Profile Photo</h6>
                          {/* {file && <ImageThumb image={file} />} */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Form>
                    <div className="edpTop">
                      <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          value={name}
                          readonly="readonly"
                          onChange={(e) => setName(e.target.value)}
                        />

                        <p style={{ color: 'red', padding: '12', textAlign: 'left' }}> {errors}</p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter User Name"
                          value={surname}
                          readonly="readonly"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <p className="errorText"> {errorsuser}</p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={getEmail}
                          readonly="readonly"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="errorText"> {errorEmail}</p>
                      </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        // value={getDesc}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <p className="errorText"> {error}</p>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Label>Description</Form.Label>
                      <div className="edpCheck" onClick={(e) => checkboxClick(e)}>
                        <Form.Check type="checkbox" label="Gym" value="Gym" />
                        <Form.Check type="checkbox" label="Trainer" value="Trainer" />
                        <Form.Check type="checkbox" label="Athlete" value="Athlete" />
                        <Form.Check type="checkbox" label="Business" value="Business" />
                        <Form.Check type="checkbox" label="Promotions" value="Promotions" />
                        <Form.Check type="checkbox" label="Community" value="Community" />
                        <Form.Check type="checkbox" label="Officials" value="Officials" />
                      </div>
                    </Form.Group> */}
                  </Form>
                </div>

                <div className="postSection edpForm">
                  <h3>Simple Questions &amp; Answer</h3>

                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Tell me about where you grew up and what your family life was like.</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => setDescription1(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>How did you come up with the idea for your business?</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => setDescription2(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>What led you to your career?</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => setDescription3(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Describe a scene of your vision for the future.</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => setDescription4(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
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
        </MyLoader>
      </section>
    </div>
  );
}
