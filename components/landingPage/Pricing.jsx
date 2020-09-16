import React from "react";
import Link from "next/link";
import contactIcon from "../../public/images/contact_icon.png";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="row">
          <div className="col-md-12 center ">
            <h1 className="heading mt-20 mb-30">Pricing and Features</h1>
            <div className="pricing-paragraph">
              <p className="">
                Usage is billed at a $0.02/ / min base rate
                <br />
                $0.002 / per min per indicator that is enabled
                <br />
                Free Trial includes 100 free calls with all indicators enabled
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="pricing-table">
          <div className="table-title">
            <h3>PRICING</h3>
          </div>
          <div className="table-price">
            <h3>$0.02 / min + $0.002 / min per indicator</h3>
          </div>
          <div>
            <table className="table-list table table-striped">
              <tbody>
                <tr className="list-group-item">Transcription</tr>
                <tr className="list-group-item">Keyword Extraction</tr>
                <tr className="list-group-item">Search Engine</tr>
                <tr className="list-group-item">Keyword Lists</tr>
                <tr className="list-group-item">
                  Artificial Intelligence Indicator Scoring
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="contact-us-btn">
        {/* <Link href="/contact-us">
          <React.Fragment>
            <img src={contactIcon} alt="icon" />
            Tell me more
          </React.Fragment>
        </Link> */}
      </div>
      <p className="subhead">
        {/* *Volume discounts available for +2,000,000 min/month */}
      </p>
      {/* </div> */}
    </section>
  );
};
export default Pricing;
