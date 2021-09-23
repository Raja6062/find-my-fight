import React from 'react';
import usr from '../../assets/images/usr.jpg';

const FriendRequest = () => {
  return (
    <div className="rightFriendRequest">
      <div className="rightPanHdn">
        <span className="rpEvent">Friends Requests</span>
        <span className="rpViewall">View All</span>
      </div>
      <div className="frSection">
        <div className="frSecImg">
          <img src={usr} />
        </div>
        <div className="frSecRgt">
          <div className="friendHdn">
            <h6>John Betania</h6> <span>2 days ago</span>
          </div>
          <p>2 mutual friends</p>
          <div className="friendButton">
            <button className="friendConfirm">Confirm</button>
            <button className="friendDelete">Delete</button>
          </div>
        </div>
      </div>
      <div className="frSection">
        <div className="frSecImg">
          <img src={usr} />
        </div>
        <div className="frSecRgt">
          <div className="friendHdn">
            <h6>Jesica Rose</h6> <span>7 days ago</span>
          </div>
          <p>5 mutual friends</p>
          <div className="friendButton">
            <button className="friendConfirm">Confirm</button>
            <button className="friendDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
