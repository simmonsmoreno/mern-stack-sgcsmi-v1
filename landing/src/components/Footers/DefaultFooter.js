/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="#">
                  Engenharia de Software
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Desenvolvido por{" "}
            <a
              href="https://www.facebook.com/thetrueHOOHAAA"
              target="_blank"
            >
              Simão Moreno
            </a>
            {" "}| Docente: <span className="text-danger"><b>DosReisCastelo</b></span>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
