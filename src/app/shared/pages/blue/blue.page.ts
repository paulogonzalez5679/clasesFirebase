import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.page.html',
  styleUrls: ['./blue.page.scss'],
})
export class BluePage implements OnInit {

  devices;

  constructor(private bluetoothSerial: BluetoothSerial, private aleterController: AlertController) { }

  ngOnInit() {
  }
  ActivarBluetooth(){
    this.bluetoothSerial.isEnabled().then(response => {
      this.isEnabled('ON');
      this.dispositivos();
    }, error => {
      this.isEnabled('OFF');
    }); /*permite ver si esta activado el bluetooth del dispositivo*/
  }

  /*Metodo para mensajes de alertas */
  async isEnabled(msg){
    const alert = this.aleterController.create({
      header: 'Alerta',
      message: msg,
      buttons: [{
        text: 'okay',
        handler: () => {console.log('okey'); }
      }]
    });
  }
/*meotodo para obtener los dispositivos*/
  dispositivos()
  {
    this.bluetoothSerial.list().then(response => {
      this.devices = response;
    }, error => {
      console.log('error');
    });
  }

  conectar(address)
  {
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected();
    }, error => {
      console.log('error');
    });
  }

  deviceConnected(){
    this.bluetoothSerial.subscribe('/n').subscribe(success => {
      this.hundler(success);
    });
  }

  hundler(value){
    console.log(value);
  }
}
