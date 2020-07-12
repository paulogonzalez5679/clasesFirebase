import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../../services/empleos.service';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo();
  constructor(private empleoService: EmpleosService) { }

  ngOnInit() {
  }

  guardarEmpleo(){
    console.log(this.empleo);
    this.empleoService.insertEmpleo(this.empleo);
  }

}
