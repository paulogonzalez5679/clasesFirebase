import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {

  empleados: Observable<any[]>;
  empleados2: any[];
  cosas: any = new Array();

  constructor(private empleosService: EmpleosService, private router: Router) { }

  ngOnInit() {
    this.empleados = this.empleosService.getEmpleos();
    this.cosas.push({id: 10, nombre: 'asas'});
    this.cosas.push({id: 10, nombre: 'tuer'});
    this.cosas.push({id: 10, nombre: 'hashj'});
    this.cosas.push({id: 10, nombre: 'poasl'});

    this.empleados2.subscribe(data => {
      for (let aux of data){
        aux.iess = aux.salario * 0.095;
      }
      this.empleados2 = data;
    });
  }
  showEmpleo(id: any){
    this.router.navigate([`empleo/${id}`]);

  }
  trackByFn(index, obj) {
    return obj.uid;
  }
  showCrearEmpleo(id: any){
    this.router.navigate([`crear-empleo`]);

  }

}
