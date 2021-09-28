import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public movieTitle;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    // Get the title parameter from the current url
    let title = this.route.snapshot.paramMap.get('title');
    this.movieTitle = title;
    console.log(this.movieTitle)
  }

}
