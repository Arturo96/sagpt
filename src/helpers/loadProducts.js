import { db } from "../firebase/firebase-config";

export const loadProducts = async() => {
    const products = [],
        productsSnap = await db.collection("productos").get();
        
    productsSnap.forEach(snapHijo => products.push({
        id: snapHijo.id,
        ...snapHijo.data()
    }));

    return products;

}

