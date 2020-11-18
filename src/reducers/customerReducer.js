import { types } from "../types/types";

export const customerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.customerLoad:
            return action.payload;
        
        case types.customerClean:
            return {};
    
        default:
            return state;
    }
}