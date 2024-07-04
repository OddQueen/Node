import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
declare var Book: any;

export class BooksService {
  private url = 'http://localhost:3000/api/books'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getOne(id_book: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id_book}`);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  edit(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.url}/${book.id_book}`, book);
  }

  delete(id_book: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id_book}`);
  }
}
