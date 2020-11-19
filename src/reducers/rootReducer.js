import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { customerReducer } from "./customerReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    customers: customerReducer,
    products: productReducer
})