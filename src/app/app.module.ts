import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import { AgenciesComponent } from './views/agencies/agencies.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgencyDetailComponent } from './views/agency/agency-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    AgencyDetailComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    CommonsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
