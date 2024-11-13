import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl: string = `${environment.backendUrl}v1/`;

  constructor(private http: HttpClient) { }

  getMapInfo(id: number): Observable<any> {
    const requestPayload = { id: id };
    return this.http.post<any>(this.apiUrl + 'getmapinfo', requestPayload);
  }

}
