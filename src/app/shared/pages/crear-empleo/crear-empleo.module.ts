import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleoPageRoutingModule } from './crear-empleo-routing.module';

import { CrearEmpleoPage } from './crear-empleo.page';
import { ImageUploadComponent } from '../../../components/image-upload/image-upload.component';
import { BluetoothCComponent } from '../../../components/bluetooth-c/bluetooth-c.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpleoPageRoutingModule
  ],
  declarations: [CrearEmpleoPage, ImageUploadComponent, BluetoothCComponent],
  exports: [ImageUploadComponent, BluetoothCComponent]
})
export class CrearEmpleoPageModule {}
