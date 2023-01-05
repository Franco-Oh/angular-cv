import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SeccionesModule } from '../secciones/secciones.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SeccionesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
