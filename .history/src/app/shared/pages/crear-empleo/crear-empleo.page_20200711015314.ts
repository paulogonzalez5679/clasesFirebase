import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo;
  constructor() { }

  ngOnInit() {
  }

  guardarEmpleo(){
    console.log(this.empleo);
  }

}
