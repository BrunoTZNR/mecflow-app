import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OsComponent } from './components/os/os.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientComponent } from './components/client/client.component';
import { ClientCadastrarComponent } from './components/client/client-cadastrar/client-cadastrar.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';
import { ClientService } from './services/client.service';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductCadastrarComponent } from './components/product/product-cadastrar/product-cadastrar.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OsComponent,
    ClientComponent,
    ClientDetailComponent,
    ClientCadastrarComponent,
    ClientEditComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductCadastrarComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
