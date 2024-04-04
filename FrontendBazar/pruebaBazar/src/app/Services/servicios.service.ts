import { Injectable } from '@angular/core';
import { Producto } from 'src/app/Models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
 productoTitulo:string="";
  private resultadosBusqueda: any[] = []; 
  private librosDisponibles: Producto[] = [];
  private apiUrl = environment.apiUrl;
  public listaDeCompras: { producto: Producto, precio: number }[] = []; // Lista de compras
  public totalDeCompras: number = 0; // Total de compras
  constructor(private http: HttpClient) {}
  searchProducts(query:string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/items?q=${query}`);
  }
  searchProducts2(query:string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/items?q`);
  }
  getProductDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`);
  }
  searchProducts1(query:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items?q=${query}`).pipe(
      tap((resultados) => {
        // Llamar al método guardarResultados para almacenar los resultados
        this.guardarResultados(resultados);
      }),
      catchError((error) => {
        console.error('Error al realizar la búsqueda:', error);
        return throwError(error);
      })
    );
  }

  guardarResultados(resultados: any[]) {
    // Guardar los resultados en la variable resultadosBusqueda
    this.resultadosBusqueda = resultados;
  }
  guardarPrecio(resultados: number) {
  
  }
  obtenerResultados(): any[] {
    // Método para obtener los resultados guardados
    return this.resultadosBusqueda;
  }

  agregarAListaDeCompras(producto: Producto) {
    if (!this.productoYaEnLista(producto)) {
      this.listaDeCompras.push({ producto: producto, precio: producto.price })
      this.actualizarTotalDeCompras();
    }
  }
  // agregarAListaDeCompras1(producto: Producto) {
  //   if (!this.listaDeCompras.includes(producto)) {
  //     this.listaDeCompras.push({ producto: producto, precio: producto.price })
  //     this.actualizarTotalDeCompras();
  //   }
  // }
  // private actualizarTotalDeCompras() {
  
  //   this.totalDeCompras = this.listaDeCompras.reduce((total, producto) => total+ producto.price, 0);

  // }
  private actualizarTotalDeCompras() {
    this.totalDeCompras = this.listaDeCompras.reduce((total, item) => total + item.precio, 0);
  }

  // obtenerListaDeCompras( producto: Producto, precio: number): Producto[] {
  //   return this.listaDeCompras;
  // }

   obtenerListaDeCompras(): { producto: Producto, precio: number }[] {
    return this.listaDeCompras;
  }
  // Método para obtener el total de compras
  obtenerTotalDeCompras(): number {
    return this.totalDeCompras;
  }
  productoYaEnLista(producto: Producto): boolean {
    return this.listaDeCompras.some(item => item.producto.id === producto.id);
  }
}

