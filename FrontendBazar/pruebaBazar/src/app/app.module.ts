import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CajaBusquedaComponent } from './Componentes/caja-busqueda/caja-busqueda.component';
import { QComponent } from './Componentes/q/q.component';
import { ListaResultadosComponent } from './Componentes/lista-resultados/lista-resultados.component';
import { DetalleProductoComponent } from './Componentes/detalle-producto/detalle-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http'; 
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';
import { CarritoCompraComponent } from './Componentes/carrito-compra/carrito-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    CajaBusquedaComponent,
    QComponent,
    ListaResultadosComponent,
    DetalleProductoComponent,
    CarritoCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,
    HttpClientModule,
    MatCardModule,
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
