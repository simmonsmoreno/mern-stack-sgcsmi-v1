import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

import { Col } from "reactstrap";


// const data = [
//     { name: '27/05/2020', comprimento: 53},
//     { name: '05/06/2020', comprimento: 55},
//     { name: '22/06/2020', comprimento: 57},
//     { name: '22/07/2020', comprimento: 63},
// ];

class Comprimento extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {

        const { crescimentos } = this.props.crianca
        const data = []

        if (crescimentos !== undefined) {

            crescimentos.forEach(element => {
                let obj = {
                    name: new Date(element.created_at).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' }),
                    comprimento: element.altura
                }

                data.push(obj)
            });
        }


        return (
            <Col className="ml-auto mr-auto text-center my-5">
                <h2 className="title">
                    Altura por data
                    </h2>

                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="comprimento" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </Col>
        );
    }
}

Comprimento.propTypes = {
    crianca: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    crianca: state.reducer.crianca,
});

export default connect(
    mapStateToProps,
    null
)(Comprimento);