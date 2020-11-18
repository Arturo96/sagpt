import Swal from 'sweetalert2';
import {firebase} from '../firebase/firebase-config';
import {types} from '../types/types';

export const startLogin = ({email, password}) => {

    return async (dispatch) => {

        // Firebase
        try {
            
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);

            dispatch(login(user));

        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'El usuario o la contraseña no son correctos.', 'error')
        }

    }

}

export const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout })