import { Injectable } from '@angular/core';
import {EditorialList} from '../objects/editorial-list';
import {LoggerService} from './logger.service';

@Injectable()
export class EditorialListService {
  private editorialLists: EditorialList[];

  constructor(private logger: LoggerService) {
    this.editorialLists = [
      new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 500, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
      new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 3432, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
      new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 23030, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
      new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 443234, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
      new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 1123232, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
      new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 12233223, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"')
    ];
  }

  getEditorialList(): EditorialList[] {
    this.logger.log('Getting editorial lists.[EditorialListService]');
    return this.editorialLists;
  }
}
