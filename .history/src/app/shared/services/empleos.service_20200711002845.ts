import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleosService {
  getEmpleoById2(id: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]>{
    return this.afs.collection('empleos').valueChanges();
  }

  getEmpleosPorNombre(): Observable<any[]>{
    return this.afs.collection('empleos',
        ref => ref.where('titulo', '==', 'ICC')
        .orderBy('fecha', 'asc')).valueChanges();
  }

  getEmpleo(uid: string): Observable<Event>{
    const itemDoc = this.afs.doc<Event>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }
}
