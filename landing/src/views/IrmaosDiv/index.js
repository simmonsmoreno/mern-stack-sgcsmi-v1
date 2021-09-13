import React, { Component } from 'react'

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button, Badge
} from "reactstrap";

export default class index extends Component {
    render() {
        return (
            <Row>
                <Col className="ml-auto mr-auto text-center my-5">
                    <h2 className="title">
                        Irmãos {" "}
                        <Badge color="info"> 3 </Badge>
                    </h2>

                    <Card className="text-center mx-2" style={{ width: "20rem" }}>
                        <CardBody>
                            <CardTitle tag="h4">Nícolas Moreno</CardTitle>
                            <CardText>
                                Data de nascimento: <b>20/11/2030</b>
                                5 anos
                            </CardText>
                            <Button color="primary" onClick={e => e.preventDefault()}>
                                Ver
                            </Button>
                        </CardBody>
                    </Card>

                    <Card className="text-center mx-2" style={{ width: "20rem" }}>
                        <CardBody>
                            <CardTitle tag="h4">Saimara Moreno</CardTitle>
                            <CardText>
                                Data de nascimento: <b>20/02/2032</b>
                                3 anos
                            </CardText>
                            <Button color="primary" onClick={e => e.preventDefault()}>
                                Ver
                            </Button>
                        </CardBody>
                    </Card>

                    <Card className="text-center  mx-2" style={{ width: "20rem" }}>
                        <CardBody>
                            <CardTitle tag="h4">Annelie Moreno</CardTitle>
                            <CardText>
                                Data de nascimento: <b>20/04/2034</b>
                                1 anos
                            </CardText>
                            <Button color="primary" onClick={e => e.preventDefault()}>
                                Ver
                            </Button>
                        </CardBody>
                    </Card>

                </Col>
            </Row>


        )
    }
}

