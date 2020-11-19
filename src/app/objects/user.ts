export class User {
  constructor(
    public id: number,
    public login: string,
    public password: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public continueMovies: number[],
    public myMovies: number[],
    public favoriteMovie: number[],
    public myEditorials: number[]
  ) {}
}
