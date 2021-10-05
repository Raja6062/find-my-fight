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
import srchProduct from '../../assets/images/srchProduct.jpg';
import logo from '../../assets/images/logo.png';
import usr from '../../assets/images/usr.jpg';
import ad1 from '../../assets/images/ad1.jpg';
import ad2 from '../../assets/images/ad2.jpg';
import map from '../../assets/images/map.jpg';

export default function SearchResult() {
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
            <div className="col-lg-12 searchHdn">Search Result</div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="addBg">
                <img src={ad1} alt="add" />
                <img src={ad2} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="searchResForm">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>
                  <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Discipline</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Number of Fights</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Stance</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Level</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Affiliated Promotion</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Button type="submit">Search</Button>
                </Form>
              </div>

              <div className="searchProductBg">
                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>

                <div className="searchProduct">
                  <img src={srchProduct} />
                  <h3>Petania Rox</h3>
                  <h4>
                    <i class="fas fa-map-marker-alt"></i> Virginia, US
                  </h4>
                  <p>It is a long established fact that a reader will be distracted..</p>
                  <div className="srchMap">
                    <img src={map} />
                  </div>
                </div>
              </div>

              <div className="seeAll">
                <button>See All</button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="addBg">
                <img src={ad1} />
                <img src={ad2} alt="add" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
