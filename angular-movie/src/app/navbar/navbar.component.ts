import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../services/movie.service';

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = '';
  resValue: string = "Search Results";
  searchResults: Movie[] = [];

  constructor(private movieService: MovieService) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(response => {
        this.searchResults = response.results;
      });
      console.log(this.resValue);
    }
  }
}
