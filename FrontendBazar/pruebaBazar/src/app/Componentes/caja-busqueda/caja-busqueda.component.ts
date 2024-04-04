import { ContentObserver } from '@angular/cdk/observers';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/producto';
import { ServiciosService } from 'src/app/Services/servicios.service';
@Component({
  selector: 'app-caja-busqueda',
  templateUrl: './caja-busqueda.component.html',
  styleUrls: ['./caja-busqueda.component.css']
})
export class CajaBusquedaComponent {
  productId: number=0;
  product: any;
  query: string="";
  resultados: Producto[] = [];
  constructor(private router: Router, private cajaServicio: ServiciosService) { }

  redirectToOtraComponente() {
    this.router.navigate(['/ruta2']);
  }

  searchProduct() {
    this.cajaServicio.getProductDetails(this.productId)
      .subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error('Error al buscar el producto:', error);
        }
      );
  }

  searchProductTodo(query: string) {
    this.cajaServicio.searchProducts(query)
      .subscribe(
        (data) => {
         
          this.resultados=data;
          //this.cajaServicio.actualizarResultados(data);
          console.log(this.resultados)
       
        },
        (error) => {
          console.error('Error al buscar el producto:', error);
        }
      );
  }
 



  buscarProductos() {
    
    if (this.query.trim() !== '') {
      this.cajaServicio.searchProducts1(this.query).subscribe(
        (resultados) => {
          // Guardar resultados en una variable del servicio o en otro lugar apropiado
          this.cajaServicio.guardarResultados(resultados);
          // Redirigir a la página Componente2 para mostrar los resultados
          this.router.navigate(['/ruta2']);
          console.log("res",this.query)
        },
        (error) => {
          console.error('Error al buscar productos:', error);
        }
      );
    }else if (this.query.trim() == ''){

      this.cajaServicio.searchProducts2("")
      .subscribe(
        (resultados) => {
          // Guardar resultados en una variable del servicio o en otro lugar apropiado
          this.cajaServicio.guardarResultados(resultados);
          // Redirigir a la página Componente2 para mostrar los resultados
          this.router.navigate(['/ruta2']);
          console.log("res",this.query)
        },
        (error) => {
          console.error('Error al buscar productos:', error);
        }
      );
    }
  }





}
  

