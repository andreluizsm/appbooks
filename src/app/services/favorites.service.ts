import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = [];

  constructor() {}

  addToFavorites(book: any): void {
    if (!this.favorites.find(fav => fav.id === book.id)) {
      this.favorites.push(book);
      console.log('Book added to favorites:', book);
    }
  }
  removeFromFavorites(book: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== book.id);
    console.log('Book removed from favorites:', book);
  }

  getFavorites(): any[] {
    return this.favorites;
  }
}
