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
