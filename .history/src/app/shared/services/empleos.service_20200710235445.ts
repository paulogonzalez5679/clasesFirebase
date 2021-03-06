import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]>{
    return this.afs.collection('empleos',
        ref => ref.orderBy('date', 'asc')).valueChanges();
  }

  getEmpleo(uid: string): Observable<Event>{
    const itemDoc = this.afs.doc<Event>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }
}
