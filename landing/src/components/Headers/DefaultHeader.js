import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/pediatra-mae-bebe.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>

        <div className="content-center">
          <Container>
            <div className="content-center brand">
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/logo-sgcsmi.png")}
              ></img>
              <h1 className="h1-seo">SGCSMI.</h1>
              <h3>Sistema de Gestão de Centros de Saúde Materno Infantil</h3>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
