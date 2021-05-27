import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoiEntity } from '..';

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PoiEntity[]> {
    return this.http.get<PoiEntity[]>('assets/poi.json');
  }

}
