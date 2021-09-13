import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    Container,
    Row,
    Col
} from "reactstrap";

class FotografiaDiv extends Component {


    render() {

        const { crianca } = this.props

        return (

            <div className="section section-team text-center">
                <Container>
                    <h2 className="title">Sua filha:</h2>
                    <div className="team">
                        <Row>
                            <Col md="12">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        // src={require("assets/img/avatar.jpg")}
                                        src={crianca.url}
                                    ></img>
                                    {/* <h4 className="title">Romina Hadid</h4> */}
                                    <h4 className="title">{crianca.fullname}</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        )
    }
}

FotografiaDiv.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(FotografiaDiv);
