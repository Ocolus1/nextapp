
import Link  from "next/link";
import { FaBars } from "react-icons/fa";
import config from "../../config/index";

// import ReactFlagsSelect from "react-flags-select";
// import "react-flags-select/css/react-flags-select.css";



let Header = ({ history }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars size={30} />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul
              className="navbar-nav ml-md-auto d-md-flex"
              style={{ margin: "0 40px" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href={config.routes.login}
                >
                  <a>
                  Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href={config.routes.signup}
                >
                  Register
                </Link>
              </li>
            </ul>
            <div className="form-group p-1">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
