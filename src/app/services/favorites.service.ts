import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = [];

  constructor() {}

  addToFavorites(book: any): void {
    if(!book.id){
      book.id = this.generateId();
    }
    
    if (!this.favorites.find(fav => fav.id === book.id)) {
      this.favorites.push(book);
    } else {
      console.log('Book is already in favorites:', book);
    }
  }

  removeFromFavorites(book: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== book.id);
    console.log('Book removed from favorites:', book);
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  private generateId(): string{
    return uuidv4();
  }
}
