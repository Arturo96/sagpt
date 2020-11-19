import { types } from "../types/types";

export const productReducer = (state = {}, action) => {
	switch (action.type) {
		case types.productLoad:
			return action.payload;

		case types.productClean:
			return {};

		default:
			return state;
	}
};
