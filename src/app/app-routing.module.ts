import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './login/login.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { LeadListsComponent } from './lead-lists/lead-lists.component';
import { LeadformComponent } from './leadform/leadform.component';





const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path:'leadlist',component:LeadListsComponent},
 {path: 'product-catalog',component:ProductCatalogComponent},
 { path:'leadform',component:LeadformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
