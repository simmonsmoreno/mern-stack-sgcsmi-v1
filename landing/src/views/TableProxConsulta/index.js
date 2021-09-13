import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    Table,
    Row,
    Badge,
    Col
} from "reactstrap";

class TableProxConsulta extends Component {
    render() {

        const { consultas } = this.props.crianca
        let content1, content2

        if (consultas === undefined) {
            content1 = (
                <td></td>
            )

            content2 = (
                <td></td>
            )

        } else if (consultas.length) {

            const proxConsultas = consultas.filter(consulta => consulta.efetuado === 0)
            const consultasRealiz = consultas.filter(consulta => consulta.efetuado === 1)

            content1 = (
                <>
                    {
                        proxConsultas.map(consulta => (
                            <td key={consulta.id}>
                                {new Date(consulta.data).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })}
                            </td>
                        ))
                    }
                </>

            )

            content2 = (
                <>
                    {
                        consultasRealiz.map(consulta => (
                            <td key={consulta.id}>
                                {new Date(consulta.data).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })}
                            </td>
                        ))
                    }
                </>

            )
        }

        return (
            <Row>
                <Col className="ml-auto mr-auto text-center my-5">
                    <h2 className="title">
                        Consultas
                        <Badge color="info mr-3"> 3 </Badge>
                    </h2>

                    <Table>
                        <tbody>
                            <tr>
                                <th scope="row">Realizadas:</th>
                                {content2}
                            </tr>
                            <tr>
                                <th scope="row">Próximas: </th>
                                {content1}
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

TableProxConsulta.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(TableProxConsulta);