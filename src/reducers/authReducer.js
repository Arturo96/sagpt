/* Estado inicial
    uid: 'el uid',
    name: 'el name'
*/

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.authLogin:
			return {
				uid: action.payload.email,
				name: action.payload.displayName || 'Sin nombre'
			}

		case types.authLogout:
			return {};

		default:
			return state;
	}
};
