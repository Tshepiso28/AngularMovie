import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, MovieListComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {}