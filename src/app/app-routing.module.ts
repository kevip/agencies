import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './views/agencies/agencies.component';
import { AgencyDetailComponent } from './views/agency/agency-detail.component';
import { AgencyResolver } from './commons/resolvers/agency.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: AgenciesComponent,
  },
  {
    path: 'agency/:code',
    component: AgencyDetailComponent,
    resolve: { agency: AgencyResolver }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
