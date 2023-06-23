import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[] = [];

  constructor(private bookService : BookService) { }


  ngOnInit(): void { 
    this.getBooks(); //getBooks()'u çalıştırır
  }

  getBooks(){
    this.bookService.getBooks().subscribe(data => {  //bookService'i kullanarak getBooks() işlemini gerçekleştir ve o koda subscribe ol, dönüş datası için this.books = data; ol
      this.books = data;
    })
  }

}
