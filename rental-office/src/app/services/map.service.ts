import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { StandardResponse } from '../models/standard-response';
import { Map } from '../models/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl: string = `${environment.backendUrl}${environment.apiPrefix}`;

  constructor(private http: HttpClient) { }

  getMapInfoPOST(id: number): Observable<StandardResponse<Map | null>> {
    const requestPayload = { id: id };
    return this.http.post<StandardResponse<Map | null>>(this.apiUrl + 'resource/getmapinfo', requestPayload);
  }

  getMapInfo(id: number): Observable<StandardResponse<Map | null>> {
    // const params = new HttpParams().set('id', id.toString());
    return this.http.get<StandardResponse<Map | null>>(this.apiUrl + 'resource/getmapinfo/' + id);
  }

}
