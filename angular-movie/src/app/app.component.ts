import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, NavbarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {}