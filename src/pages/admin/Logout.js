import React from 'react'
import './Logout.css'

const Logout = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href="/login";
    }
    
    

    return (
        <div className='top-bar d-flex flex-row '>
            
            <div className='logout-container '>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>
        </div>
    );
}

export default Logout;