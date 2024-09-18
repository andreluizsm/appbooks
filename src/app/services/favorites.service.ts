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
    }
  }

  removeFromFavorites(book: any): void {
    this.favorites = this.favorites.filter(fav => fav.id !== book.id);
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  private generateId(): string{
    return uuidv4();
  }
}
