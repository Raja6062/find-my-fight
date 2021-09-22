import React from 'react'

const FriendStatus = () => {
    return (
            <>
            <div className="rightContactList">
                <div className="rightPanHdn">
                  <span className="rpEvent">Contacts</span>
                </div>

                <div className="frSection">
                  <div className="frSecImg">
                    <span className="contactNameIcon contBgColor1">JB</span>
                  </div>
                  <div className="frSecRgt">
                    <div className="friendHdn">
                      <h6>John Betania</h6>
                    </div>
                    <p><span className="onlineIcon"></span>Online</p>                    
                  </div>
                </div>

                <div className="frSection">
                  <div className="frSecImg">
                    <span className="contactNameIcon contBgColor2">JR</span>
                  </div>
                  <div className="frSecRgt">
                    <div className="friendHdn">
                      <h6>Jesica Rose</h6>
                    </div>
                    <p><span className="onlineIcon"></span>Online</p>                    
                  </div>
                </div>

                <div className="frSection">
                  <div className="frSecImg">
                    <span className="contactNameIcon contBgColor3">WR</span>
                  </div>
                  <div className="frSecRgt">
                    <div className="friendHdn">
                      <h6>William Rayen</h6>
                    </div>
                    <p><span className="onlineIcon"></span>Online</p>                    
                  </div>
                </div>

                <div className="frSection">
                  <div className="frSecImg">
                    <span className="contactNameIcon contBgColor2">JR</span>
                  </div>
                  <div className="frSecRgt">
                    <div className="friendHdn">
                      <h6>Jesica Rose</h6>
                    </div>
                    <p><span className="offlineIcon"></span>2 days ago</p>                    
                  </div>
                </div>

                <div className="frSection">
                  <div className="frSecImg">
                    <span className="contactNameIcon contBgColor3">WR</span>
                  </div>
                  <div className="frSecRgt">
                    <div className="friendHdn">
                      <h6>William Rayen</h6>
                    </div>
                    <p><span className="offlineIcon"></span>2 days ago</p>                    
                  </div>
                </div>

            </div>
            <div className="newChatSec">
                <span className="newChatTxt">New Chat</span>
                <span className="chatEdit"><i class="fas fa-edit"></i></span>
            </div>
            </>
    )
}

export default FriendStatus
