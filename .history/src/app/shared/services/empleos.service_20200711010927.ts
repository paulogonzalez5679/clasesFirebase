import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]>{
    return this.afs.collection('empleos').valueChanges();
  }

  getEmpleosPorNombre(): Observable<any[]>{
    return this.afs.collection('empleos',
        ref => ref.where('titulo', '==', 'ICC')
        .orderBy('fecha', 'asc')).valueChanges();
  }

  getEmpleo(uid: string): Observable<any>{
    const itemDoc = this.afs.doc<Event>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }
}
