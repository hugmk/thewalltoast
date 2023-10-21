import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
}
