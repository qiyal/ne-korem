import {Movie} from './movie';

export class Editorial {
  constructor(
    public id: number,
    public userId: number,
    public photoUrl: string,
    public title: string,
    public movieIds: [],
    public subscriber: number,
    public texts: string[],
    public price: number
  ) {}
}
