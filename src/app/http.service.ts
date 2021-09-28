import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private movieTitle: string;

  constructor(private http: HttpClient) { }

  searchMovie(title: string) {
    this.movieTitle = title;
    var baseURL = "https://api.themoviedb.org/3/"
    // Move to secure file
    var apiKey = "a6d9e4715f80ce872dfb1e5869441ea6"

    var searchURL = baseURL + 'search/movie?api_key=' + apiKey + '&query=' + this.movieTitle
    
    return this.http.get(searchURL)
  }
}
