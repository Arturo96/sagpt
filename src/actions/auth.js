import {types} from '../types/types';

export const startLogin = (user) => {

    return (dispatch) => {

        // Firebase

        dispatch(login(user));

    }

}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const logout = () => ({ type: types.authLogout })