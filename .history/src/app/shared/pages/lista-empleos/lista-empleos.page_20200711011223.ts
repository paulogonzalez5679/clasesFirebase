import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {

  empleados: Observable<any[]>;

  cosas: any = new Array();

  constructor(private empleosService: EmpleosService) { }

  ngOnInit() {
    this.empleados = this.empleosService.getEmpleos();
    this.cosas.push({id: 10, nombre: 'asas'});
    this.cosas.push({id: 10, nombre: 'tuer'});
    this.cosas.push({id: 10, nombre: 'hashj'});
    this.cosas.push({id: 10, nombre: 'poasl'});
  }
  showEmpleo(id: any){

  }

}
