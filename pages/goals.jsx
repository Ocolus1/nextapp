import React from "react";
import PrivateSidenav from "../components/core/PrivateSidenav";
import PrivateHeader from "../components/core/PrivateHeader";
import AboveMain from "../components/core/AboveMain";
import { FaPlus } from "react-icons/fa";
import Footer from "../components/core/Footer";
export default function Goal() {
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
                  <div className="border-gradient_content">
                    <div className="row">
                      <h3 className="col-6">Goals</h3>
                      <div className="col-6" style={{textAlign:'right'}}>
                        <button className="btn"><FaPlus/></button>
                      </div>
                    </div>
                    <br />
                    {/* <h4
                      className="text-center"
                      style={{ cursor: "pointer" }}
                      data-spoiler=".filter-wrapper"
                    > */}

                    <div className="page-stats">
                      <table className="table tableStyle page-stats_table">
                        <thead>
                          <tr className="text-white">
                            {/* <td style={{}}>Type </td> */}
                            <td className="text-white" style={{}}>Status</td>
                            <td className="text-white" style={{}}>Currency</td>
                            <td className="text-white" style={{}}>Title</td>
                            <td className="text-white" style={{}}>Description</td>
                            <td style={{}} className="text-center text-white">
                              Date
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr>
                            <td>
                              <a href="?user=100">100 </a>
                            </td>
                            <td className="text-center">X4</td>
                            <td className="text-center">
                              <div title={6}>4 </div>
                            </td>
                            <td>
                              <span className="page-stats__profit">0.2 </span>
                            </td>
                            
                            <td>2020.02.10 06:58</td>
                          </tr> */}
                        </tbody>
                      </table>
                      <p
                        style={{ margin: "0 auto", textAlign: "center" }}
                        className="head"
                      >
                        No data found
                      </p>
                    </div>
                    <div className="pagination_wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PrivateSidenav />
        </div>
      </div>
      <Footer/>
      </div>
    </React.Fragment>
  );
}
