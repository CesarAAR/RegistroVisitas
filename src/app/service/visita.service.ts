import { Injectable } from '@angular/core';
import { Visita } from '../models/visita';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private firestore:AngularFirestore) { }

  createVisita(visit:Visita){
    return this.firestore.collection('Registro').add(visit);
  }

  getVisita(){
    return this.firestore.collection('Registro').snapshotChanges();
  }

  updateVisita(visit:Visita,id:string){
    this.firestore.collection('Registro').doc(id).update(visit);
  }

  deleteVisita(id:string){
    this.firestore.collection('Registro').doc(id).delete();
  }
}
