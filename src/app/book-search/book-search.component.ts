import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
        (books) => {
          this.books = books;
          this.searchPerformed = true;
        },
        (error) => {
          console.error('Error fetching books:', error);
          this.books = [];
          this.searchPerformed = true;
        }
      );
    }
  }

  addToFavorites(book: any): void {
    // Lógica para adicionar o livro aos favoritos
    console.log('Add to favorites:', book);
  }
}
