import React from "react";
import PrivateHeader from "../components/core/PrivateHeader";
import PrivateSidenav from "../components/core/PrivateSidenav";
import AboveMain from "../components/core/AboveMain";
import {
  FaArrowAltCircleUp,
  FaUserFriends,
  FaSync,
  FaExternalLinkAlt,
} from "react-icons/fa";
import L1MatrixActiveChild from "../components/common/L1MatrixActiveChild";
import L2MatrixOverflowChild from "../components/common/L2MatrixOverflowChild";
import L2NonActiveChild from "../components/common/L2NonActiveChild";
import Footer from "../components/core/Footer";

export default function MatixView3x() {
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
              <div className="row min-width_structure">
                <div className="col">
                  <div className="border-gradient">
                    <div className="border-gradient_content-2">
                      {/* <div className="btn-nav_prev">
      <a href="/page/x3/12/70/">
        <i className="fas fa-chevron-circle-left" />
      </a>
      <span className="btn-nav_page">12 </span>
    </div>
    <div className="btn-nav_next">
      <span className="btn-nav_page">2 </span>
      <a href="/page/x3/2/70/">
        <i className="fas fa-chevron-circle-right" />
      </a>
    </div> */}
                      <div className="logotypeX3" >
                        {/* <img src="/img/x3.svg" alt /> */}
                        <h4>Finance x3</h4>

                      </div>
                      <div className="user-matrix_ternary">
                        <div className="user_id">
                          <a href="/page/x3/1/51/">
                            <i className="fa fa-arrow-up" />
                              ID <span>51</span>
                          </a>
                        </div>
                        <div className="user-matrix_root user-matrix_root__active">
                          <div className="user-matrix__active">
                            <div className="user-matrix_level" title="Platform">
                              1{" "}
                            </div>
                            <div className="user-matrix_id">
                              <a href="/?user=70" className="trigger_value__user-id">
                                ID <span>70 </span>
                              </a>
                            </div>
                            {/* <div className="user-matrix_price"> */}
                            <div className="user-matrix_price">
                              <div className="user-matrix_price__dollars">
                                $21
              <br />
                              </div>
                              <div className="user-matrix_price__eth">0.05 </div>
                            </div>
                          </div>
                          <div className="user-matrix__nonactive">
                            <div className="user-matrix_level" title="Platform">
                              1{" "}
                            </div>
                            <div
                              className="user-matrix_cart"
                              data-matrix={1}
                              data-level={1}
                              data-matrix_price="0.025"
                            ></div>
                            <div className="user-matrix_price">0.025 </div>
                          </div>
                          <div className="user-matrix_reinvest" title="Реинвест уровня">
                            <span className="user-matrix_reinvest__nav">
                              <a
                                href="?reinvest=0"
                                className="user-matrix_reinvest__nav-next"
                                title="A higher level"
                              >
                                <i className="fa fa-chevron-up" />
                              </a>
                              <a
                                href="?reinvest=0"
                                className="user-matrix_reinvest__nav-prev"
                                title="Lower level"
                              >
                                <i className="fa fa-chevron-down" />
                              </a>
                            </span>
                            <span data-spoiler=".user-matrix_reinvest__popup">
                              {/* <span className="user-matrix_reinvest__tip">
              HISTORY <i className="fas fa-database" />
            </span>
            <i className="matrix-icon_sync" /> */}
                              <FaSync className="sync-icon" />
            0{" "}
                            </span>
                            <div className="user-matrix_reinvest__popup">
                              <select
                                name
                                id="changeCurrentReinvest"
                                className="form-control"
                                style={{}}
                              >
                                <option value={0} selected>
                                  0{" "}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="user-matrix_partners" title="Партнеров на уровне">
                            <a>
                              <FaUserFriends className="users-icon" />2{" "}
                            </a>
                          </div>
                        </div>
                        <div className="user-matrix__branchs">
                          <div />
                          <div />
                          <div />
                        </div>
                        <div className="user-matrix_children">
                          <div
                            className="user-matrix_wrapper_popup matrix-children__active "
                            title
                          >
                            <span className="user-matrix_children_count">
                              <a
                                href="/page/x3/1/120/?tx=0x5de2dcb39991f3b18824484367c7fb1effc60ff3798059ef47d4035c67e46fe7"
                                className="fsz-15"
                              >
                                120{" "}
                              </a>
                            </span>
                            <span className="user-matrix_partners__count">
                              {/* <i className="matrix-icon_users" /> */}
                              <FaUserFriends className="users-icon" />
                              <span>0</span>
                            </span>
                            <span className="user-matrix_popup">
                              <span>
                                {/* <i className="matrix-icon_users" /> */}
                                <FaUserFriends className="users-icon" />
                                <span>0</span>
                              </span>
                              <span>
                                {/* <i className="matrix-icon_sync" /> */}
                                <FaSync className="sync-icon" />
                                <span>0</span>
                              </span>
                            </span>
                          </div>
                          <div
                            className="user-matrix_wrapper_popup matrix-children__active "
                            title
                          >
                            <span className="user-matrix_children_count">
                              <a
                                href="/page/x3/1/128/?tx=0xa367a229afb2974a27203416d1143fed76ccbe75ec126f580231a0267de9d8a3"
                                className="fsz-15"
                              >
                                128{" "}
                              </a>
                            </span>
                            <span className="user-matrix_partners__count">
                              {/* <i className="matrix-icon_users" /> */}
                              <FaUserFriends className="users-icon" />
                              <span>0</span>
                            </span>
                            <span className="user-matrix_popup">
                              <span>
                                {/* <i className="matrix-icon_users" /> */}
                                <FaUserFriends className="users-icon" />
                                <span>0</span>
                              </span>
                              <span>
                                {/* <i className="matrix-icon_sync" /> */}
                                <FaSync className="sync-icon" />
                                <span>0</span>
                              </span>
                            </span>
                          </div>
                          <div
                            className="user-matrix_wrapper_popup matrix-children__nonactive "
                            title
                          >
                            <span className="user-matrix_children_count"></span>
                            <span className="user-matrix_partners__count">
                              {/* <i className="matrix-icon_users" /> */}
                              <FaUserFriends className="users-icon" />

                              <span>0</span>
                            </span>
                            <span className="user-matrix_popup">
                              <span>
                                {/* <i className="matrix-icon_users" /> */}
                                <FaUserFriends className="users-icon" />

                                <span>0</span>
                              </span>
                              <span>
                                {/* <i className="matrix-icon_sync" /> */}
                                <FaSync className="sync-icon" />
                                <span>0</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>;

              </div>
              </div>
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
                  <div>
                    <FaArrowAltCircleUp
                      size={21}
                      style={{
                        color: "#540d6e",
                        backgroundColor: "#FFD23F",
                        borderRadius: 50,
                        border: "none",
                      }}
                    />
                    <span className="icon-tips_text">
                      PAYOUT TO HIGHER PARTNER
                  </span>
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
              <div className="card table_mini_container ">
                <table className="table_mini tablePartners ">
                  <thead>
                    <tr>
                      <td style={{}}>(2)</td>
                      <td style={{}}>Date</td>
                      <td style={{}}>Wallet </td>
                      <td style={{}}>ID</td>
                      <td style={{}}>TRX / USD</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className>
                      <td title>
                        <div>
                          <i className="matrix-single matrix-children__active" />
                        </div>
                      </td>
                      <td>2020.02.01 00:14 </td>
                      <td className="">
                        <div>
                          <a
                            title="0x8c1a7e7e110da493fec00e6c807956c429c14e1d"
                            href="/"
                            target="_blank"
                          >
                            <FaExternalLinkAlt style={{ margin: "0 5px" }} />
                          0x8c1...14e1d
                        </a>
                        </div>
                      </td>
                      <td title="ETH: 0.000 | USD: 0">
                        <a href="/page/x2/1/58/" target="_blank">
                          1
                      </a>
                      </td>
                      <td>
                        <i
                          className="fab fa-ethereum"
                          style={{ fontWeight: 100 }}
                        />
                      0.35 <span style={{ fontSize: "8.7pt" }}>/ $80</span>
                      </td>
                    </tr>
                    <tr className>
                      <td title>
                        <FaArrowAltCircleUp
                          size={21}
                          style={{
                            color: "#540d6e",
                            backgroundColor: "#FFD23F",
                            borderRadius: 50,
                            border: "none",
                          }}
                        />
                      </td>
                      <td>2020.01.31 22:54 </td>
                      <td className="">
                        <div>
                          <a
                            title="0x8c1a7e7e110da493fec00e6c807956c429c14e1d"
                            href="/"
                            target="_blank"
                          >
                            <FaExternalLinkAlt style={{ margin: "0 5px" }} />
                          0x8c1...14e1d
                        </a>
                        </div>
                      </td>

                      <td title="ETH: 0.175 | USD: 40">
                        <a href="/page/x2/3/23/" target="_blank">
                          3
                      </a>
                      </td>
                      <td>
                        <i
                          className="fab fa-ethereum"
                          style={{ fontWeight: 100 }}
                        />
                      0.35 <span style={{ fontSize: "8.7pt" }}>/ $80</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination_wrapper"></div>
            </div>
            <PrivateSidenav />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
