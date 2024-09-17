import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service.js';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})

export class BookSearchComponent {
  searchQuery: string = '';
  books: any[] = [];
  searchPerformed: boolean = false;
  selectedBook: any = null;

  constructor(private bookService: BookService, private favoritesService: FavoritesService) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.bookService.searchBooks(this.searchQuery).subscribe(
        {
          next:  (books) => {
            this.books = books;
            this.searchPerformed = true;
          },
         error: (error) => {
            console.error('Error fetching books:', error);
            this.books = [];
            this.searchPerformed = true;
          }
        }
      );
    }
  }

  addToFavorites(book: any): void {
    this.favoritesService.addToFavorites(book);
  }
  showDescription(book: any): void {
    this.selectedBook = book;
  }

  closeModal(): void {
    this.selectedBook = null;
  }
}
