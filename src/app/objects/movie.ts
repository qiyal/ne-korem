export class Movie {
  constructor(
    public id: number,
    public time: number,
    public totalTime: number,
    public timeHour: string,
    public imgSrc: string,
    public imgBigSrc: string,
    public name: string,
    public rating: number,
    public date: Date,
    public price: number,
    public discount: number
  ) {
  }
}
