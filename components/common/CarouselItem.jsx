
import { FaEthereum, FaUserFriends } from "react-icons/fa";

export default function CarouselItem() {
  return (
    <div>
      <div className="col-md-12">
        <div className="item-box-blog">
          <div className="item-box-blog-image">
            {/*Date*/}
            <div className="item-box-blog-date bg-blue-ui white">
              ID # 3423{" "}
            </div>
            {/*Image*/}
            <div className="row site-eth-logo-container">
              <div className="col-md-6 ">
                {/* <img
                  src={require("../../public/images/logo1.png")}
                  style={{ width: 80, height: 80 }}
                  alt="sitelogo"
                /> */}
          <img src={require('../../public/images/dlf_logo.png')}  style={{height:90,width:90,margin:'0 10px'}}  />
              </div>
              <div className="col-md-6 ">
                {/* <FaEthereum size={80} className="eth-logo-profile" /> */}
                
          <img src={require('../../public/images/tronicon.png')}  style={{height:70,width:70,margin:'10px 20px 0 20px'}}  />
              </div>
            </div>
          </div>
          <div className="item-box-blog-body">
            {/*Heading*/}
            <div className="item-box-blog-heading">
              <h4>
                <FaUserFriends size={30} className="sync-icon" />3
              </h4>
            </div>
            {/*Data*/}
            <div
              className="item-box-blog-data container"
              style={{ padding: "px 15px" }}
            >
              <div className="row m-2">
                <div className="col-md-12 col-sm-12">
                  <span className="title">USD Balance</span>
                </div>
                <div className="col-md-12 col-sm-12">
                  <span className="value ">$237802</span>
                </div>
              </div>
              <div className="row  m-2">
                <div className="col-md-12 col-sm-12">
                  <span className="title">TRX Balance</span>
                </div>
                <div className="col-md-12 col-sm-12">
                  <span className="value pink">1085.85 TRX</span>
                </div>
              </div>
              <div className="row  m-2">
                <div className="col-md-12 col-sm-12">
                  <span className="title">Finace 4x</span>
                </div>
                <div className="col-md-12 col-sm-12">
                  <span className="value ">573.525 TRX</span>
                </div>
              </div>
            </div>
            {/*Text*/}
            <div className="item-box-blog-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
