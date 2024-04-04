import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CajaBusquedaComponent} from '../app/Componentes/caja-busqueda/caja-busqueda.component'
import{ListaResultadosComponent} from '../app/Componentes/lista-resultados/lista-resultados.component'
import{DetalleProductoComponent} from '../app/Componentes/detalle-producto/detalle-producto.component'
import{CarritoCompraComponent} from '../app/Componentes/carrito-compra/carrito-compra.component'
const routes: Routes = [
  { path: '', redirectTo: 'ruta1', pathMatch: 'full' }, // Redirige la ruta principal a 'ruta1'
  { path: 'ruta1', component: CajaBusquedaComponent },
  { path: 'ruta2', component: ListaResultadosComponent },
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'carritoC', component: CarritoCompraComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 







}
