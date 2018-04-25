import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  termino:string = undefined;
  constructor(private route:ActivatedRoute) { 

    route.params.subscribe( parametros =>{

      this.termino = parametros['termino'];
      console.log(this.termino);

    });

  }


}
