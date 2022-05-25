import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GetAProposalComponent } from './get-a-proposal/get-a-proposal.component';
import { ServiceSectionComponent } from './service-section/service-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GetAProposalComponent,
    ServiceSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
