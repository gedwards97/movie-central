import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public movieTitle;
  searchResult: Array<any>;
  movieDescription: string;
  releaseDate: string;
  posterPath: string;
  scoreBenchmark: number;
  movieScore: number;
  barWidth: number;
  barColor: string;
  barTextColor: string;
  imageURL: string = 'https://image.tmdb.org/t/p/'
  imageWidth: string = 'w342'

  constructor(private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit(){
    // Get the title parameter from the current url
    let title = this.route.snapshot.paramMap.get('title');
    this.movieTitle = title;
    this.scoreBenchmark = 10;

    
    // Now need to query TMDB
    this._http.searchMovie(this.movieTitle).subscribe(data => {
      this.searchResult = data["results"];
      this.posterPath = (this.searchResult[0])["poster_path"];
      this.movieTitle = (this.searchResult[0])["original_title"];
      this.movieDescription = (this.searchResult[0])["overview"];
      this.releaseDate = (this.searchResult[0])["release_date"];
      this.movieScore = (this.searchResult[0])["vote_average"];
      this.barWidth = (this.movieScore/this.scoreBenchmark)*350;    
      
      // Bar styling
      if (this.movieScore > 6.5) {
        this.barColor = "green";
        this.barTextColor = "black";
      } else if (this.movieScore > 3.5) {
        this.barColor = "yellow";
        this.barTextColor = "black";
      } else {
        this.barColor = "red";
        if (this.movieScore < 1.5) {
          this.barTextColor = "white";
        } else {
          this.barTextColor = "black";
        }
      }

      console.log(this.searchResult);
      console.log(this.movieTitle);
      console.log(((this.movieScore / this.scoreBenchmark) * 100)*3.5)
    }, error => {
      // Escape route if theres an error connecting to the MDB API
      console.log('An error occurred: ', error)
    });
  }
}
