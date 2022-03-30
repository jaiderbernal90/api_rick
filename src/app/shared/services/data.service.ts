import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  
  // Solicitud GET
  getRequest(path): Observable<string> {
    return this.http.get<string>(path);
  }

}
