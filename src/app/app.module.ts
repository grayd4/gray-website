import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfessionalComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  //exports:[MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
