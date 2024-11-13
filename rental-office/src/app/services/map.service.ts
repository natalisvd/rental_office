import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl: string = `${environment.backendUrl}v1/`;

  constructor(private http: HttpClient) { }

  getMapInfoPOST(id: number): Observable<any> {
    const requestPayload = { id: id };
    return this.http.post<any>(this.apiUrl + 'getmapinfo', requestPayload);
  }

  getMapInfo(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>(this.apiUrl + 'getmapinfo', { params });
  }

}
