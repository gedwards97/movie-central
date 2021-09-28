import { Component, OnInit } from '@angular/core';
// Import http service
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  title: string = '';
  titleAlert: string = 'Please enter a movie title.';

  // Dependency injection of Formbuilder in search component constructor
  constructor(private fb: FormBuilder, private router: Router) { 
    this.rForm = fb.group({
      'title': [null, Validators.required]
    })
  }

  // Lifecycle hook (always runs when component is loaded)
  ngOnInit() {
  }
  
  // Method called everytime submit button is clicked
  searchSubmit(post){
    this.title = post.title;
    this.router.navigate(['/search', this.title]);
  }
}
