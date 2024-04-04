import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Services/servicios.service';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { Observable,throwError,of  } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/Models/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  
precio:number=0;
product1:Producto[]=[];
  product: any;
  constructor(private route: ActivatedRoute, private itemService: ServiciosService,  private router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.itemService.getProductDetails(+id).subscribe(data => {
      this.product = data;
    });
  }
 const y= this.obtenerTotalDeCompras();
  console.log("",y)

  }

comprar(product1:Producto){
  
    this.itemService.agregarAListaDeCompras(product1);
  console.log("" ,this.itemService.agregarAListaDeCompras(product1))


}


obtenerTotalDeCompras(): number {
  return this.itemService.obtenerTotalDeCompras();
}

carrito(): void {
  this.router.navigate(['/carritoC']);
}

}
