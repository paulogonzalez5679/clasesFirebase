import { Component, OnInit, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-bluetooth-c',
  templateUrl: './bluetooth-c.component.html',
  styleUrls: ['./bluetooth-c.component.scss'],
})
export class BluetoothCComponent implements OnInit {

  devices;
  id = this.devices.id;
  @Input() type: string;
  @Input() icon: string;
  @Output() scanner = new EventEmitter<any>();

  constructor(private ble: BLE, private ngZone: NgZone) { }

  ngOnInit() {}

  scan(){
    this.devices = [];
    this.ble.scan([], 15).subscribe(
      device => this.onDeviceDiscovered(device)
    );
  }
  onDeviceDiscovered(device) {
    console.log('Discovered' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
      console.log(device);
    });
  }

  conectar(id){
    this.ble.connect(id) ;
  }

}
