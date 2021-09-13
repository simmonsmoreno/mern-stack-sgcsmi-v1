import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    render() {
        return (
            // <!-- Content Header (Page header) -->
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">{this.props.title}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/dashboard">{this.props.title}</Link></li>
                                <li className="breadcrumb-item active">{this.props.subtitle}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            // <!-- /.content-header -->
        );
    }
}

export default PageHeader;