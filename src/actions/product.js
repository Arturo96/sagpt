import { loadProducts } from "../helpers/loadProducts";
import { types } from "../types/types";

export const startLoadingProducts = () => {
    return async(dispatch) => {
        const products = await loadProducts();
        dispatch(loadingProducts(products));
    }
}

const loadingProducts = (products) => ({
    type: types.productLoad,
    payload: products
})

export const cleanProducts = () => ({type: types.productClean})