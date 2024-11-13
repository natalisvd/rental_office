import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { StandardResponse } from '../models/standard-response';
import { Map } from '../models/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl: string = `${environment.backendUrl}v1/`;

  constructor(private http: HttpClient) { }

  getMapInfo(id: number): Observable<StandardResponse<Map | null>> {
    const requestPayload = { id: id };
    return this.http.post<StandardResponse<Map | null>>(this.apiUrl + 'getmapinfo', requestPayload);
  }

}
