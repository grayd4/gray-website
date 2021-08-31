import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThisSiteComponent } from './professional-subcomp/this-site/this-site.component';
import { KeyboardComponent } from './professional-subcomp/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfessionalComponent,
    PersonalComponent,
    HomeComponent,
    ThisSiteComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  //exports:[MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
