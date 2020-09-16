import React from "react";
import PrivateSidenav from "../components/core/PrivateSidenav";
import PrivateHeader from "../components/core/PrivateHeader";
import AboveMain from "../components/core/AboveMain";
import { FaUserAlt, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/core/Footer";

export default function Partners() {
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
            <div className="row">
              <div className="col">
                <div className="border-gradient">
                  <div className="border-gradient_content rounded">
                    <h3 className="head">Partners</h3>
                    <form
                      className="bg-black_transparent filter-partners"
                      method="GET"
                      action="/partners/?user=21"
                    >
                      <h4 className="text-center">Filter: </h4>
                      <div className="row">
                        <div className="col-md-3 form-group">
                          <label htmlFor="level">Platform</label>
                          <select
                            name="level"
                            id="level"
                            className="form-control"
                          >
                            <option value>---</option>
                            <option value={1}>1 </option>
                            <option value={2}>2 </option>
                            <option value={3}>3</option>
                            <option value={4}>4 </option>
                            <option value={5}>5</option>
                            <option value={6}>6 </option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10 </option>
                            <option value={11}>11 </option>
                            <option value={12}>12 </option>
                            <option value={13}>13 </option>
                            <option value={14}>14 </option>
                            <option value={15}>15 </option>
                            <option value={16}>16 </option>
                            <option value={17}>17 </option>
                            <option value={18}>18 </option>
                            <option value={19}>19 </option>
                            <option value={20}>20 </option>
                          </select>
                        </div>
                        <div className="col-md-3 form-group">
                          <label htmlFor="matrix">Program</label>
                          <select
                            name="matrix"
                            id="matrix"
                            className="form-control"
                          >
                            <option value>---</option>
                            <option value={1}>x3 </option>
                            <option value={2}>x4 </option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="search">
                              Search by ID | Wallet
                            </label>
                            <input
                              type="text"
                              name="search"
                              defaultValue
                              placeholder="Enter..."
                              id="search"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="user" defaultValue={21} />
                      <input type="hidden" name="sid" defaultValue />
                      <button type="submit" className="btn btn-primary">
                        Apply{" "}
                      </button>
                      <a href="/partners/" className="btn btn-secondary">
                        Reset filter{" "}
                      </a>
                    </form>
                    <div className="row bg-black_transparent partners-group">
                      <div className="col-6">
                        <div className="partners-group__tip">
                          <div className="row">
                            <div className="col-8">Clicks:</div>
                            <div className="col-4">0</div>
                          </div>
                          <div className="row">
                            <div className="col-8">
                              Number of registrations:
                            </div>
                            <div className="col-4">2</div>
                          </div>
                          <div className="row">
                            <div className="col-8">
                              Registrations for the week:
                            </div>
                            <div className="col-4">0</div>
                          </div>
                          <div className="row">
                            <div className="col-8">
                              Registrations for 24 hours:
                            </div>
                            <div className="col-4">0</div>
                          </div>
                          <div className="row">
                            <div className="col-8">
                              Partners in the structure:
                            </div>
                            <div className="col-4">6</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-right"></div>
                    </div>
                    <div className="card table_mini_container">
                      <table className="table_mini tablePartners ">
                        <thead>
                          <tr>
                            <td style={{}}>ID</td>
                            <td style={{}}>Registration date</td>
                            <td style={{}}>Wallet </td>
                            {/* <td style={{}}>x3</td> */}
                            <td style={{}}>x4</td>
                            <td style={{}}>Profit</td>
                            <td style={{}}>Partners</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className>
                            <td title>
                              <a href="/" target="_blank">
                                58{" "}
                              </a>
                            </td>
                            <td>2020.02.01 00:14 </td>
                            <td className="wallet">
                              <div>
                                <a title="0x8c1a7e7e110da493fec00e6c807956c429c14e1d" href='/' target="_blank">
                                  <FaExternalLinkAlt style={{margin:'0 5px'}}/>
                                  0x8c1...14e1d{" "}
                                </a>
                              </div>
                            </td>
                            {/* <td title="ETH: 0.000 | USD: 0">
                              <a href="/page/x3/1/58/" target="_blank">
                                1{" "}
                              </a>
                            </td> */}
                            <td title="ETH: 0.000 | USD: 0">
                              <a href="/page/x2/1/58/" target="_blank">
                                1{" "}
                              </a>
                            </td>
                            <td>
                              <i
                                className="fab fa-ethereum"
                                style={{ fontWeight: 100 }}
                              />
                              0.000{" "}
                              <span style={{ fontSize: "8.7pt" }}>/ $0</span>
                            </td>
                            <td>
                              {/* <img
                                src="/img/partners_light.svg"
                                alt
                                width="18px"
                              /> */}
                              <FaUserAlt/>

                              &nbsp;0{" "}
                            </td>
                          </tr>
                          <tr className>
                            <td title>
                              <a href="/" target="_blank">
                                23{" "}
                              </a>
                            </td>
                            <td>2020.01.31 22:54 </td>
                            <td className="wallet">
                              <div>
                                <a title="0x8c1a7e7e110da493fec00e6c807956c429c14e1d" href='/' target="_blank">
                                <FaExternalLinkAlt style={{margin:'0 5px'}}/>
                                  0x8c1...14e1d{" "}
                                </a>
                              </div>
                            </td>
                            {/* <td title="ETH: 0.175 | USD: 40">
                              <a href="/page/x3/3/23/" target="_blank">
                                3{" "}
                              </a>
                            </td> */}
                            <td title="ETH: 0.175 | USD: 40">
                              <a href="/page/x2/3/23/" target="_blank">
                                3{" "}
                              </a>
                            </td>
                            <td>
                              <i
                                className="fab fa-ethereum"
                                style={{ fontWeight: 100 }}
                              />
                              0.35{" "}
                              <span style={{ fontSize: "8.7pt" }}>/ $80</span>
                            </td>
                            <td>
                              {/* <img
                                src="/img/partners_light.svg"
                                alt
                                width="18px"
                              /> */}
                              <FaUserAlt/>
                              &nbsp;1{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination_wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
          <PrivateSidenav />
        </div>
      </div>
      <Footer/>
      </div>
    </React.Fragment>
  );
}
