import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        // Default is just about component
        path: "",
        component: AboutComponent
      },
      {
        path: "professional",
        component: ProfessionalComponent
      },
      {
        path: "personal",
        component: PersonalComponent
      }
    ]
  },
  {
    // Invalid URLs just go to base page
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
