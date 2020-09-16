import React from 'react'

import icon1 from '../../public/images/client1.png' 
import icon2 from '../../public/images/client1.png' 
import icon3 from '../../public/images/client1.png' 

export default function Testimonial() {
    return (
        <section className="testimonial">
                    <div className="container" >
                        <div className="margin-adjustment">
                            <h2 className="heading"><span>Simple Integration for powerful transaction</span> </h2>
                        </div>
        
                        <div className="promotion-info row ">
                            <div className="col-md-4">
                                <div className="icon">
                                    <img src={icon1} alt="" width="100" height="100" />
                                </div>
                                <div className="testimonial-title">
                                    <h2>IMPROVE YOUR OVERALL OPERATION</h2>
                                </div>
                                <div className="dashed-line" style={{ border: "1px dashed #DDDDDD", margin: "20px 0" }}>
        
                                </div>
                                <div className="detail">
                                    <p> Gain high-level management control and rapid feedback through Ababa’s complex analysis of the agent-customer conversation processes. Ababa is the answer to agent compliance, quality assurance and optimized customer interaction.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="icon">
                                    <img src={icon2} alt="" width="100" height="100" />
                                </div>
                                <div className="testimonial-title">
                                    <h2>SPEECH ANALYTICS LEADER</h2>
                                </div>
                                <div className="dashed-line" style={{ border: "1px dashed #DDDDDD", margin: "20px 0" }}>
        
                                </div>
                                <div className="detail">
                                    <p> Ababa's Speech Analytics exceeds or meets any AI software on the market. We make it easy to analyze, tag, learn and benefit from audio content insights, saving you time and increasing your bottom line.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="icon">
                                    <img src={icon3} alt="" width="100" height="100" />
                                </div>
                                <div className="testimonial-title">
                                    <h2>MANAGE WHAT MATTERS MOST</h2>
                                </div>
                                <div className="dashed-line" style={{ border: "1px dashed #DDDDDD", margin: "20px 0" }}>
        
                                </div>
                                <div className="detail">
                                    <p> Uncover keywords and tag events in conversations, track conversion rates, and pinpoint missed opportunities with Ababa's speech algorithm, Natural Language Programming (NLP), and Deep Neural Networks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container-content embed" >
                        <div className="banner-title">
                            <h3 className="embed-text">Embed communications with any combination of</h3>
                        </div>
                        <div className="container">
                            <div className="row center">
                                <div className="col-md-4">
                                    <img src={eicon3} alt="emdeb-icon" /><br />
                                    <h2> Analytics</h2>
                                </div>
                                <div className="col-md-4">
                                    <img src={eicon2} alt="emdeb-icon" /><br />
                                    <h2> keywords</h2>
                                </div>
                                <div className="col-md-4">
                                    <img src={eicon1} alt="emdeb-icon" /><br />
                                    <h2> Voice</h2>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>
    )
}
