import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientCadastrarComponent } from './components/client/client-cadastrar/client-cadastrar.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductCadastrarComponent } from './components/product/product-cadastrar/product-cadastrar.component';
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
import { AdvanceDetailComponent } from './components/advance/advance-detail/advance-detail.component';
import { AdvanceEditComponent } from './components/advance/advance-edit/advance-edit.component';
import { PaydayComponent } from './components/payday/payday.component';
import { PaydayCadastrarComponent } from './components/payday/payday-cadastrar/payday-cadastrar.component';
import { PaydayDetailComponent } from './components/payday/payday-detail/payday-detail.component';
import { PaydayEditComponent } from './components/payday/payday-edit/payday-edit.component';
import { OsComponent } from './components/os/os.component';
import { OsCadastrarComponent } from './components/os/os-cadastrar/os-cadastrar.component';
import { OsDetailComponent } from './components/os/os-detail/os-detail.component';
import { OsEditComponent } from './components/os/os-edit/os-edit.component';
import { ProductCadastrarOsComponent } from './components/product/product-cadastrar/product-cadastrar-os/product-cadastrar-os.component';
import { ManufactureCadastrarOsComponent } from './components/manufacture/manufacture-cadastrar/manufacture-cadastrar-os/manufacture-cadastrar-os.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentCadastrarComponent } from './components/payment/payment-cadastrar/payment-cadastrar.component';
import { PaymentEditComponent } from './components/payment/payment-edit/payment-edit.component';
import { ManufactureEditOsComponent } from './components/manufacture/manufacture-edit/manufacture-edit-os/manufacture-edit-os.component';
import { ProductEditOsComponent } from './components/product/product-edit/product-edit-os/product-edit-os.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'cliente/cadastrar', component: ClientCadastrarComponent },
  { path: 'cliente/:id', component: ClientDetailComponent },
  { path: 'cliente/:id/editar', component: ClientEditComponent },
  { path: 'funcionario', component: EmployeeComponent },
  { path: 'funcionario/:id', component: EmployeeDetailComponent },
  { path: 'produto', component: ProductComponent },
  { path: 'produto/cadastrar', component: ProductCadastrarComponent },
  { path: 'produto/cadastrar/:id-os', component: ProductCadastrarOsComponent },
  { path: 'produto/:id', component: ProductDetailComponent },
  { path: 'produto/:id/editar', component: ProductEditComponent },
  { path: 'produto/:id/editar/:id-os/:pos', component: ProductEditOsComponent },
  { path: 'servico', component: ManufactureComponent },
  { path: 'servico/cadastrar', component: ManufactureCadastrarComponent },
  { path: 'servico/cadastrar/:id-os', component: ManufactureCadastrarOsComponent },
  { path: 'servico/:id', component: ManufactureDetailComponent },
  { path: 'servico/:id/editar', component: ManufactureEditComponent },
  { path: 'servico/:id/editar/:id-os/:pos', component: ManufactureEditOsComponent },
  { path: 'carro', component: CarComponent },
  { path: 'carro/cadastrar', component: CarCadastrarComponent },
  { path: 'carro/:placa', component: CarDetailComponent },
  { path: 'carro/:placa/editar', component: CarEditComponent },
  { path: 'adiantamento', component: AdvanceComponent },
  { path: 'adiantamento/cadastrar', component: AdvanceCadastrarComponent },
  { path: 'adiantamento/:id', component: AdvanceDetailComponent },
  { path: 'adiantamento/:id/editar', component: AdvanceEditComponent },
  { path: 'pagamento', component: PaydayComponent },
  { path: 'pagamento/cadastrar', component: PaydayCadastrarComponent },
  { path: 'pagamento/:id', component: PaydayDetailComponent },
  { path: 'pagamento/:id/editar', component: PaydayEditComponent },
  { path: 'pagamento-os', component: PaymentComponent },
  { path: 'pagamento-os/cadastrar/:id-os', component: PaymentCadastrarComponent },
  /*{ path: 'pagamento-os/:id', component: PaydayDetailComponent },*/
  { path: 'pagamento-os/:id/editar/:id-os', component: PaymentEditComponent },
  { path: 'os', component: OsComponent },
  { path: 'os/cadastrar', component: OsCadastrarComponent },
  { path: 'os/:id', component: OsDetailComponent },
  { path: 'os/:id/editar', component: OsEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
