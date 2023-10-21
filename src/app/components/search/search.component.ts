import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchTerm = "";

  ngOnInit() {
    console.log(history.state);
    this.searchTerm = history.state.searchTerm;
  }
}
