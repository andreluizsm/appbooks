import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { FavoritesComponent } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookSearchComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appbooks';
}
