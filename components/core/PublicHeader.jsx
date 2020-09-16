
import React from "react";
import {Link} from "next";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import config from "../../config";

class PublicHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out",
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: "",
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" id="navbar-brand" tag={Link}>
              <h1 className="md-mt-4 text-dark">DollarFuture</h1>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler mt-4"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                   
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                {/* <Link
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <a>
                    <i className="fab fa-twitter" />
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </a>
                </Link> */}
              </NavItem>
              <NavItem className="p-0">
                {/* <Link
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <a>
                    <i className="fab fa-facebook-square" />
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </a>
                </Link> */}
              </NavItem>
              <NavItem className="p-0">
                {/* <Link
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <a>
                    <i className="fab fa-instagram" />
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </a>
                </Link> */}
              </NavItem>
              <NavItem className="mt-3">
                <Row>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="info">
                <a href={config.routes.login}>
                <i className="tim-icons icon-spaceship" /> Login
                </a>
                </Button>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="success"
                  >
                    <a href={config.routes.signup}>
                  <i className="tim-icons icon-spaceship" /> Register
                    </a>
                </Button>
                </Row>
              </NavItem>
              {/* <NavItem>
                <Link tag={Link} to="/">
                  Back to Kit
                </Link>
              </NavItem>
              <NavItem>
                <Link href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                  Have an issue?
                </Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PublicHeader;
