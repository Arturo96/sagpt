import { loadCustomers } from "../helpers/loadCustomers";
import { types } from "../types/types";

export const startLoadingCustomers = () => {
    return async(dispatch) => {
        const customers = await loadCustomers();
        dispatch(loadingCustomers(customers));
    }
}

const loadingCustomers = (customers) => ({
    type: types.customerLoad,
    payload: customers
})

export const cleanCustomers = () => ({type: types.customerClean})