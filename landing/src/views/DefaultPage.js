import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/DefaultNavbar";
import Header from "components/Headers/DefaultHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  React.useEffect(() => {
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
        <Header />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Descrição do projeto</h2>
                <h5 className="description">
                  Este projeto surgiu no âmbito da disciplina de Engenharia de Software, ano lectivo 2019/2020.
                  O Objetivo reune-se na concepção de um software usando as metodologias e técnicas abordadas nas aulas.
                  Este sistema tem como objetivo resolver o problema de cadernetas disponibilizadas nos Centros de Saúde do país, onde as criancas recém-nascidos recebem consultas de avaliação periódicos, e todos os dados destas consultas são registados na caderneta. Mas também, para gerir a questão da marcação de consultas, ver filas de esperas e para os pais e encarregados das criancas acompanharem de perto com gráficos e dados sobre o crescimento dos seus de uma forma organizada e chamativa, no conforto da sua casa.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/amamentacao.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Criancas são as flores do amanhâ" <br></br>
                      <br></br>
                      <small>-Amilcar Cabral</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/banco-leite.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/gravidas.jpg") + ")",
                    }}
                  ></div>
                  <h3>
                    A criança deve ter seu crescimento e desenvolvimento acompanhados regularmente pela equipe da Unidade Básica de Saúde mais próxima de onde mora.
                  </h3>
                  <p>
                    Para cuidar da criança, educar e promover sua saúde e seu desenvolvimento integral, é importante a parceria entre os pais, a comunidade e os profissionais de saúde, de assistência social e de educação.
                  </p>

                  <p>
                    É importante estimular desde cedo o desenvolvimento da criança para que ela adquira autoconfiança, autoestima e desenvolva capacidade de relacionar-se bem com outras crianças, com a família e com a comunidade. Desse modo, terá maior possibilidade de tornar-se um adulto bem adaptado socialmente.
                  </p>
                  <p>
                    Vigiar o desenvolvimento da criança nos primeiros anos de vida é de fundamental importância, pois é nesta etapa da vida extrauterina que o tecido nervoso mais cresce e amadurece, estando, portanto, mais sujeito aos agravos. Devido a sua grande plasticidade, é também nesta época que a criança melhor responde aos estímulos que recebe do meio ambiente e às intervenções, quando necessárias.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
