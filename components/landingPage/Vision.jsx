import React from 'react'
import Link from 'next/link'

export default function Vision() {
    const handleIframe = () => {
        var iframe = document.getElementById("marketingVideo");
        iframe.setAttribute("src", iframe.src);
      };
    return (
        <section className="vision ">
        <div className="container-content">
          <div className="banner">
            <div className="banner-text">
              <h1>
                <b>You need to hear it all.</b>
                <br />
                <b>We listen for you.</b>
              </h1>
              <h3>
                <b>Unlock your largest source of revenue with our software.</b>
                <br />
                <br />
                <p style={{fontSize: "12px" }}>
                  Why do we use it? It is a long established fact that a reader
                  will be distracted <br/>by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a <br/>more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here',
                </p>
              </h3>
            </div>
            <div className="free-trial-btn ">{/* Button trigger modal */}
              <a
                href="site.com/pdf"
                target='_blank'
                className="btn btn-secondary mb-2"
                style={{ borderRadius: "12px",backgroundColor:'grey',color:"white"}}
              >
                Download PDF
              </a><br/>
              <a
                type="button"
                className="btn "
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Marketing video
              </a>
              <br />
            </div>
            <div>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5> */}
                      <button
                        onClick={handleIframe}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div
                        data-video_lang="en"
                        className="video-container active"
                      >
                        <iframe
                          id="marketingVideo"
                          title="marketing-video"
                          width="100%"
                          height="300px"
                          src="https://www.youtube.com/embed/m0NzYwFfGH4"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </section>
    )
}
