import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  url: string = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) { }

  getLivros(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
