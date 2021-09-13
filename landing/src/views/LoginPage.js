import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser } from "store/actions";

// reactstrap components
import {
    Alert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/DefaultNavbar";
import Footer from "components/Footers/TransparentFooter.js";

function LoginPage(props) {

    const [firstFocus, setFirstFocus] = useState(false);
    const [lastFocus, setLastFocus] = useState(false);
    const [cni, setCni] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMessage] = useState('');
    // const [alertVisible, setVisible] = useState(false);


    useEffect(() => {
        setMessage(props.msg)
        window.setTimeout(() => {
            setMessage('')
        }, 3000)
    }, [props.msg])


    useEffect(() => {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (props.isAuthenticated) {
            props.history.push("/landing-page");
        }
    }, [props.isAuthenticated])

    useEffect(() => {

        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    function handleLogin(e) {
        e.preventDefault();

        const userData = {
            cni: cni,
            password: password
        };

        props.loginUser(userData, props.history);
    }


    return (
        <>
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/coracao-pes-bebes.jpg") + ")",
                    }}
                >

                </div>
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                            <Card className="card-login card-plain">
                                <Form className="form" onSubmit={handleLogin}>
                                    <CardHeader className="text-center">
                                        <div>
                                            <img
                                                alt="..."
                                                src={require("assets/img/logo-sgcsmi.png")
                                                }
                                            ></img>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Alert color="danger" isOpen={msg !== ''} >
                                            Credenciais invalidos!
                                        </Alert>
                                        <Navbar />
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="far fa-id-card"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Numero de BI/CNI..."
                                                type="number"
                                                value={cni}
                                                onChange={(e) => setCni(e.target.value)}
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fas fa-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Password..."
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            block
                                            className="btn-round"
                                            color="info"
                                            size="lg"
                                            type="submit"
                                        >
                                            Entrar
                    </Button>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.reducer.isAuthenticated,
    msg: state.reducer.msg,
});

export default connect(
    mapStateToProps,
    { loginUser }
)(LoginPage);