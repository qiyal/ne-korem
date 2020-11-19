import {Movie} from "./movie";
import {Editorial} from "./editorial";

export class User {
  constructor(
    public id: number,
    public login: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public continueMovies: Movie[],
    public myMovies: Movie[],
    public favoriteMovie: Movie[],
    public myEditorials: Editorial[]
  ) {}
}
