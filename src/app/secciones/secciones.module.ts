import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BodyComponent
  ]
})
export class SeccionesModule { }
