import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getFavorites();
  }

}
