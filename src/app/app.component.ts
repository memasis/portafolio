import { Component } from '@angular/core';
import { InformationService, InformacionService } from "./services/informacion.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _is:InformacionService){
    
  }
}
