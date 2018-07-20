import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly offer_url = '/api/search/1';

  constructor(private http: HttpClient) { }

  getData(url?: string) {
    return this.http.get(url || this.offer_url);
  }
}

