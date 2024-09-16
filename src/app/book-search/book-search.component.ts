import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service.js';


@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})

export class BookSearchComponent {

  searchQuery: string = '';
  books: any[] = [];
  searchPerformed: boolean = false;

  constructor(private bookService: BookService) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.bookService.searchBooks(this.searchQuery).subscribe(
        {
          next: (books) => {
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
    // Lógica para adicionar o livro aos favoritos
    console.log('Add to favorites:', book);
  }
}
