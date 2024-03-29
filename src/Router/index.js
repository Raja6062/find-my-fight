import React from 'react';
import Home from '../Screens/Home/index';
import AboutUs from '../Screens/About Us/index';
import Officials from '../Screens/Officials/index';
import Promotions from '../Screens/Promotions/index';
import Trainers from '../Screens/Trainers/index';
import Business from '../Screens/Business/index';
import Events from '../Screens/Events/index';
import Forum from '../Screens/Forum/index';
import ForumInfo from '../Screens/Forum/ForumInfo';
import Group from '../Screens/Groups/index';
import Shop from '../Screens/Shop/index';
import Community from '../Screens/Community/index';
import LoginModal from '../Screens/Home/LoginModal';
import RegisterModal from '../Screens/Home/RegisterModal';
import PostDetails from '../Screens/Home/PostDetails';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';
import HomePage from '../Screens/Home/HomePage';
import SearchResult from '../Screens/Searchresult/SearchResult';
import ViewProfile from '../Screens/Viewprofile/ViewProfile';
import EditProfile from '../Screens/EditProfile/EditProfile';
import ChangePassword from '../Screens/Home/Changepassword';
const RouteScreen = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Officials" component={Officials} />
        <Route path="/Promotions" component={Promotions} />
        <Route path="/Trainers" component={Trainers} />
        <Route path="/Business" component={Business} />
        <Route path="/Events" component={Events} />
        <Route path="/Forum" component={Forum} />
        <Route path="/ForumInfo" component={ForumInfo} />
        <Route path="/Group" component={Group} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Community" component={Community} />
        <Route path="/login" component={LoginModal} />
        <Route path="/register" component={RegisterModal} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/PostDetails" component={PostDetails} />
        <Route path="/PostDetails" component={PostDetails} />
        <Route path="/SearchResult" component={SearchResult} />
        <Route path="/EditProfile" component={EditProfile} />
        <Route path="/ViewProfile" component={ViewProfile} />
        <Route path="/ChangePassword" component={ChangePassword} />
      </Switch>
    </HashRouter>
  );
};
export default RouteScreen;
