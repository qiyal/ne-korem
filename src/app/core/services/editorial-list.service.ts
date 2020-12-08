import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Editorial} from '../objects/editorial';

@Injectable()
export class EditorialListService {
  api = 'http://localhost:3000';

  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) {}

  get6EditorialLastAdd(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.api + `/editorials?_limit=6`);
  }

  getEditorialById(id: number): Observable<Editorial> {
    return this.http.get<Editorial>(this.api + `/editorials/${id}`);
  }

  getEditorialsHasUser(id: number): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.api + `/users/${id}/editorials`);
  }

  updateOnlySubs(obj: Editorial): Observable<Editorial> {
    return this.http.put<Editorial>(this.api + `/editorials/${obj.id}`, obj);
  }
}
