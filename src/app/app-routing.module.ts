import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OsComponent } from './components/os/os.component';
import { ClientComponent } from './components/client/client.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientCadastrarComponent } from './components/client/client-cadastrar/client-cadastrar.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'cliente/cadastrar', component: ClientCadastrarComponent },
  { path: 'cliente/:id', component: ClientDetailComponent },
  { path: 'cliente/:id/editar', component: ClientEditComponent },
  { path: 'os', component: OsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
