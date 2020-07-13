import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  @Input() icon: string;

  @Output() finish = new EventEmitter<any>();

  contador: number;

  constructor() { }

  ngOnInit() {}

  calcular()
  {
    this.contador = 0;
    this.contador = this.contador + 1;

    this.finish.emit(this.contador);
  }

}
