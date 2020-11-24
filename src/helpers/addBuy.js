import { db } from "../firebase/firebase-config";

export const addBuyDB = async( buy ) => {

    const clientesRef = db.collection('clientes');

    const {documento, nombres, apellidos, telefono, email, productos} = buy,
        nuevoCliente = { documento, nombres, apellidos, telefono, email};

    let cliente = await clientesRef.where('documento', '==', documento).get(),
        clienteID = "";

    if(cliente.empty) {
        cliente = await clientesRef.add(nuevoCliente);
        clienteID = cliente.id
    } else {
        clienteID = cliente.docs[0].id;
    }

    console.log(clienteID);

   

}