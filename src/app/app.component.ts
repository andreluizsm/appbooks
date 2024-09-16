import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appbooks';
}
