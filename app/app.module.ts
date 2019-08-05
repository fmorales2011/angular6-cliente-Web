import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ReporteClienteComponent } from './reporte-cliente/reporte-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    CrearClienteComponent,
    ReporteClienteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
