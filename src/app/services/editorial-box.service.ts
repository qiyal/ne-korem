import { Injectable } from '@angular/core';
import {Editorial} from '../objects/editorial';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';

@Injectable()
export class EditorialBoxService {
  private editorials: Editorial[];

  constructor(private logger: LoggerService) {
    this.editorials = [
      // new Editorial('rgb(33,69,117)', 'linear-gradient(90deg, rgba(33,69,117,1) 0%, rgba(142,51,51,1) 29%, rgba(31,44,73,1) 90%)', new Movie(16, 3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie1.jpg', '', '', 'The Avengers', 9.3, 2012, 900, 90, '', '')),
      // new Editorial('rgb(131,26,26)', 'linear-gradient(90deg, rgba(131,26,26,1) 0%, rgba(116,29,29,1) 29%, rgba(43,58,92,1) 90%)', new Movie(17, 3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie4.jpg', '', '', 'Avengers: Age of Ultron', 2.2, 2015, 900, 90, '', '')),
      // new Editorial('rgb(0,0,0)', 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(202,141,28,1) 29%, rgba(9,9,8,1) 90%)', new Movie(18, 3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie3.webp', '', '',  'Avengers: Infinity War', 3.5, 2018, 900, 90, '', '')),
      // new Editorial('rgb(0,0,0)', 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(160,86,160,1) 29%, rgba(0,0,0,1) 90%)', new Movie(19, 3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie2.webp', '', '', 'Avengers: Endgame', 5.1, 2019, 900, 90, '', ''))
    ];
  }

  public getEditorials(): Editorial[] {
    this.logger.log('Getting editorials box.[EditorialBoxService]');
    return this.editorials;
  }
}
