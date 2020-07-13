import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';



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

    this.finish.emit({message: 'OK', contador: this.contador });
  }

}
