import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService} from '../../services/productos.service'

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',

})
export class PortfolioItemComponent {

  producto:any = undefined;
  cod:string = undefined;
  fecha:number = new Date().getFullYear();
 constructor ( public route:ActivatedRoute,
  public _ps: ProductosService ) {

    route.params.subscribe( parametros =>{

      //console.log( parametros );
      //console.log( parametros['id'] );

      _ps.cargar_producto( parametros['id'])
          .subscribe( res => {

            this.cod = parametros['id'];
            this.producto = res.json();
            console.log( this.producto );

          });

    })

 }

}
