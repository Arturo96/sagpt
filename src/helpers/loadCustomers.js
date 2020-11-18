import { db } from "../firebase/firebase-config";

export const loadCustomers = async() => {
    const customers = [],
        customersSnap = await db.collection("clientes").get();
        
    customersSnap.forEach(snapHijo => customers.push({
        id: snapHijo.id,
        ...snapHijo.data()
    }));

    return customers;

}

