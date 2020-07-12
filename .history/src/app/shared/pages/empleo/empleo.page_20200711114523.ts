import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../../../../.history/src/app/shared/services/empleos.service_20200711002845';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {
  empleo: Observable<any>;
  constructor(private empleosService: EmpleosService, private route: ActivatedRoute) { }

  async ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.empleo = this.empleosService.getEmpleo(id);

    this.empleo.subscribe(data => {
      console.log(data.titulo);
      console.log(data);
        });
   let auxEmpleado= this.empleosService.getEmpleo2(id);

  }

}
