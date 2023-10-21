import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public appName = "The Wall Toast";
  public searchTerm = "";

  constructor(private router: Router) {}

  public onSearch() {
    console.log("searching");
    if(this.searchTerm.length >= 2) {
      const state = { searchTerm: this.searchTerm };
      if(this.router.url == "/search") {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/search'], { state });
          window.location.reload();
        });
      }
      else {
        this.router.navigateByUrl('/search', { state });
      }
    }
  }

  public goToHomePage() {
    console.log("home");
    this.router.navigateByUrl('/');
  }
}
