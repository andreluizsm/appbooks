import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favorites: any[] = [];
  selectedBook: any = null;
  filteredFavorites: any[] = [];
  selectedOrder: string = 'desc';

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getFavorites();
    this.sortFavorites();
  }

  removeFromFavorites(book: any): void {
    this.favoritesService.removeFromFavorites(book);
    this.favorites = this.favoritesService.getFavorites();
    this.sortFavorites();
  }

  openReviewModal(book: any): void {
    this.selectedBook = { ...book };
  }

  closeModal(): void {
    this.selectedBook = null;
  }

  saveReview(): void {
    const index = this.favorites.findIndex(fav => fav.id === this.selectedBook.id);
    if (index !== -1) {
      this.favorites[index] = { ...this.selectedBook };
      this.sortFavorites();
    }
    this.closeModal();
  }

  sortFavorites(): void {
    this.filteredFavorites = [...this.favorites].sort((a, b) => {
      return this.selectedOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating;
    });
  }

}
