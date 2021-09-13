import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    Input,
    Row,
    Col,
    Label,
    FormGroup,
    Form
} from "reactstrap";

class PeriodoNeonatal extends Component {
    render() {

        const { crianca } = this.props
        
        return (
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Periodo Neonatal</h2>
                    <Form>
                        <FormGroup className="row">
                            <Label sm="4">Local do parto</Label>
                            <Col sm="8">
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultChecked defaultValue="option1" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Institucional
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option2" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Domiciliar
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option3" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Outros
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Tipo de parto</Label>
                            <Col sm="8">
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultChecked defaultValue="option1" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Eutócito
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option2" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Distócito
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option3" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Cesariana
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option2" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Fórceps
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option3" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Ventosa
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline className="form-check-radio">
                                    <Label check>
                                        <Input defaultValue="option2" type="radio" disabled />
                                        <span className="form-check-sign"></span>
                                        Outro
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Peso nascimento (kg): </Label>
                            <Col sm="8">
                                <Input className="form-control-plaintext" defaultValue={crianca.pesonasc} readOnly={true} />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Comprimento nascimento (cm): </Label>
                            <Col sm="8">
                                <Input className="form-control-plaintext" defaultValue={crianca.altnasc} readOnly={true} />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label sm="4">Perímeto cefálico nascimento: </Label>
                            <Col sm="8">
                                <Input className="form-control-plaintext" defaultValue={crianca.perimnasc} readOnly={true}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

        )
    }
}

PeriodoNeonatal.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(PeriodoNeonatal);