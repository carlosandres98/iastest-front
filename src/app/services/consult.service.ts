import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(private http: HttpClient) { }

  consultHours(technicialId: string, weekNumber: number): Observable<any>{
    return this.http.get<any>(environment.URL_SERVICE + 'findService/' + technicialId + '/' + weekNumber);
  }
}
