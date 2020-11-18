import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { customerReducer } from "./customerReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    customers: customerReducer
})