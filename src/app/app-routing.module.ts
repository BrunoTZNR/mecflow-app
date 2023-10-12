import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OsComponent } from './components/os/os.component';
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
  { path: 'produto/:id', component: ProductDetailComponent },
  { path: 'produto/:id/editar', component: ProductEditComponent },
  { path: 'servico', component: ManufactureComponent },
  { path: 'servico/cadastrar', component: ManufactureCadastrarComponent },
  { path: 'servico/:id', component: ManufactureDetailComponent },
  { path: 'servico/:id/editar', component: ManufactureEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
