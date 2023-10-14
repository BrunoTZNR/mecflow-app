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
import { ManufactureComponent } from './components/manufacture/manufacture.component';
import { ManufactureCadastrarComponent } from './components/manufacture/manufacture-cadastrar/manufacture-cadastrar.component';
import { ManufactureDetailComponent } from './components/manufacture/manufacture-detail/manufacture-detail.component';
import { ManufactureEditComponent } from './components/manufacture/manufacture-edit/manufacture-edit.component';
import { CarComponent } from './components/car/car.component';
import { CarCadastrarComponent } from './components/car/car-cadastrar/car-cadastrar.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarEditComponent } from './components/car/car-edit/car-edit.component';
import { AdvanceComponent } from './components/advance/advance.component';
import { AdvanceCadastrarComponent } from './components/advance/advance-cadastrar/advance-cadastrar.component';
import { AdvanceEditComponent } from './components/advance/advance-edit/advance-edit.component';
import { AdvanceDetailComponent } from './components/advance/advance-detail/advance-detail.component';
import { PaydayComponent } from './components/payday/payday.component';
import { PaydayCadastrarComponent } from './components/payday/payday-cadastrar/payday-cadastrar.component';
import { PaydayEditComponent } from './components/payday/payday-edit/payday-edit.component';
import { PaydayDetailComponent } from './components/payday/payday-detail/payday-detail.component';

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
    ProductEditComponent,
    ManufactureComponent,
    ManufactureCadastrarComponent,
    ManufactureDetailComponent,
    ManufactureEditComponent,
    CarComponent,
    CarCadastrarComponent,
    CarDetailComponent,
    CarEditComponent,
    AdvanceComponent,
    AdvanceCadastrarComponent,
    AdvanceEditComponent,
    AdvanceDetailComponent,
    PaydayComponent,
    PaydayCadastrarComponent,
    PaydayEditComponent,
    PaydayDetailComponent
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
