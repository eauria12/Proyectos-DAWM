import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getData<T>(url: string) {
    url = "https://restcountries.com/v3.1/all"
    return this.http.get<T[]>(url)
  }
}
