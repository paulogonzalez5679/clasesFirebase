import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Empleo } from '../../../../.history/src/app/shared/model/empleo_20200711015501';


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
    const itemDoc = this.afs.doc<any>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }

  insertEmpleo(empleo: Empleo)
  {
    const refEmpleo =  this.afs.collection('empleos');
    empleo.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, { merge: true });
  }
}
