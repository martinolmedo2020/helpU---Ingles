import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    ServiciosComponent,
    Pagina404Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    ServiciosComponent,
    Pagina404Component
  ]
})
export class PagesModule { }
