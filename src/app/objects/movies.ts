import {Movie} from './movie';
import {Editorial} from './editorial';
import {EditorialList} from './editorial-list';

export class Movies {
  public arrContinueMovies;
  public arrMovies1;
  public arrMovies2;
  public arrMovies3;
  public arrEditorial;
  public arrEditorialList;
  public arrEditorialListCard;

  constructor() {
    this.arrContinueMovies = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie7.webp', '', 'Fantastic Beasts and Where to Find Them', 9.0, new Date(1990, 1, 1), 899, 90),
      new Movie(1400, 6170, '1 h 21 min', '../../assets/images/movies/movie9.webp', '', 'A Dog\'s Purpose 2', 5.0, new Date(1990, 1, 1), 599, 90),
      new Movie(4988, 6170, '45 min', '../../assets/images/movies/movie2.webp', '', 'Supernatural', 8.5, new Date(1990, 1, 1), 600, 90),
    ];

    this.arrMovies1 = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie1.webp', '../../assets/images/movie_details/movie2.webp', 'Movies - 1', 9.3, new Date(1990, 1, 1), 900, 100),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie2.webp', '../../assets/images/movie_details/movie5.webp', 'Movies - 2', 5.1, new Date(1990, 1, 1), 699, 100),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie3.webp', '../../assets/images/movie_details/movie4.webp', 'Movies - 3', 3.5, new Date(1990, 1, 1), 799, 100),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie4.webp', '../../assets/images/movie_details/movie3.webp', 'Movies - 4', 2.2, new Date(1990, 1, 1), 699, 100),
    ];

    this.arrMovies2 = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie1.webp', '../../assets/images/movie_details/movie2.webp', 'Movies - 1', 9.3, new Date(1990, 1, 1), 900, 90),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie2.webp', '../../assets/images/movie_details/movie5.webp', 'Movies - 2', 5.1, new Date(1990, 1, 1), 699, 90),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie3.webp', '../../assets/images/movie_details/movie4.webp', 'Movies - 3', 3.5, new Date(1990, 1, 1), 799, 90),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie4.webp', '../../assets/images/movie_details/movie3.webp', 'Movies - 4', 2.2, new Date(1990, 1, 1), 699, 90),
    ];

    this.arrMovies3 = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie12.webp', '../../assets/images/movie_details/movie1.webp', 'Movies - 1', 8.1, new Date(1990, 1, 1), 900, 100),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie13.webp', '../../assets/images/movie_details/movie6.webp', 'Movies - 2', 7.6, new Date(1990, 1, 1), 699, 100),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie14.webp', '../../assets/images/movie_details/movie7.webp', 'Movies - 3', 9.5, new Date(1990, 1, 1), 799, 100),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie15.webp', '../../assets/images/movie_details/movie8.webp', 'Movies - 4', 9.7, new Date(1990, 1, 1), 699, 100),
    ];

    this.arrEditorial = [
      new Editorial('rgb(33,69,117)', 'linear-gradient(90deg, rgba(33,69,117,1) 0%, rgba(142,51,51,1) 29%, rgba(31,44,73,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie1.jpg', '', 'The Avengers', 9.3, new Date(2012, 1, 1), 900, 90)),
      new Editorial('rgb(131,26,26)', 'linear-gradient(90deg, rgba(131,26,26,1) 0%, rgba(116,29,29,1) 29%, rgba(43,58,92,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie4.jpg', '', 'Avengers: Age of Ultron', 2.2, new Date(2015, 1, 1), 900, 90)),
      new Editorial('rgb(0,0,0)', 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(202,141,28,1) 29%, rgba(9,9,8,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie3.webp', '', 'Avengers: Infinity War', 3.5, new Date(2018, 1, 1), 900, 90)),
      new Editorial('rgb(0,0,0)', 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(160,86,160,1) 29%, rgba(0,0,0,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie2.webp', '', 'Avengers: Endgame', 5.1, new Date(2019, 1, 1), 900, 90)),
    ];

    this.arrEditorialList = [
      new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 500, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
      new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 3432, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
      new EditorialList('Marvel', '../../../assets/images/editorial/logo/marvel.png', 20, 23030, 'Мстители', '\"../../../assets/images/editorial/edi1.jpeg\"'),
      new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 443234, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
      new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 1123232, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
      new EditorialList('DC', '../../../assets/images/editorial/logo/dc.jpg', 15, 12233223, 'Лига справедливости', '\"../../../assets/images/editorial/dc.jpg\"'),
    ];

    this.arrEditorialListCard = [
      {
        name: 'MARVEL',
        title: 'Мстители',
        price: 4999,
        imgUrl: '../../assets/images/editorial/logo/marvel.png'
      },
      {
        name: 'DC',
        title: 'Темный Рыцарь',
        price: 7999,
        imgUrl: '../../assets/images/editorial/logo/logo.jpg'
      },
      {
        name: 'MARVEL',
        title: 'Тор',
        price: 4599,
        imgUrl: '../../assets/images/editorial/logo/marvel.png'
      },
      {
        name: 'DC',
        title: 'Темный Рыцарь',
        price: 2999,
        imgUrl: '../../assets/images/editorial/logo/logo.jpg'
      },
      {
        name: 'MARVEL',
        title: 'Железный Человек',
        price: 3999,
        imgUrl: '../../assets/images/editorial/logo/marvel.png'
      },
      {
        name: 'DC',
        title: 'темный рыцарь',
        price: 2999,
        imgUrl: '../../assets/images/editorial/logo/logo.jpg'
      }
    ];

  }

}
