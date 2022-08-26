import React from 'react';
import DataUpdate from '../../components/Admin/DataUpdate';
import Layout from '../../components/Layout';

const Dashboard = () => {

    document.title = 'Admin Dashboard | TSG';

    return (
        <Layout>
            <DataUpdate />
        </Layout>
    )
}

export default Dashboard;