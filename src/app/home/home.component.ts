import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  

}
