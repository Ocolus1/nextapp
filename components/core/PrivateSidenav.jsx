import React from "react";
import { FaEthereum, FaUserAlt } from "react-icons/fa";
// import AppStats from "./AppStats";

export default function PrivateSidenav() {
  return (
    <div className="col-lg-3 mb-4">
      <div className="border-gradient section-left rounded-lg myshadow">
        <div className="border-gradient_content-2 rounded-lg status-panel">
          <div className="status-panel_id">
            <a
              href="#a"
              className="status-panel__user-id text-white"
              data-trigger_value_siblings=".trigger_value__user-id"
              data-trigger_value="***|12"
            >
              ID <span title="Show/Hide">12</span>
            </a>
            <div className="status-panel_partners__top">
              <span>2</span>
              <FaUserAlt size={16} />
              {/* <img src="/img/partners_light.svg" alt /> */}
            </div>
          </div>
          <div className="status-panel__logo">
          <img src={require('../../public/images/dlf_white.png')}  style={{height:50,width:70,margin:'0 10px'}}  />
          <img src={require('../../public/images/tron_no.png')}  style={{height:50,width:50,margin:'20px 20px 0 20px'}}  />
            {/* <img src={require('../../public/images/logo1.png')} style={{height:50,width:50,margin:'0 20px'}}  alt=""/> */}
            {/* <FaEthereum size={70} style={{margin:'15px 10px'}} /> */}
          </div>
          <div className="status-panel_money">
            <div className="status-panel_money_total__dollars">50 USD </div>
            <div className="status-panel_money_total__eth" title="(0.425)">
              0.425 TRX
            </div>
          </div>
          
          <div className="status-panel_money">
            <div className="border-gradient">
              <div className="border-gradient_content-2">
                <div className="logotypeX4">
                  <a href="#a">
                    {/* <img src="/img/x4.svg" alt /> */}
                    <h4 className="text-white">DLF x3</h4>
                  </a>
                </div>
                <div className="status-panel_money__dollars">$41 </div>
                <div className="status-panel_money__eth" title="(0.175)">
                  0.175 TRX
                </div>
              </div>
            </div>
          </div>
          <div className="status-panel_money">
            <div className="border-gradient">
              <div className="border-gradient_content-2">
                <div className="logotypeX4">
                  <a href="#a">
                    {/* <img src="/img/x4.svg" alt /> */}
                    <h4>DLF x4</h4>
                  </a>
                </div>
                <div className="status-panel_money__dollars">$41 </div>
                <div className="status-panel_money__eth" title="(0.175)">
                  0.175 TRX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <br/> */}

      <div className="section-right">
        <div className="border-gradient rounded-lg  myshadow">
          <div className="border-gradient_content-2 rounded-lg status-panel_partners pb-5">
            <div className="status-panel_partners__subject text-white">
              Affiliate link{" "}
              <div className="status-panel_partners__count ">
                <span>2</span>
                <FaUserAlt />
                {/* <img src="/img/partners_light.svg" alt /> */}
              </div>
            </div>
            <div
              className="area-text status-panel_partners__link trigger_value__user-refkey"
              title=""
            >
              <input
                type="text"
                defaultValue="https://dollarfutre.io/"
                id="refLink"
                onclick="document.getElementById('refLink').select();"
                readOnly
              />
            </div>
            <div
              className="status-panel_partners_copy"
              onclick="copyText('https://dollarfuture.io/');"
            >
              Copy{" "}
            </div>
          </div>
        </div>
        {/* <br/> */}
        {/* <div className="border-gradient">
          <div className="border-gradient_content-2 status-panel_partners pb-5">
            <div className="status-panel_partners__subject text-white">
            TRON wallet link
            </div>
            <div
              className="area-text status-panel_partners__link trigger_value__user-refkey"
              title=""
            >
              <input
                type="text"
                defaultValue="https://dollarfuture.io/"
                id="refLink"
                onclick="document.getElementById('refLink').select();"
                readOnly
              />
            </div>
            <div
              className="status-panel_partners_copy"
              onclick="copyText('https://dollarfuture.io/');"
            >
              Copy{" "}
            </div>
          </div>
        </div> */}
        <div className="border-gradient mt-5 rounded-lg myshadow">
          <div className="border-gradient_content-2 rounded-lg status-panel_wallets pb-4">
            <div className="status-panel_wallets__subject text-white">
              Your Tron wallet{" "}
            </div>
            <div className="status-panel_wallet text-white">0x43e7c...6c76122 </div>
            <a
              href="https://etherscan.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="status-panel_wallets__btn"
              style={{ left: 6 }}
            >
              TO TRONSCAN
            </a>
            <div
              className="status-panel_wallets__btn"
              style={{ right: 6 }}
              onclick={() =>
                window.copyText("0x43e7c6badc7186757e905a59a7f14a1066c76122")
              }
            >
              COPY{" "}
            </div>
          </div>
        </div>
        <div className="border-gradient mt-5 rounded-lg myshadow">
          <div className="border-gradient_content-2 rounded-lg status-panel_wallets pb-4">
            <div className="status-panel_wallets__subject text-white">
              Smart Contract address{" "}
            </div>
            <div className="status-panel_wallet text-white">0x5acc8...00fFB97 </div>
            <a
              href="https://etherscan.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="status-panel_wallets__btn"
              style={{ left: 6 }}
            >
              TO TRONSCAN
            </a>
            <div
              className="status-panel_wallets__btn"
              style={{ right: 6 }}
              onclick={() =>
                window.copyText("0x43e7c6badc7186757e905a59a7f14a1066c76122")
              }
            >
              COPY{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
