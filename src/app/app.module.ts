import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserComponent } from './user/user.component';

import { ProductCatalogComponent } from './product-catalog/product-catalog.component';

import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatGridListModule}from '@angular/material';
import { LeadListsComponent } from './lead-lists/lead-lists.component';
import { LeadformComponent } from './leadform/leadform.component';
import {AuthInterceptor} from './auth-interceptor';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   UserComponent,
  
    ProductCatalogComponent,
    LeadListsComponent,
    LeadformComponent,
  
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
  
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
