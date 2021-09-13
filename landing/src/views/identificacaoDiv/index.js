import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

// reactstrap components
import {
    Input,
    Row,
    Col,
    Label,
    FormGroup,
    Form
} from "reactstrap";

class IdentificacaoDiv extends Component {

    render() {

        const { crianca } = this.props
        const data = new Date(crianca.dob).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })

        return (
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Identificação e Inscrição</h2>
                    <Form>
                        <FormGroup className="row">
                            <Label sm="4">Nome Completo</Label>
                            <Col sm="8">
                                <Input
                                    className="form-control-plaintext"
                                    defaultValue={crianca.fullname}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Sexo</Label>
                            <Col sm="4">
                                <Input
                                    className="form-control-plaintext"
                                    defaultValue={crianca.sex}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Data de nascimento</Label>
                            <Col sm="4">
                                <Input
                                    className="form-control-plaintext"
                                    defaultValue={crianca.dob}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Número do BI/CNI</Label>
                            <Col sm="4">
                                <Input
                                    className="form-control-plaintext"
                                    defaultValue={crianca.cni}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Nome do pai</Label>
                            <Col sm="8">
                                <Input
                                    className="form-control-plaintext"
                                    // defaultValue={crianca.users[0].fullname}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Nome do mãe</Label>
                            <Col sm="8">
                                <Input
                                    className="form-control-plaintext"
                                    // defaultValue={crianca.users[1].fullname}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Endereco da família</Label>
                            <Col sm="4">
                                <Input
                                    className="form-control-plaintext"
                                    defaultValue={crianca.address}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Telefone</Label>
                            <Col sm="4">
                                <Input
                                    className="form-control-plaintext"
                                    // defaultValue={crianca.users[0].phone}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                            <Col sm="4">
                                <Input
                                    className="form-control-plaintext"
                                    // defaultValue={crianca.users[1].phone}
                                    readOnly={true}
                                    type="text"
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

IdentificacaoDiv.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(IdentificacaoDiv);