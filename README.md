# clasesFirebase
para la instalacion de la API de bluetooh se escribe lo siguiente en la terminal:
<br> 
ionic cordova plugin add cordova-plugin-ble-central
<br>
npm install @ionic-native/ble  
<br>
luego importamos en nuestro app.modules
<br>
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
<br>
de igual manera en nuestros providers dentro de app.modules
<br>
providers: [
    BLE]
<br>
despues debemos crear un componente 
<br>
ionic generate component components/bluetooth
<br>
ahora dentro de este componente accedemos al archivo .ts y creamos los metodos para que escanne los dispositivos bluetooth, cabe recalcar que esta orietando a la conectividad serial, por el cual el disipositivo al cual se intente conecta debe enviar una señal, para las pruebas se usaron AirPods los cuales su caja contiene un boton y tiene una señal que emite para conectarse, se puede usar un sensor de arudio H05 bluetooth para hacer esata prueba pero se debe realizar otras configuraciones 
<br>
scan(){ <br>
    this.devices = []; <br>
    this.ble.scan([], 15).subscribe(<br>
      device => this.onDeviceDiscovered(device)<br>
    );<br>
  }<br>
  onDeviceDiscovered(device) {<br>
    console.log('Discovered' + JSON.stringify(device, null, 2));<br>
    this.ngZone.run(() => {<br>
      this.devices.push(device);<br>
      console.log(device);<br>
    });<br>
  }<br>
<br>
  conectar(id){<br>
    this.ble.connect(id) ;<br>
  }<br>
  dentro del .html de este componente tendremos lo siguiente:
  <br>
  ```html<ion-button (click)="scan()" slot="end"><br>
    <ion-icon [name]="icon"></ion-icon><br>
    <p>Scan</p><br>
</ion-button>
<br>
<ion-content><br>
    <ion-list><br>
        <ion-card-content ion-item *ngFor="let device of devices"><br>
            <p>{{device.name}}</p><br>
            <p>{{device.id}}</p><br>
            <p> RSSI: {{device.rssi}}</p><br>
            <ion-button (click)=" conectar(device.id) ">connect</ion-button><br>
        </ion-card-content><br>
    </ion-list><br>
</ion-content><br>
````
  <br>
  Ahora para poder implemetar nuestro componente accedemos al .modules de la pagina en donde queremos implementarlo, y lo importamos, en este caso es en el crear empleos
  <br>
  import { BluetoothCComponent } from '../../../components/bluetooth-c/bluetooth-c.component';
  <br>
   declarations: [BluetoothCComponent],
   <br>
   exports: [BluetoothCComponent]
   <br>
   finalmente en .html de este ultimo mencionado ponemos lo siguiente : 
    ````<app-bluetooth-c [icon]="'Bluetooth'" [type]="'Bluetooth'"></app-bluetooth-c>````
  
