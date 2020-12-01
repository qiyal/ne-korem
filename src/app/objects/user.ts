import {ContinueMovies} from './continue-movies';

export class User {
  constructor(
    public id: number,
    public login: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public continueMovies: ContinueMovies[],
    public myMovies: number[],
    public favoriteMovie: number[],
    public myEditorials: number[]
  ) {}
}
