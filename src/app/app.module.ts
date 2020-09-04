import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import { AgenciesComponent } from './views/agencies/agencies.component';
import { AgencyDetailComponent } from './views/agency/agency-detail.component';
import { environment } from 'src/environments/environment';

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
