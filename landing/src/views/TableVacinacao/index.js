import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    Table,
    Row,
    Badge,
    Col
} from "reactstrap";

class TableVacinacao extends Component {
    render() {

        const { vacinas } = this.props.crianca
        let content

        if (vacinas === undefined) {
            content = (
                <tbody></tbody>
            )

        } else if (vacinas.length) {

            content = (
                <tbody>
                    {
                        vacinas.map(vacina => (
                            <tr key={vacina.id}>
                                <td>
                                    <h6 className="mb-1">{vacina.designacao}</h6>
                                    <p className="m-0">{vacina.descricao}</p>
                                </td>

                                {
                                    vacina.doses.map(dose => (
                                        <td key={dose.id}>
                                            {
                                                dose.estado === 0 &&
                                                <p>
                                                    X
                                                </p>
                                            }
                                            {
                                                dose.estado === 1 &&
                                                <p>
                                                    {new Date(dose.updated_at).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })}
                                                </p>
                                            }
                                        </td>
                                    ))
                                }
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
                        Registo das vacinações {" "}
                        {
                            vacinas !== undefined &&
                            <Badge color="info">
                                <>{vacinas.length}</>
                            </Badge>
                        }
                    </h2>

                    <Table>
                        <thead>
                            <tr>
                                <th>Vacinas</th>
                                <th>Dose extra</th>
                                <th>1º Dose</th>
                                <th>2º Dose</th>
                                <th>3º Dose</th>
                                <th>Reforco</th>
                            </tr>
                        </thead>
                        {content}
                    </Table>
                </Col>
            </Row>
        )
    }
}

TableVacinacao.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(TableVacinacao);