import React from 'react';
import Layout from "../../components/Layout";


export default function Dashboard({ history }) {
    // console.log(history);
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >

                <div className="admin-title">Dashboard</div>
            </div>
        </Layout>


    );
}