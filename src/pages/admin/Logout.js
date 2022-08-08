import React from 'react'
import './Logout.css'

const Logout = () => {

    const logout = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    }

    return (
        <div className='logout-container'>
            <button onClick={logout} className='btn btn-danger'>Logout</button>
        </div>
    );
}

export default Logout;