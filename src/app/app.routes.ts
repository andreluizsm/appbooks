import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { BookSearchComponent } from './book-search/book-search.component';

export const routes: Routes = [
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'app-book-search',
        component: BookSearchComponent
    },
    {
        path: '',
        redirectTo: 'app-book-search',
        pathMatch: 'full'
    }
];
