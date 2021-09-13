import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// reactstrap components
import { Alert, Container, Row } from "reactstrap";

// core components
import Navbar from "components/Navbars/DefaultNavbar";
import Header from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import PesoChart from "components/LineChart/Peso";
import AltChart from "components/LineChart/Comprimento";
import PcefChart from "components/LineChart/Pcefalico";

import IdentificacaoDiv from './identificacaoDiv'
import FotografiaDiv from './FotografiaDiv'
import IrmaosDiv from './IrmaosDiv'
import TableProxConsulta from './TableProxConsulta'
import PeriodoNeonatal from './PeriodoNeonatal'
import TableVacinacao from './TableVacinacao'
import TableCrescimento from './TableCrescimento'

import { getCrianca } from "store/actions";


function LandingPage(props) {

  props.getCrianca(props.user.uid)

  useEffect(() => {

    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* <Alert md={4} color="success" isOpen={msg !== ''} >
          {msg}
        </Alert> */}
        <Header />
        <div className="section section-about-us">
          <Container>

            <FotografiaDiv />
            <IdentificacaoDiv />
            {/* <IrmaosDiv /> */}
            <TableProxConsulta />
            <PeriodoNeonatal />
            <TableVacinacao />
            <TableCrescimento />
            <Row>
              <PesoChart />
              <AltChart />
              <PcefChart />
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

LandingPage.propTypes = {
  getCrianca: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.reducer.isAuthenticated,
  user: state.reducer.user,
  msg: state.reducer.msg,
});

export default connect(
  mapStateToProps,
  { getCrianca }
)(LandingPage);