import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import application's components
import { FindComponent } from './find/find.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:title', component: SearchResultComponent },
  { path: 'find', component: FindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
