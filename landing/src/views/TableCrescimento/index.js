// import { format, register } from 'timeago.js';
import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    Table,
    Row,
    Col
} from "reactstrap";

class TableCrescimento extends Component {
    render() {

        const { crescimentos } = this.props.crianca
        let content

        if (crescimentos === undefined) {
            content = (
                <tbody>
                </tbody>
            )
        } else if (crescimentos.length) {
            content = (
                <tbody>
                    {
                        crescimentos.map(cresc => (
                            <tr key={cresc.id}>
                                <th scope="row">
                                    {new Date(cresc.created_at).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })}
                                </th>
                                <td></td>
                                <td>{cresc.peso} kg</td>
                                <td>{cresc.altura} cm</td>
                                <td>{cresc.perimcef} cm</td>
                            </tr>
                        ))
                    }

                </tbody>
            )
        }
        return (
            <Row>
                <Col className="ml-auto mr-auto text-center my-5">
                    <h2 className="title">
                        Avaliação do crescimento
                    </h2>

                    <Table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Idade</th>
                                <th>Peso (kg)</th>
                                <th>Altura (cm)</th>
                                <th>Cabeça (cm)</th>
                            </tr>
                        </thead>
                        {content}
                    </Table>
                </Col>
            </Row>
        )
    }
}

TableCrescimento.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(TableCrescimento);