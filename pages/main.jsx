import React from "react";
import PrivateHeader from "../components/core/PrivateHeader";
import PrivateSidenav from "../components/core/PrivateSidenav";
import AboveMain from "../components/core/AboveMain";
import ActiveMatrix from "../components/common/ActiveMatrix";
import NonActiveMatrix from "../components/common/NonActiveMatrix";
import Footer from "../components/core/Footer";
import Section3X from "../components/common/Section3X";
import Section4X from "../components/common/Section4X";

export default function index() {
  return (
    <React.Fragment>
      <div className="mymain">
        <PrivateHeader />
        <div className="container"
          style={{ paddingTop: "100px" }}>
          <AboveMain />
        </div>
        <div
          className="container main-container"
          style={{ paddingTop: "10px" }}
        >
          <div className="row">
            <div className="col-lg-9">
              <Section3X />
              <div className="row icon-tips text-left mt-3 text-white">
                <div className="col-md-5">
                  <div>
                    <i className="matrix-single matrix-children__active" />
                    <span className="icon-tips_text">PARTNER INVITED BY YOU</span>
                  </div>
                  <div>
                    <i className="matrix-single matrix-children__overflow" />
                    <span className="icon-tips_text">OVERFLOW FROM UP</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <i className="matrix-single matrix-children__overflow_partner" />
                    <span className="icon-tips_text">BOTTOM OVERFLOW</span>
                  </div>
                  <div>
                    <i className="matrix-single matrix-children__advance" />
                    <span className="icon-tips_text">
                      PARTNER WHO IS AHEAD OF HIS INVITER
                  </span>
                  </div>
                </div>
              </div>
              <br />
              <Section4X />
              <div className="row icon-tips text-left mt-3">
                <div className="col-md-5">
                  <div>
                    <i className="matrix-single matrix-children__active" />
                    <span className="icon-tips_text">PARTNER INVITED BY YOU</span>
                  </div>
                  <div>
                    <i className="matrix-single matrix-children__overflow" />
                    <span className="icon-tips_text">OVERFLOW FROM UP</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <i className="matrix-single matrix-children__overflow_partner" />
                    <span className="icon-tips_text">BOTTOM OVERFLOW</span>
                  </div>
                  <div>
                    <i className="matrix-single matrix-children__advance" />
                    <span className="icon-tips_text">
                      PARTNER WHO IS AHEAD OF HIS INVITER
                  </span>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <PrivateSidenav />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
