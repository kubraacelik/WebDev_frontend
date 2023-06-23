import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  path = "https://localhost:44335/api/books/getall";

  constructor(private httpClient : HttpClient) { }

  //Book listesi döndürecek
  getBooks() : Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.path); //httpClient'i kullanarak get işlemi gerçekleştir.Gelen JSON'ı Book array'ına ata. Yolu da this.path'tir
                                                   
  }
}
