import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {

  constructor(private empleosService) { }

  ngOnInit() {
  }

}
