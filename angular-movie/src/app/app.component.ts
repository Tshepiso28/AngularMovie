import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, NavbarComponent, FooterComponent, AboutUsComponent],
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {}