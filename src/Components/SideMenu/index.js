import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    HashRouter,
} from "react-router-dom";
function SideMenuComponents(props) {

    
    //for toggle left pannel in responsive view Start
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
      };
    //for toggle left pannel in responsive view End



    return (
                <div className="leftPannel">
                    <button className="leftToggle" onClick={handleToggle}><i class="fas fa-bars"></i></button>

                    <ul className={isActive ? "leftHide" : "leftShow"}>
                        <Link to="/HomePage">
                            <li><a href="#" class="menu1 active"><i class="fas fa-home"></i> Home</a></li>
                        </Link>
                        <Link to="/Promotions">
                            <li><a href="#" class="menu1 active"><i class="fas fa-certificate"></i> Promotions</a></li>
                        </Link>
                        <Link to="/Officials">
                            <li><a href="#" class="menu1 active"><i class="fas fa-megaphone"></i> Officials</a></li>
                        </Link>
                        <Link to="/AboutUs">
                            <li><a href="#" class="menu1 active"><i class="fas fa-info-circle"></i> AboutUs</a></li>
                        </Link>
                        <Link to="/Trainers">
                            <li><a href="#" class="menu1 active"><i class="fad fa-user-secret"></i> Trainers</a></li>
                        </Link>
                        <Link to="/Shop">
                            <li><a href="#" class="menu1 active"><i class="fas fa-store-alt"></i> Shop</a></li>
                        </Link>
                        <Link to="/Events">
                            <li><a href="#" class="menu1 active"><i class="fas fa-calendar-star"></i> Events</a></li>
                        </Link>
                        <Link to="">
                            <li><a href="#" class="menu1 active"><i class="fas fa-users"></i> Community</a></li>
                        </Link>
                        <Link to="">
                            <li><a href="#" class="menu1 active"><i class="fas fa-comment-alt-dots"></i> Forum</a></li>
                        </Link>
                        <Link to="">
                            <li><a href="#" class="menu1 active"><i class="fas fa-users-class"></i> Groups</a></li>
                        </Link>
                        <Link to="">
                            <li><a href="#" class="menu1 active"><i class="fas fa-dumbbell"></i> Gym</a></li>
                        </Link>
                        <Link to="">
                            <li><a href="#" class="menu1 active"><i class="fas fa-running"></i> Athletes</a></li>
                        </Link>
                        <Link to="">
                            <li><a href="#" class="menu1 active"><i class="fas fa-suitcase"></i> Business</a></li>
                        </Link>
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