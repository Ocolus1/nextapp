import React from "react";
import Link from "next/link";

// import React from 'react'

export default function AboveMain() {
    return (
        <React.Fragment>
            <section className="">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-8">
                            <div className="logo">
                                <Link href="/" className="navbar-brand">
                                    <img src={require('../../public/images/dlf_pinks.png')} className="" width={400}/>
                                    {/* <h4 className="logo-text ">Dollar Future</h4> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5 pt-2">
                            <div className="">
                                <div className="">
                                    <div className="row ">
                                        <h5 className="col-4 text-right pink">384,141</h5>
                                        <div className="col-8 stat-title text-white">
                                            ALL PARTICIPANTS
                                        </div>
                                    </div>
                                    <div className="row m-1">
                                        <h5 className="col-4 text-right  yellow">+14170 </h5>
                                        <div className="col-8 stat-title text-white">
                                            JOINED IN 24 HOURS
                                        </div>
                                    </div>
                                    <div className="row m-1">
                                        <h5 className="col-4 text-right  darkGreen">261,539</h5>
                                        <div className="col-8 stat-title text-white ">
                                            PARTICIPANTS HAVE EARNED TRX
                                        </div>
                                    </div>
                                    <div className="row m-1">
                                        <h5 className="col-4 text-right purple">57,612,340</h5>
                                        <div className="col-8 stat-title text-white">
                                            PARTICIPANTS HAVE EARNED USD
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
