import { Component, OnInit, Input } from '@angular/core';
import { ServiciosService } from '../../Services/servicios.service';
import { Producto } from 'src/app/Models/producto';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styleUrls: ['./lista-resultados.component.css']
})
export class ListaResultadosComponent implements OnInit {
//  resultadosq: Producto[] = [];
  query: string = '';
  @Input() resultados: Producto[] = [];
  searchResults: any[]= [];
 
  constructor(private priductoService: ServiciosService, private router: Router) {}
  ngOnInit(): void {
    this.resultados = this.priductoService.obtenerResultados();

console.log(this.resultados)
this.search("");
    
  }


  search(query: string) {
    this.priductoService.searchProducts(query).subscribe(

(datos)=>{
this.resultados=datos
console.log(this.resultados)


}
    )






    


    
  }
  
  verDetalles(id:number): void{
    this.router.navigate(['/detalle-producto', id]);



  }
  
  carrito(): void {
    this.router.navigate(['/carritoC']);
  }

}