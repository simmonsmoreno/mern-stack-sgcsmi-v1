import { useLocation, Link } from 'react-router-dom'
import React, { useState } from "react";
import Datetime from 'react-datetime'

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Form,
} from "reactstrap";

require('moment/locale/pt');

function IndexNavbar() {

  const [showModal, setModal] = useState(false);
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  var yesterday = Datetime.moment().subtract(1, 'day');

  var valid = function (current) {
    return current.isAfter(yesterday) && (current.day() !== 0 && current.day() !== 6)
  };


  function handleSolicitar(e) {
    e.preventDefault();

    const data = new Date(date).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' }) 
    
    console.log(data)

  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  let location = useLocation();

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" >
              SSGCSMI
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Sistema de Gestão de Centros de Saúde Materno Infantil
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {
                location.pathname === '/login-page' &&
                <NavItem>
                  <NavLink href="/">
                    <i className="fas fa-home"></i> {" "}
                    Home
                  </NavLink>
                </NavItem>
              }{
                location.pathname === '/' &&
                <NavItem>
                  <NavLink href="/login-page">
                    <i className="fas fa-sign-in-alt"></i> {" "}
                    Login
                  </NavLink>
                </NavItem>
              }{
                location.pathname === '/landing-page' &&
                <>

                  <NavItem>
                    <Button
                      className="nav-link btn-neutral"
                      color="info"
                      id="upgrade-to-pro"
                      onClick={() => setModal(true)}>
                      <i className="far fa-calendar-plus mr-1"></i>
                      <p>Solicitar Consulta</p>
                    </Button>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/">
                      <i className="fas fa-bell"></i>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/">
                      <i className="fas fa-comments"></i>
                    </NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      caret
                      color="default"
                      href="#pablo"
                      nav
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-user-circle"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/index" tag={Link}>
                        Editar dados pessoais
                      </DropdownItem>
                      <DropdownItem to="/index" tag={Link}>
                        Alterar senha
                      </DropdownItem>
                      <DropdownItem to="/index" tag={Link}>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <NavItem>
                    <NavLink href="/">
                      <i className="fas fa-sign-out-alt"></i> {" "} Sair
                    </NavLink>
                  </NavItem>

                </>
              }
            </Nav>

            <Modal isOpen={showModal} toggle={() => setModal(false)}>
              <div className="modal-header justify-content-center">
                <button className="close" type="button" onClick={() => setModal(false)}>
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">Solicitar Consulta</h4>
              </div>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Datetime
                      inputProps={{ placeholder: "Data e Hora" }}
                      value={date}
                      onChange={newDate => setDate(newDate._d)}
                      locale="pt"
                      isValidDate={valid} />
                  </FormGroup>
                </Form>
              </ModalBody>
              <div className="modal-footer">
                <Button color="success" onClick={handleSolicitar}>Solicitar</Button>
                <Button
                  color="danger"
                  type="button"
                  onClick={() => setModal(false)}>
                  Fechar
                  </Button>
              </div>
            </Modal>


          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
