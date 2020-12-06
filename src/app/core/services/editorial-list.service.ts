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

  updateOnlySubs(obj: Editorial): Observable<Editorial> {
    // console.log('id:' + id);
    // console.log('subs: ' + subs);

    return this.http.put<Editorial>(this.api + `/editorials/${obj.id}`, obj);
  }
}
