import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';
import "./Dashboard.css"
import placeholder from './user-placeholder.png'
import Logout from '../Logout';
import Login from '../Login';

const jwt = require('jsonwebtoken');

const Dashboard = () => {

    document.title = 'Admin Dashboard | TSG';
    const token = localStorage.getItem("authToken");
    const decodedToken = jwt.decode(token, { complete: true });
    const token_exp = decodedToken.payload.exp;
    if (token_exp * 1000 < Date.now()) {
        localStorage.clear();
        window.location.href = "/login"
    }
    return (
        localStorage.getItem("authToken") ? (
            <Layout>
                <div style={{ width: '95%' }}>
                    <div style={{ float: 'right', 'margin-top': '5rem', 'margin-bottom': '-5rem' }}>
                        <Logout />
                    </div>
                </div>
                <div className="dashboard-screen">
                    <div className="admin-profile">
                        <div className="profile-pic">
                            <img className="admin-pic" src={placeholder} alt='profile-pic' />
                        </div>
                        <div className="admin-info">
                            <div className="adm-name-conti">
                                <h3 className="admin-name">Admin Name</h3>
                            </div>
                            <div className="admin-desc">
                                <p className="admin-post">President</p>
                                <p className="admin-post">Contributor</p>
                            </div>
                        </div>
                    </div>
                    <div className="router-btns">
                        <div className="routing-conti">
                            <Link to='/admin/certificate' className="btn-route btn btn-primary">Certificate Generator</Link>
                        </div>
                        <div className="routing-conti">
                            <Link to='/admin/dataupdate' className="btn-route btn btn-secondary">Data Update</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        ) : (
            <Layout>
                <Login />
            </Layout>
        )
    );
}

export default Dashboard;