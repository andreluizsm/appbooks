import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?q=${query}`).pipe(
      map(response => response.items.map((item: { volumeInfo: {id: any; title: any; authors: any; description: any; imageLinks: { thumbnail: any; }; }; }) => ({
        id: item.volumeInfo.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ['Unknown Author'],
        description: item.volumeInfo.description || 'No description available',
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Image'
      })))
    );
  }
}
