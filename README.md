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
