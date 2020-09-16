import React from "react";
import { FaTelegram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

// import React from 'react'

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <ul className="footer_nav" style={{paddingLeft:0}}>
          <li
              id="menu-item-138"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138"
            >
              <a href="https://etherscan.io/txs?a=0x5acc84a3e955Bdd76467d3348077d003f00fFB97" target="_blank" rel="noopener noreferrer">Smart Contract:  <br/> 0x5acc84a3e955Bdd76467d3348077d003f00fFB97</a>
            </li><br/>
            <li
              id="menu-item-140"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140"
            >
              <a href="https://t.me/abc" target="_blank" rel="noopener noreferrer"><FaTelegram size={30}/></a>
            </li>
            <li
              id="menu-item-139"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
            >
              <a href="https://www.youtube.com/channel/UCIw_BhcSHA0Gf-z9PAPTSRQ" target="_blank" rel="noopener noreferrer"><FaYoutube size={30}/></a>
            </li>
            <li
              id="menu-item-139"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
            >
              <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30}/></a>
            </li>
            <li
              id="menu-item-139"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"
            >
              <a href="www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30}/></a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </section>
  );
}
