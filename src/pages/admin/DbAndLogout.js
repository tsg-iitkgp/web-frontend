import React from 'react'
import './Logout.css'

const DbAndLogout = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href="/login";
    }
    const dashboard = () => {
        window.location.href="/admin"
    }
    

    return (
        <div className='top-bar d-flex flex-row m-auto '>
            {/* <div className="back-container">
                <button onClick={dashboard} className='btn btn-secondary'>Dashboard</button>
            </div> */}
            
            <div className="back-container">
                <button className="btn btn-secondary" onClick={dashboard}> Dashboard </button>
            </div>
            <div className='logout-container'>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>
        </div>
    );
}

export default DbAndLogout;