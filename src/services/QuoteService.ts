import { HttpService } from "./httpService";

export class QuoteService {
  private httpService: HttpService;
  private quoteEndpoint: string;

  constructor() {
    this.quoteEndpoint = "/quotes/anime";
    this.httpService = new HttpService()
  }
  
  getQuotes(title: string) {
    return this.httpService.get(this.quoteEndpoint, { params: { title } });
  }
}
