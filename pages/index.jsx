// import Header from "../components/core/Header";
// import Vision from '../components/landingPage/Vision'
// import Advantages from '../components/landingPage/Advantages'
// import Testimonial from '../components/landingPage/Testimonial'
// import Services from "../components/landingPage/Services";
// import Overview from "../components/landingPage/Overview";
// import MultiCarosual from "../components/landingPage/MultiCarousel";
// import Pricing from "../components/landingPage/Pricing";
// import FAQ from "../components/landingPage/FAQ";
// import Footer from "../components/core/Footer";
// // import "bootstrap/js/dist/carousel";

// export default function index() {

//   return (
//     <div >
//       <Header />
//       <Vision />
//       <Advantages  />
//       <Testimonial />
//       <Services/>
//       <Overview/>
//       <MultiCarosual/>
//       <Pricing/>
//       <FAQ/>
//       <Footer/>

//     </div>
//   );
// }

import React from "react";
// react plugin used to create charts
// import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
  , Modal, ModalHeader, ModalBody, ModalFooter 
} from "reactstrap";

// core components
import PublicHeader from "../components/core/PublicHeader";
import MainFooter from "../components/core/MainFooter";
import MultiCarosual from "../components/landingPage/MultiCarousel";
import bigChartData from "../variable/charts.js";
import FAQ from "../components/landingPage/FAQ";
import Overview from "../components/landingPage/Overview";
import Footer from "../components/core/Footer";

class index extends React.Component {
  state={modal:false}
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal }, () => {
      if(!this.state.modal){
        var iframe = document.getElementById("marketingVideo");
      iframe.setAttribute("src", iframe.src);
      }
    });
  };
  render() {
    return (
      <>
        <PublicHeader />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../public/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../public/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../public/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../public/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../public/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../public/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We keep your coin <br />
                    <span className="text-white">secured</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      {/* <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button> */}
                      <div className="free-trial-btn m-0">
                        {/* Button trigger modal */}
                        <a
                          href="site.com/pdf"
                          target="_blank"
                          className="btn btn-secondary mb-2"
                          style={{
                            borderRadius: "12px",
                            backgroundColor: "grey",
                            color: "white",
                          }}
                        >
                          Download PDF
                        </a>
                        <br />
                        <a
                          type="button"
                          className="btn "
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={()=>this.toggle()}
                        >
                          Marketing video
                        </a>
                        <br />
                      </div>
                      <div>
                        {/* Modal */}
                        <Modal
                          isOpen={this.state.modal}
                          toggle={this.toggle}
                        >
                          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                          <ModalBody>
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
                          </ModalBody>
                          <ModalFooter>
                            {/* <Button color="primary" onClick={this.toggle}>
                              Do Something
                            </Button>{" "} */}
                            {/* <Button color="secondary" onClick={this.toggle}>
                              Cancel
                            </Button> */}
                          </ModalFooter>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../public/images/test4.png")}
                  />
                </Col> */}
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("../public/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-trophy text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className="card-category">Awards</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className="card-category">Commits</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className="card-category">Presents</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-credit-card text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className="card-category">Forks</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5 text-white">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p className="silver">
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p className="silver">
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("../public/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../public/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("../public/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Your best benefit</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Low Commission</h4>
                        <hr className="line-primary" />
                        <p>
                          Divide details about your work into parts. Write a few
                          lines about each one. A paragraph describing a feature
                          will.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">High Incomes</h4>
                        <hr className="line-warning" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing feature will be a feature.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Verified People</h4>
                        <hr className="line-success" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing be enough.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("../public/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../public/images/hero-img.png")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3 className="silver">Awesome features</h3>
                    <p className="silver">
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("../public/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../public/img/path2.png")}
            />
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Total Investments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={bigChartData.data}
                      options={bigChartData.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </section> */}
          <section className="section section-lg section-coins mt-0">
            <img
              alt="..."
              className="path"
              src={require("../public/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    The services{" "}
                    <span className="text-info">that we provide</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Overview />
              </Row>
            </Container>
          </section>
          <MultiCarosual />
          <FAQ />
          <Footer />
        </div>
      </>
    );
  }
}

export default index;
