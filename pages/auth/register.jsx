import React, { useState, useEffect } from "react";
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import Link from "next/link";
import config from "../../config/index";
import PublicHeader from "../../components/core/PublicHeader";
import my from "../../public/css/mycss.module.css"

export default function register() {
  const [publicAddress, setPublicAddress] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const submitSignupForm = async (event) => {
    event.preventDefault();
    window.location.href = config.routes.main

    if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
      console.log(window.web3.currentProvider);
      // web3js = new Web3(window.web3.currentProvider);
      const publicAddress = window.web3.eth.coinbase.toLowerCase();
      setPublicAddress(publicAddress);
      console.log(publicAddress);
      //   const { data } = await authService.signup({ publicAddress });
      //   console.log(data);
      //   if (data.success) {
      //     this.setState({ successMsg: data.message });
      //   }
      //   if (!data.success) {
      //     this.setState({ error: data.message });
      //   }
    }
  };
  return (
    <React.Fragment>
      <PublicHeader />
      <div className={my.loginPage.section}>
        <div className="container-fluid py-5">
          <div className="row" style={{ margin: "80px 0 0 0" }}>
            <div className="col-md-12">
              {/* start */}
              {error && <ErrorAlert error={error} />}
              {successMsg && <SuccessAlert message={successMsg} />}
              <div className={[my.wrapper, my.fadeInDown].join(" ")} >
                <div id={my.formContent}>
                  <h2 className={my.h_2}>Register</h2>

                  <div className={[my.fadeIn, my.first].join(" ")}>
                    <img src={require('../../public/images/dlf_logo.png')} id={my.icon} alt="User Icon" />
                  </div>

                  <form>
                    <input type="text"
                      onChange={(e) => setPublicAddress(e.currentTarget.value)}
                      id={my.login} className={[my.fadeIn, my.second].join(" ")} name="login" required="" value={publicAddress} readOnly />
                    <input type="button" onClick={submitSignupForm} className={[my.fadeIn, my.fourth].join(" ")} id={my.btnLogin} value="Automatic registration" />
                  </form>

                  <div id={my.formFooter}>
                    <Link href={config.routes.login}>
                      <a className={my.underlineHover}>Login here.</a>
                    </Link>
                  </div>

                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
