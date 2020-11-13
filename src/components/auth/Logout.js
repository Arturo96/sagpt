import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/auth';

export const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="logout" data-display>
            <h3>Carlos Vargas</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
