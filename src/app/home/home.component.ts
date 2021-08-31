import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
//import 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  youtube = "https://www.youtube.com/channel/UCo1MZNYu4OpUf9J-7a7HCkw";
  linkedin = "https://www.linkedin.com/in/danieldgray/"
  github = "https://github.com/grayd4";
  page = 'about';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sideMenuClick(path: String) {
    if (path != "" && path != "professional" && path != "personal") {
      // Invalid url
      return;
    }
    this.router.navigateByUrl('/' + path);
  };

  toolBarIconClick(icon: String) {
    switch(icon) {
      case "youtube": {
        window.location.href = this.youtube;
        break;
      }
      case "linkedin": {
        window.location.href = this.linkedin;
        break;
      }
      case "github": {
        window.location.href = this.github;
        break;
      }
      default: {
        break;
      }

    }
  }
}
