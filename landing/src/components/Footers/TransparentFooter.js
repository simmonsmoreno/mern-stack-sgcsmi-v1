/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
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
          © {new Date().getFullYear()}. Desenvolvido por{" "}
          <a
            href="https://www.facebook.com/thetrueHOOHAAA"
            target="_blank"
          >
            Simão Moreno
            </a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
