import { Injectable } from '@angular/core';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';

@Injectable()
export class ContinueMovieService {
  private continueMovies: Movie[];

  constructor(private logger: LoggerService) {
    this.continueMovies = [
      new Movie(1, 3000, 6170, '2 h 12 min', '../../assets/images/movies/movie7.webp', '../../assets/images/movie_details/movie9.webp', '../../assets/images/mivoes_logo_png/m1.png', 'Fantastic Beasts and Where to Find Them', 7.6, 2016, 899, 100, 'Мир Гарри Поттера за полвека до его рождения. Маг-зоолог носит в саквояже целый зоопарк волшебных зверей', 'Практически приквел саги о Гарри Поттере — сюжет разворачивается за 54 года до рождения юного волшебника в очках. Америка «ревущих» 1920-х, «сухой закон», гангстеры, бутлегеры и, конечно, магия. Главная роль у лауреата «Оскара» Эдди Редмэйна, его утвердили без проб. Успех картины дал основания превратить историю во франшизу из пяти частей.'),
      new Movie(2, 1400, 6170, '1 h 48 min', '../../assets/images/movies/movie9.webp', '../../assets/images/movie_details/movie10.webp', '../../assets/images/mivoes_logo_png/m2.png', 'A Dog\'s Purpose 2', 8.0, 2019, 599, 100, 'Пес Бэйли теперь в ответе за внучку любимого хозяина. Продолжение трогательной истории о реинкарнации собаки', 'Главного героя зовут Бэйли, он любит бекон и своего человека Итана. Они прожили вместе много счастливых лет, и вот настала пора прощаться. Но разве он может уйти, когда другу так нужна помощь? Ради Итана он готов на все… даже если в одной из жизней ему придётся стать девчонкой.'),
      new Movie(3, 4988, 6170, '', '../../assets/images/movies/movie2.webp', '../../assets/images/movie_details/movie5.webp', '../../assets/images/mivoes_logo_png/m3.png', 'Supernatural', 8.2, 2005, 600, 100, 'Братья Винчестеры стараются не выпустить демонов. Фантастический сериал, вдохновленный «Сумеречной зоной»', 'Сериал рассказывает о приключениях братьев Сэма и Дина Винчестеров, которые путешествуют по Соединённым Штатам на чёрном автомобиле Chevrolet Impala 1967 года, расследуют паранормальные явления, многие из которых основаны на американских городских легендах и фольклоре, и сражаются с порождениями зла, такими как демоны и призраки.')
    ];
  }

  public getContinueMovies(): Movie[] {
    this.logger.log('Getting continue movies.[ContinueMovieService]');
    return this.continueMovies;
  }

  public deleteMovie(index: number) {
    this.logger.log('Removing continue movie with index ' + index + ' in continueMovies array.[ContinueMovieService]');
    this.continueMovies.splice(index, 1);
  }
}
