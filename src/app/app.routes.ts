import { RouterModule,Routes } from "@angular/router";

import {
     AboutComponent,
     PortafolioComponent,
     PortfolioItemComponent 
    } 
     from "./components/index.paginas";



const app_routes: Routes = [
{path: 'Home', component: PortafolioComponent},
{path: 'about', component: AboutComponent},
{path: 'producto', component: PortfolioItemComponent},
{path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});