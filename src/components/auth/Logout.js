import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { cleanCustomers } from '../../actions/customer';

export const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
        dispatch(cleanCustomers());
    }

    return (
        <div className="logout" data-display>
            <h3>Carlos Vargas</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
