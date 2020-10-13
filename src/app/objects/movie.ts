export class Movie {
  constructor(
    public time: number,
    public totalTime: number,
    public timeHour: string,
    public imgSrc: string,
    public name: string,
    public rating: number,
    public date: Date
  ) {
  }
}
