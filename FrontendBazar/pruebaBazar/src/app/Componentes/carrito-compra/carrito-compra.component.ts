import { Component } from '@angular/core';
import { Producto } from 'src/app/Models/producto';
import { ServiciosService } from '../../Services/servicios.service';
@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {
  listaDeCompras: { producto: Producto, precio: number }[] = [];
constructor(private itemService: ServiciosService){
 
  this.listaDeCompras = this.itemService.obtenerListaDeCompras();


}

obtenerTotalDeCompras(): number {
  return this.itemService.obtenerTotalDeCompras();
}

}
