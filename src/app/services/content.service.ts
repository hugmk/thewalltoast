import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }


  getSearchedContent(searchTerm: String, page: number): Observable<any[]> {
    const url = "";

    return this.http.get<any[]>(url);
  }
}
