import React from "react";
import PrivateSidenav from "../components/core/PrivateSidenav";
import PrivateHeader from "../components/core/PrivateHeader";
import AboveMain from "../components/core/AboveMain";
import Footer from "../components/core/Footer";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Stats() {
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
                    <div className="border-gradient_content rounded">
                      <h3>Financial statistics</h3>
                      <br />
                      <h4
                        className="text-center"
                        style={{ cursor: "pointer" }}
                        data-spoiler=".filter-wrapper"
                      >
                        Filter{" "}
                      </h4>
                      <form
                        className="filter-wrapper"
                        method="get"
                        action="/page/stats/?user=21"
                        style={{ display: "block" }}
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="matrix">Program</label>
                            <select
                              name="matrix"
                              id="matrix"
                              className="form-control"
                            >
                              <option value>---</option>
                              <option value={1}>X3 </option>
                              <option value={2}>X4 </option>
                            </select>
                          </div>
                          <div className="col-md-6">
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
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="direction">Direction</label>
                            <select
                              name="direction"
                              id="direction"
                              className="form-control"
                            >
                              <option value>---</option>
                              <option value={0}>Incoming </option>
                              <option value={1}>Outgoing </option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="type">Type of transaction</label>
                            <select
                              name="type"
                              id="type"
                              className="form-control"
                            >
                              <option value>---</option>
                              <option value="newUserPlaceEvent">
                                Sold places{" "}
                              </option>
                              <option value="upgrageEvent">Upgrades </option>
                              <option value="reinvestEvent">Reinvest </option>
                              <option value="missedEthReceive">
                                Lost profits{" "}
                              </option>
                              <option value="leadingPartnerToUpline">
                                Overtaking{" "}
                              </option>
                              <option value="sentExtraEthDividends">
                                Gifts{" "}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group mt-2">
                              <label htmlFor="tx">Search by hash</label>
                              <input
                                type="text"
                                name="tx"
                                defaultValue
                                placeholder="Enter..."
                                id="tx"
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
                      <br />
                      <p>
                        The last transaction{" "}
                        <span
                          style={{ float: "right" }}
                          title="The number of transactions"
                        >
                          (Total: 25)
                      </span>
                      </p>
                      <div className="card table_mini_container">
                        <table className="table_mini tablePartners">
                          <thead>
                            <tr>
                              {/* <td style={{}}>Type </td> */}
                              <td style={{}}>ID</td>
                              <td style={{}}>Program</td>
                              <td style={{}}>Platform</td>
                              <td style={{}}>TRX</td>
                              <td style={{}} className="text-center">
                                Hash
                            </td>
                              <td style={{}} className="text-center">
                                Date
                            </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="?user=10">10 </a>
                              </td>
                              <td className="text-center">X4</td>
                              <td className="text-center">
                                <div title={2}>4 </div>
                              </td>
                              <td>
                                <span className="page-stats__profit">0.2 </span>
                              </td>
                              <td title="0x9f324f2f9d6e3032d246845ee0f775c42011290ebea88796d65c54821f4c1b52">
                                <a
                                  href="//etherscan.io/tx/0x9f324f2f9d6e3032d246845ee0f775c42011290ebea88796d65c54821f4c1b52"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="page-stats__external"
                                >
                                  <FaExternalLinkAlt
                                    style={{ margin: "0 5px" }}
                                  />
                                0x9f32...c1b52{" "}
                                </a>
                              </td>
                              <td>2020.02.08 11:43</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="?user=51">51 </a>
                              </td>
                              <td className="text-center">X4</td>
                              <td className="text-center">
                                <div title={1}>4 </div>
                              </td>
                              <td>
                                <span className="page-stats__profit">0.2 </span>
                              </td>
                              <td title="0x5066427103ec536385d5045bd722b379f0f2031f473323e064d07a78e6130a83">
                                <a
                                  href="//etherscan.io/tx/0x5066427103ec536385d5045bd722b379f0f2031f473323e064d07a78e6130a83"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="page-stats__external"
                                >
                                  {" "}
                                  <FaExternalLinkAlt
                                    style={{ margin: "0 5px" }}
                                  />
                                0x5066...30a83{" "}
                                </a>
                              </td>
                              <td>2020.02.01 11:04</td>
                            </tr>
                            <tr>
                              <td>
                                <a href="?user=10">10 </a>
                              </td>
                              <td className="text-center">X4</td>
                              <td className="text-center">
                                <div title={2}>4 </div>
                              </td>
                              <td>
                                <span className="page-stats__profit">0.2 </span>
                              </td>
                              <td title="0x9f324f2f9d6e3032d246845ee0f775c42011290ebea88796d65c54821f4c1b52">
                                <a
                                  href="//etherscan.io/tx/0x9f324f2f9d6e3032d246845ee0f775c42011290ebea88796d65c54821f4c1b52"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="page-stats__external"
                                >
                                  <FaExternalLinkAlt
                                    style={{ margin: "0 5px" }}
                                  />
                                0x9f32...c1b52{" "}
                                </a>
                              </td>
                              <td>2020.02.08 11:43</td>
                            </tr>

                            <tr>
                              <td>
                                <a href="?user=51">51 </a>
                              </td>
                              <td className="text-center">X3</td>
                              <td className="text-center">
                                <div title={1}>4 </div>
                              </td>
                              <td>
                                <span className="page-stats__profit">0.2 </span>
                              </td>
                              <td title="0xf73ce777920efa1d92469719828bbcd6623f29896e39d57fb563d3dd6f5bc7f3">
                                <a
                                  href="//etherscan.io/tx/0xf73ce777920efa1d92469719828bbcd6623f29896e39d57fb563d3dd6f5bc7f3"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="page-stats__external"
                                >
                                  <FaExternalLinkAlt
                                    style={{ margin: "0 5px" }}
                                  />
                                  <i className="fas fa-external-link-alt" />
                                0xf73c...bc7f3{" "}
                                </a>
                              </td>
                              <td>2020.02.01 03:49</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="pagination_wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PrivateSidenav />
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
