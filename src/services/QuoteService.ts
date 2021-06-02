import { HttpService } from "./httpService";

export class QuoteService {
  constructor(public httpService: HttpService, private quoteEndpoint: string) {
    quoteEndpoint = "/quotes/anime";
  }
  getQuotes(title: string) {
    return this.httpService.get(this.quoteEndpoint, { params: { title } });
  }
}
