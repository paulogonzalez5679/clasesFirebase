import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../../../../.history/src/app/shared/services/empleos.service_20200711002845';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {
  empleo: any;
  constructor(private empleosService: EmpleosService) { }

  ngOnInit() {

    this.empleo = this.empleosService.getEmpleo();

  }

}
