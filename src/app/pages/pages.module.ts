import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SeccionesModule } from '../secciones/secciones.module';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    SeccionesModule
  ],
  exports: [
    HomeComponent,
    ProyectosComponent
  ]
})
export class PagesModule { }
