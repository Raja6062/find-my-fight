import React, { useState, useEffect } from 'react';
import home from '../../assets/images/home.png';
import event from '../../assets/images/event.png';
import community from '../../assets/images/community.png';
import talk from '../../assets/images/talk.png';
import group from '../../assets/images/group.png';
import shop from '../../assets/images/shop.png';
import aboutus from '../../assets/images/aboutus.png';
import gym from '../../assets/images/gym.png';
import ath from '../../assets/images/ath.png';
import trainer from '../../assets/images/trainer.png';
import official from '../../assets/images/official.png';
import promotion from '../../assets/images/promotion.png';
import business from '../../assets/images/business.png';

import { BrowserRouter as Router, Switch, Route, Link, useHistory, HashRouter } from 'react-router-dom';
function SideMenuComponents(props) {
  //for toggle left pannel in responsive view Start
  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive);
  };
  //for toggle left pannel in responsive view End

  return (
    <div className="leftPannel">
      <button className="leftToggle" onClick={handleToggle}>
        <i class="fas fa-bars"></i>
      </button>

      <ul className={isActive ? 'leftHide' : 'leftShow'}>
        <Link to="/HomePage">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={home} />
              </span>{' '}
              Home
            </a>
          </li>
        </Link>
        <Link to="/SearchResult">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={event} />
              </span>{' '}
              Events
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={community} />
              </span>{' '}
              Community
            </a>
          </li>
        </Link>
        <Link to="/Forum">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={talk} />
              </span>{' '}
              Forum
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={group} />
              </span>{' '}
              Groups
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={shop} />
              </span>{' '}
              Shop
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={aboutus} />
              </span>{' '}
              About Us
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={gym} />
              </span>{' '}
              Gym
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={ath} />
              </span>{' '}
              Athletes
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={trainer} />
              </span>{' '}
              Trainers
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={official} />
              </span>{' '}
              Officials
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={promotion} />
              </span>{' '}
              Promotions
            </a>
          </li>
        </Link>
        <Link to="">
          <li>
            <a href="#" class="menu1 active">
              <span>
                <img src={business} />
              </span>{' '}
              Business
            </a>
          </li>
        </Link>

        {/* <Link to="/Forum">
          <li>
            <a href="#" class="menu1 active">
              <i class="fas fa-comment-alt-dots"></i> Forum
            </a>
          </li>
        </Link> */}
      </ul>
    </div>

    // <div class="dashboard-side-bar">

    //     <div class="left-menu-section">
    //         <div class="nav-header">
    //             <button id="openMenu">
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </button>
    //         </div>

    //     </div>
    // </div>
  );
}

export default SideMenuComponents;
