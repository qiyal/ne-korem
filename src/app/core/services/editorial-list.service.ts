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

  // getEditorialList(): EditorialList[] {
  //   this.logger.log('Getting editorial lists.[EditorialListService]');
  //   return this.editorialLists;
  // }

  // this.editorialLists = [
  //   new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 500, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
  //   new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 3432, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
  //   new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 23030, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
  //   new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 443234, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
  //   new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 1123232, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
  //   new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 12233223, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"')
  // ];
}
