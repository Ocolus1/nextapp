import React, { useState, useEffect } from "react";
import Header from "../../components/core/Header";
import Footer from "../../components/core/Footer";
import Link from "next/link";
import config from "../../config/index";
import PublicHeader from "../../components/core/PublicHeader";
import my from "../../public/css/mycss.module.css"


export default function login({ history }) {
  const [publicAddress, setPublicAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {

    const connectAppWithMetaMask = async () => {
      if (window.ethereum) {
        window.web3 = new window.Web3(window.web3.currentProvider);
        await window.ethereum.enable();
        return true;
      }
      alert('non etherem browser')
      return false;
    };
    const loadBlockChainData = async () => {
      const web3 = window.web3
      const accounts = web3.eth.accounts
      debugger;
    }

    // if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    connectAppWithMetaMask();
    loadBlockChainData()
    // }
  }, []);




  const submitSigninForm = (event) => {
    setError("");
    event.preventDefault();
    authenticate();
    window.location.href = config.routes.main

  };

  const authenticate = async () => {
    if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
      console.log(window.web3.currentProvider);
      // web3js = new Web3(window.web3.currentProvider);
      if (window.web3.eth && window.web3.eth.coinbase) {
        const publicAddress = window.web3.eth.coinbase.toLowerCase();
        setPublicAddress(publicAddress);
        console.log(publicAddress);
        const eth = web3.eth
        const token = web3.eth.Contract(config.abi, config.authContractAddress);

        // const { data } = await authService.login({ publicAddress });
        // console.log(data);
        // if (data && data.data) {
        //   const signedMsg = await this.handleSignMessage(data.data[0]);
        //   console.log("signedMsg", signedMsg);
        //   const { data: signedUser } = await authService.authenticate(
        //     signedMsg
        //   );
        //   console.log(signedUser);
        //   localStorage.setItem(config.keys.tokenKey, signedUser.data.token);
        //   localStorage.setItem(
        //     config.keys.userKey,
        //     JSON.stringify(signedUser.data.user)
        //   );
        //   this.props.history.push(config.routes.main);
        //   if (!data.success) {
        //     this.setState({ error: data.message });
        //   }
        // } else {
        //   this.setState({
        //     error:
        //       data && data.message
        //         ? data.message
        //         : "The server may be currently down",
        //   });
        // }
      } else {
        connectAppWithMetaMask();
      }
    }
  };
  return (
    <React.Fragment>
      <PublicHeader />
      {/* <div className="login-page section"> */}
      <div className={my.loginPage.section}>
        <div className="container-fluid py-5 mt-20">
          <div className="row" style={{ margin: "80px 0 0 0" }}>
            <div className="col-md-12">
              {/* start */}

              <div className={[my.wrapper, my.fadeInDown].join(" ")} >
                <div id={my.formContent}>
                <h2 className={my.h_2}>Login</h2>

                  <div className={[my.fadeIn, my.first].join(" ")}>
                    <img src={require('../../public/images/dlf_logo.png')} id={my.icon} alt="User Icon" />
                  </div>

                  <form>
                    <input type="publicAddress"
                      onChange={(e) => setPublicAddress(e.currentTarget.value)}
                      id={my.login} className={[my.fadeIn, my.second].join(" ")} name="login" value={publicAddress} readOnly />
                    <input type="button" onClick={submitSigninForm} className={[my.fadeIn, my.fourth].join(" ")} id={my.btnLogin} value="Authorise" />
                  </form>

                  <div id={my.formFooter}>
                    <Link href={config.routes.signup}>
                      <a className={my.underlineHover}>Register now</a>
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
