import React from "react";
import Link from "next/link";
// import ReactFlagsSelect from "react-flags-select";
// import "react-flags-select/css/react-flags-select.css";
// import auth from "../../services/auth";

import { FaBars, FaSignOutAlt, FaCross, FaTimes } from "react-icons/fa";
import config from "../../config/index";

const PrivateHeader = () => {
  return (
    <div className="mynav" >
      <nav className="navbar text-white navbar-expand-md fixed" id=''
        style={{ backgroundColor: "#191B2A", borderBottom: "#191B2A" }}>
        <div className="container" >
        <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars size={30} />
          </button>
          
          <div className="collapse navbar-collapse" 
          id="navbarText" style={{ backgroundColor: "#191B2A", borderBottom: "#191B2A" }}>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <FaTimes/>
          </button>
            <ul className="navbar-nav ml-md-auto  d-md-flex" >
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mt-1"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  id="dropdown"
                >
                  <a>
                    <Link className="dropdown-item" href={config.routes.main}>
                      Dashboard
                    </Link>
                  </a>
                  <a>
                    <Link
                      className="dropdown-item"
                      href={config.routes.partners}
                    >
                      Partners
                    </Link>
                  </a>
                  <a>
                    <Link className="dropdown-item" href={config.routes.stats}>
                      <a>Statistics</a>
                    </Link>
                  </a>
                  <a>
                    <Link className="dropdown-item" href={config.routes.goals}>
                      Goals
                    </Link>
                  </a>
                </div>
              </li> */}
              <li className="nav-item dropdown dmenu">
                <a
                  className="text-white dropdown-toggle text-uppercase"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Office
                </a>
                <div className="dropdown-menu sm-menu text-uppercase" id="dropdown-container">
                  <Link className="dropdown-item" href={config.routes.main}>
                    <a className="dropdown-item ">Dashboard</a>
                  </Link>
                  <Link className="dropdown-item" href={config.routes.partners}>
                    <a className="dropdown-item">Partners</a>
                  </Link>
                  <Link className="dropdown-item" href={config.routes.stats}>
                    <a className="dropdown-item ">Statistics</a>
                  </Link>
                  <Link className="dropdown-item" href={config.routes.goals}>
                    <a className="dropdown-item " >Goals</a>
                  </Link>
                </div>
              </li>

              <li className="nav-item mt-">
                <Link className="nav-link" href={config.routes.guide}>
                  <a className="text-white text-uppercase" 
                  >Informations</a>
                </Link>
              </li>
              <li className="nav-item mt-" onClick={()=>{
                window.location.href='/'
              }}>
                <a className="text-white text-uppercase"
                //   onClick={() => auth.signout(history)}
                >
                  Logout
                  <FaSignOutAlt style={{ margin: "0 10px" }} />
                </a>
              </li>
              <li className="nav-item">
                <div class="form-group p-1">
                  {/* <ReactFlagsSelect
                  className="language"
                    countries={["US", "GB", "FR", "DE", "IT"]}
                    customLabels={{
                      US: "EN-US",
                      GB: "EN-GB",
                      FR: "FR",
                      DE: "DE",
                      IT: "IT",
                    }}
                    placeholder="Select Language"
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    defaultCountry="US"
                  /> */}
                </div>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default PrivateHeader;
