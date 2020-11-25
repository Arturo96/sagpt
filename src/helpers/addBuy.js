import { db, firebase } from "../firebase/firebase-config";

export const addBuyDB = async( buy, productsDB ) => {

    const clientesRef = db.collection('clientes');

    let {documento, nombres, apellidos, telefono, email, productos} = buy,
        nuevoCliente = { documento, nombres, apellidos, telefono, email};

    let cliente = await clientesRef.where('documento', '==', documento).get(),
        clienteID = "";

    if(cliente.empty) {
        cliente = await clientesRef.add(nuevoCliente);
        clienteID = cliente.id
    } else {
        clienteID = cliente.docs[0].id;
    }

    productos = productos.map(p => {
        const productDB = productsDB.find(pDB => pDB.modelo === p.modelo);

        return {...p, precio: productDB ? productDB.precio : null}
    });

    console.log(productos);
    let costoTotal = 0;

    productos.forEach(p => costoTotal += p.precio * p.unidad);

    const nuevaFactura = {
        cliente: db.doc(`clientes/${clienteID}`),
        costo: costoTotal,
        fecha: firebase.firestore.Timestamp.fromDate(new Date())
    }

    console.log(nuevaFactura);

    await db.collection('facturas').add(nuevaFactura);

}
