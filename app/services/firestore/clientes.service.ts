import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  crearCliente(data: Cliente) {
    return this.firestore.collection('clientes').add(data);
  }

  listarClientes() {
    return this.firestore.collection('clientes').snapshotChanges();
  }

  public getCliente(documentId: string) {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }

  modificarCliente(documentId: string, data: Cliente) {
    this.firestore.doc('clientes/' + documentId).update(data);
  }

  eliminarCliente(documentId: string) {
    this.firestore.doc('clientes/' + documentId).delete();
  }
}
