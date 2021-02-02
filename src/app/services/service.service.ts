import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  setService(body: any): Observable<any> {
    return this.http.post<any>(environment.URL_SERVICE + 'addService', body);
  }

}
