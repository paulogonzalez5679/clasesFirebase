import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Empleo } from '../../../../.history/src/app/shared/model/empleo_20200711015501';
import { first, map } from 'rxjs/operators';


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
    let itemDoc = this.afs.doc<any>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }

  insertEmpleo(empleo: Empleo)
  {
    let refEmpleo =  this.afs.collection('empleos');
    empleo.uid = this.afs.createId();
    let param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, { merge: true });
  }

  async getEmpleoById2(uid: string): Promise<Empleo>{
    try{
        const aux: any = await this.afs.collection('empleos',
            ref => ref.where('uid', '==', uid))
                      .valueChanges().pipe(first()).toPromise().then(doc => {
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if (aux.length==0) {
            return undefined;
        }
        return aux[0];
    }catch (error){
      console.error('Error', error);
      throw error;
    }
  }



getTelefonos(uid: string): Observable<any[]> {
    return this.afs.collection('empleos').doc(uid).collection('telefonos',
                ref => ref.orderBy('numero', 'asc')).valueChanges();

  }



async getEmpleos2(){
    return this.afs.collection('empleos').valueChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          let data: any = a;
          data.iess = data.salario * 0.945;
          return {...data};
        });
      })
    );
  }
}
