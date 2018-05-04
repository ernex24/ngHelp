import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TutoGaleria} from './tutoriales';

@Injectable()
export class ArticulosService {
  private url: string = '../assets/data/articulos.json';

  constructor(private http: HttpClient) {}

  getImages(): Observable<TutoGaleria[]>{
    return this.http.get<TutoGaleria[]>(this.url);
  }
}
